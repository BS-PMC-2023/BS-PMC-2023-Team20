import React, { useEffect, useState } from "react";
import { doc, updateDoc, getDocs, getDoc, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
import "./Confirmation.css";

const Confirmation = () => {
  const [reservations, setReservations] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      const reservationsCollection = collection(db, "reservations");
      const reservationDocs = await getDocs(reservationsCollection);
      const fetchedReservations = [];

      for (let res of reservationDocs.docs) {
        const resData = res.data();
        const userDocRef = doc(db, "users", resData.Userid);
        const userDocSnap = await getDoc(userDocRef);
        const userData = userDocSnap.data();

        fetchedReservations.push({
          id: res.id,
          ...resData,
          UserRoles: userData.userRoles
        });
      }

      fetchedReservations.sort((a, b) => b.UserRoles.includes("teacher") - a.UserRoles.includes("teacher"));
      
      setReservations(fetchedReservations);

      // Fetch the items related to these reservations
      const fetchedItems = await Promise.all(
        fetchedReservations.map(async (res) => {
          const itemDocRef = doc(db, "items", res.Itemid);
          const docSnap = await getDoc(itemDocRef);
          return docSnap.data();
        })
      );

      setItems(fetchedItems);
    };

    fetchReservations();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    const reservationDocRef = doc(db, "reservations", id);
    await updateDoc(reservationDocRef, { Status: newStatus });
    setReservations(reservations.map(res => res.id === id ? { ...res, Status: newStatus } : res));
  }

  return (
    <section id="main" className="main section container">
      <div className="secTitle">
        <h3 className="title">Confirmation page</h3>
      </div>

      <div className="secContent grid">
        {reservations.map((reservation, index) => (
          <div key={reservation.id} className={`reservation-card ${reservation.UserRoles.includes('teacher') ? 'teacher' : ''}`}>
            <img src={items[index]?.ImageUrl} alt="" />
            <p>Reservation ID: {reservation.id}</p>
            <p>First Name: {reservation.FirstName}</p>
            <p>Last Name: {reservation.LastName}</p>
            <p>From: {reservation.FromDate}</p>
            <p>Return: {reservation.ReturnDate}</p>
            <p>Status: {reservation.Status}</p>
            {reservation.UserRoles.includes('teacher') && <p className='teach'>Lecturer</p>}
            <div className="status-buttons">
              <button
                className="btn"
                onClick={() => handleStatusChange(reservation.id, "Pending")}
              >
                Set as Pending
              </button>
              <button
                className="btn"
                onClick={() => handleStatusChange(reservation.id, "Cancel")}
              >
                Cancel
              </button>
              <button
                className="btn"
                onClick={() => handleStatusChange(reservation.id, "Accept")}
              >
                Accept
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Confirmation
