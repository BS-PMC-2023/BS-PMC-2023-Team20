import React, { useEffect, useState } from "react";
import { doc, updateDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
import "./Confirmation.css";

const Confirmation = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      const reservationsCollection = collection(db, "reservations");
      const reservationDocs = await getDocs(reservationsCollection);
      const fetchedReservations = reservationDocs.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setReservations(fetchedReservations);
    }

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
        {reservations.map(reservation => (
          <div key={reservation.id} className="reservation-card">
            <p>Reservation ID: {reservation.id}</p>
            <p>Item ID: {reservation.Itemid}</p>
            <p>User ID: {reservation.Userid}</p>
            <p>First Name: {reservation.FirstName}</p>
            <p>Last Name: {reservation.LastName}</p>
            <p>From: {reservation.FromDate}</p>
            <p>Return: {reservation.ReturnDate}</p>
            <p>Status: {reservation.Status}</p>

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

export default Confirmation;
