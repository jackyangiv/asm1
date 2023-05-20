import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DatePicker } from "antd";
import styles from "./SearchItem.module.css";
import moment from "moment";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
const { RangePicker } = DatePicker;
const SearchItem = () => {
  const [enteredCountry, setEnteredCountry] = useState("Where are you going?");
  const inputCountry = (event) => {
    setEnteredCountry(event.target.value);
  };
  const [enteredDate, setEnteredDate] = useState("");
  const inputDate = (values) => {
    const test = values.map((item) => {
      return item.$d;
    });
    setEnteredDate(test);
  };
  const [enteredAdult, setEnteredAdult] = useState("");
  const [enteredChildren, setEnteredChildren] = useState("");
  const [enteredRoom, setEnteredRoom] = useState("");
  const inputAdult = (event) => {
    setEnteredAdult(event.target.value);
  };

  const inputChildren = (event) => {
    setEnteredChildren(event.target.value);
  };
  const inputRoom = (event) => {
    setEnteredRoom(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const inputData = {
      country: enteredCountry,
      date: enteredDate,
      adult: enteredAdult,
      children: enteredChildren,
      room: enteredRoom,
    };
    location.replace("./search");
    console.log(inputData);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className=" bg-white p-2 d-flex justify-content-center border rounded border-warning">
          <div className="px-2">
            <i class="fa fa-bed"></i>

            <span></span>
            <input
              onChange={inputCountry}
              type="text"
              placeholder={enteredCountry}
            />
          </div>
          <div className="px-2">
            <i class="fa fa-calendar"></i>
            <span></span>
            <RangePicker onChange={inputDate} />
          </div>
          <div className="px-2">
            <i class="fa fa-female"></i>
            <span></span>

            <input
              onChange={inputAdult}
              type="number"
              min="1"
              max="36"
              placeholder="1"
            />
            <span></span>
            <label>adult</label>
            <span></span>
            <span></span>
            <input
              onChange={inputChildren}
              type="number"
              min="1"
              max="9"
              placeholder="0"
            />
            <span></span>
            <label>children</label>
            <span></span>
            <span></span>
            <input
              onChange={inputRoom}
              type="number"
              min="1"
              max="9"
              placeholder="1"
            />
            <span></span>
            <label>room</label>
          </div>
          <div>
            <button
              onSubmit={submitHandler}
              className="btn bg-primary text-white p-2"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchItem;
