import "./Order.css";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Aos from "aos";
import { auth } from "../../firebase-config";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { uid } from "uid";
import { db } from "../../firebase-config";

import Terms from "../Terms/Terms";

const Order = () => {
  const { state: item } = useLocation();
  const [user, loading] = useAuthState(auth);
  const [FromDate, setFromDate] = useState("");
  const [ReturnDate, setReturnDate] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const [active, setActive] = useState("addBar");
  const showadd = () => {
    setNumClicks(numClicks + 1);
    setActive("addBar activeaddbar");
  };
  //function to remove addbar
  const removeaddbar = () => {
    setNumClicks(0);
    setActive("addBar");
  };

  const [numClicks, setNumClicks] = useState(0);

  function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
  }

  function handleCheckboxClick() {
    if (numClicks === 0) {
      showadd();
    } else if (numClicks === 1) {
      removeaddbar();
    }
  }

  useEffect(() => {
    Aos.init({ duration: 4000 });

    console.log(item);
  }, [user]);

  let navigate = useNavigate();

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleSubmit = async () => {
    if (isChecked === false) 
    {
      alert("Please accept the terms and conditions");
      return;
    }
    const getuser = doc(db, "users", user.uid);
    const data = await getDoc(getuser);
    var userData = data.data();

    const getitem = doc(db, "items", item.uuid);

    var itemWithoutreservations = Object.assign({}, item);
    delete itemWithoutreservations.reservations;

    var ruid = uid();
    await setDoc(doc(db, "reservations", ruid), {
      FirstName: userData.FirstName,
      LastName: userData.LastName,
      Userid: user.uid,
      Itemid: item.uuid,
      FromDate: FromDate,
      ReturnDate: ReturnDate,
      timeStamp: serverTimestamp(),
    });

    await updateDoc(getitem, {
      reservations: [
        ...item.reservations,
        {
          FirstName: userData.FirstName,
          LastName: userData.LastName,
          ruid: ruid,
        },
      ],
    });

    await updateDoc(getuser, {
      reservations: [...userData.reservations, ruid],
    });

    await updateDoc(getuser, {});
    await sleep(1000);
    navigate("/Myorders");
  };

  return (
    <section id="main" className="main section container">
      <div className="secTitle">
        <h3 className="title">Order item now</h3>
      </div>

      <div className="secContent grid">
        <div className="imageDiv">
          <img src={item.ImageUrl} alt="" />
        </div>

        <div className="cardInfo">
          <h4 className="Title"> {item.ItemType}</h4>
          <span className="continent flex">
            <HiOutlineLocationMarker className="icon" />
            <span className="name">Location: {item.Location}</span>
          </span>

          <div className="Sirel">
            <p>Serial: {item.Serial}</p>
          </div>

          <div className="desc">
            <p>Description: {item.Description}</p>
          </div>

          <div>
            <div>
              <form className="card-form">
                <div className="form-group ">
                  <div className="DepartInput">
                    <label htmlFor="date">From:</label>
                    <div className="input flex">
                      <input
                        type="date"
                        value={FromDate}
                        min={new Date().toISOString().slice(0, 10)}
                        onChange={(event) => {
                          setFromDate(event.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="ReturnInput">
                  <label htmlFor="date">Return:</label>
                  <div className="input flex">
                    <input
                      type="date"
                      value={ReturnDate}
                      min={FromDate}
                      onChange={(event) => {
                        setReturnDate(event.target.value);
                      }}
                    />
                  </div>
                </div>
                {FromDate && ReturnDate && (
                  <div>
                    <p>
                      Number of rent days:{" "}
                      {Math.ceil(
                        (new Date(ReturnDate) - new Date(FromDate)) /
                          (1000 * 60 * 60 * 24)
                      )}
                    </p>
                  </div>
                )}
              </form>
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <p onClick={handleCheckboxClick}>
                  I agree to the terms and conditions.
                </p>
              </label>

              <header className="header flex">
                <div className={active}>
                  <Terms />
                </div>
              </header>
              <div>
                <button className="btn">
                  <a
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    Submit
                  </a>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
