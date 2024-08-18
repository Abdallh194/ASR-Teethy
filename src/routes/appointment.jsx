import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { HandelSearchBook, HandleDeleteBook } from "../Redux/TeethySlice";
const Appointment = () => {
  let { AppointmentPrice, ResultSearch } = useSelector((s) => s.Teeth);
  let [Rev_Name, setRev_Name] = useState("");
  let [Rev_Mobile, setRev_Mobile] = useState("");
  let dispatch = useDispatch();
  return (
    <div className="Booking ">
      <div className="overlay">
        <Container>
          <div className="head AppointmentHead">Appointments </div>
          <div className="desc">
            All you have to do is enter Your Name and your Mobile
          </div>
          <Form
            className="AppointmentForm"
            onSubmit={(e) => {
              e.preventDefault();
              if (Rev_Name.length > 0 && Rev_Mobile.length > 0) {
                dispatch(HandelSearchBook({ Rev_Name, Rev_Mobile }));
              } else {
              }
            }}
          >
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              onChange={(e) => {
                setRev_Name(e.target.value);
              }}
            />
            <input
              type="number"
              className="form-control"
              placeholder="Enter Your Phone Number"
              onChange={(e) => {
                setRev_Mobile(e.target.value);
              }}
            />
            <button className="btn btn-light">Search</button>
          </Form>
          {ResultSearch.length > 0 ? (
            <div className="Result">
              <h3 style={{ fontWeight: "bold" }}>Booking details</h3>
              {ResultSearch.map((e) => {
                return (
                  <div className="userBook" key={e.mobile}>
                    <div className="content">
                      <div className="details">User Name :</div>
                      <div className="details">
                        {" "}
                        {e.first_name} {e.last_name}
                      </div>
                    </div>
                    <div className="content">
                      <div className="details">Date : </div>
                      <div className="details">
                        {e.date.slice(0, 10)} {e.date.slice(11, 18)}
                      </div>
                    </div>
                    <div className="content">
                      <div className="details">Mobile Number : </div>
                      <div className="details">{e.mobile}</div>
                    </div>
                    <div className="content">
                      <div className="details">Appointment Price : </div>
                      <div className="details">{AppointmentPrice}</div>
                    </div>

                    <div className="content">
                      <div className="details dltIcon">
                        <i
                          class="bi bi-trash-fill"
                          style={{ color: "red" }}
                          onClick={(e) => {
                            dispatch(HandleDeleteBook());
                          }}
                        ></i>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            " "
          )}
        </Container>
      </div>
    </div>
  );
};

export default Appointment;
