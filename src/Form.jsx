import React from "react";
import "./Form.css";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Hotels from "./hotels.json";

export default function Form() {
  const hotels = require("./hotels.json");

  const [values, setValues] = useState({
    name: "",
    guests: 2,
    priceNight: 0,
  });

  const today = new Date();
  const [date, setDate] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [hotel, setHotel] = useState("Breathless Punta Cana");
  const [night, setNight] = useState("3");
  const [breakfast, setBreakfast] = useState("");

  let nightInteger = parseInt(night);
  let guestsInteger = parseInt(values.guests);

  let total = 1;
  if (hotel === "Breathless Punta Cana") {
    total = total * nightInteger * guestsInteger * 150;
  } else if (hotel === "Sandals Royal Caribbean") {
    total = total * nightInteger * guestsInteger * 260;
  } else if (hotel === "Couples Swept Away") {
    total = total * nightInteger * guestsInteger * 135;
  } else if (hotel === "Royalton Riviera Cancun") {
    total = total * nightInteger * guestsInteger * 130;
  } else if (hotel === "RIU Bamboo") {
    total = total * nightInteger * guestsInteger * 85;
  } else if (hotel === "TUI Sensatori") {
    total = total * nightInteger * guestsInteger * 300;
  }

  let total2 = 1;
  if (hotel === "Breathless Punta Cana" && breakfast) {
    total2 = total2 * nightInteger * guestsInteger * 150 + 25;
  } else if (hotel === "Sandals Royal Caribbean" && breakfast) {
    total2 = total2 * nightInteger * guestsInteger * 260 + 22;
  } else if (hotel === "Couples Swept Away" && breakfast) {
    total2 = total2 * nightInteger * guestsInteger * 135 + 19;
  } else if (hotel === "Royalton Riviera Cancun" && breakfast) {
    total2 = total2 * nightInteger * guestsInteger * 130 + 15;
  } else if (hotel === "RIU Bamboo" && breakfast) {
    total2 = total2 * nightInteger * guestsInteger * 85 + 14;
  } else if (hotel === "TUI Sensatori" && breakfast) {
    total2 = total2 * nightInteger * guestsInteger * 300 + 35;
  }

  const handleNameInputChange = (event) => {
    setValues({ ...values, name: event.target.value });
  };

  const handleGuestsInputChange = (event) => {
    setValues({ ...values, guests: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.name && values.guests >= 1 && values.guests <= 3) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div class="form-container borderRad10">
      <form class="register-form " onSubmit={handleSubmit}>
        <div className="field1 maxWidth">
          <div className="displayFlexColumn">
            <label for="name">
              <b>Name: </b>
            </label>
            <input
              onChange={handleNameInputChange}
              value={values.name}
              id="first-name"
              class="form-field borderRad10"
              type="text"
              placeholder="Name"
            />
          </div>

          {submitted && !values.name ? (
            <span id="first-name-error">Please enter the full name</span>
          ) : null}

          <div className="displayFlexColumn borderRad10">
            <label for="start">
              <b>Hotel chosen: </b>
            </label>
            <select
              className="hotels"
              name="Hotels"
              id="Hotels"
              value={hotel}
              onChange={(e) => setHotel(e.target.value)}
            >
              {hotels.map((hotel) => (
                <option key={hotel.price_ppn} value={hotel.name}>
                  {hotel.name}
                </option>
              ))}
            </select>
          </div>

          <div className="paddingTop displayFlexColumn maxWidth">
            <label for="start">
              <b>Check In Date: </b>
            </label>

            <input
              type="date"
              minDate={new Date()}
              onChange={(e) => setDate(e.target.value)}
              min={new Date().toISOString().slice(0, -8)}
              id="date"
              type="datetime-local"
            />

            {submitted && !date ? (
              <span id="first-name-error">Please enter the date</span>
            ) : null}

            <div className="paddingTop maxWidth widthSetting">
              <label for="start">
                <b>Number of nights: </b>
              </label>
              <select
                className="noNights"
                name="NoNights"
                id="NoNights"
                value={night}
                onChange={(e) => setNight(e.target.value)}
              >
                <option value="3">3</option>
                <option value="7">7</option>
                <option value="10">10</option>
                <option value="14">14</option>
                <option value="30">30</option>
              </select>
            </div>

            <label className="paddingTop" for="start">
              <b>Number of guests: </b>
            </label>
            <input
              onChange={handleGuestsInputChange}
              values={values.guests}
              id="first-name"
              className="form-field borderRad10"
              type="number"
              placeholder="No. guests, shall be 1 to 3, we assume 2"
            />
            {(submitted && !values.guests) ||
            values.guests < 0 ||
            values.guests > 3 ? (
              <span id="first-name-error">Guests should between 1 and 3</span>
            ) : null}
          </div>

          <div className="paddingTop">
            <label for="Breakfast">
              <b>Breakfast </b>
            </label>
            <input
              type="checkbox"
              id="breakfast"
              name="Breakfast"
              value="yes"
              onClick={() => setBreakfast((c) => !c)}
              checked={breakfast}
              onChange={(e) => setBreakfast(e.target.value)}
            />
          </div>
        </div>

        <div className="formConfirmation borderRad10">
          <h4>Check the details once again before you hit register!</h4>
          <p>
            The <b>name</b> is: {values.name}
          </p>
          <p>
            The <b>hotel</b> is: {hotel}
          </p>
          <p>
            <b>Date/hour</b> : {date}
          </p>
          <p>
            The <b>no. of nights</b>: {night}
          </p>
          <p>
            The <b>no. of guests</b>: {values.guests}
          </p>
          <p>Breakfast? : {breakfast}</p>
          <p>
            <b>Total</b>: {breakfast ? total2 : total}
          </p>
        </div>

        <button
          class="form-field borderRad10 glow-on-hover button"
          type="submit"
        >
          Register
        </button>

        {submitted && valid ? (
          <div class="success-message borderRad10">
            Success! Thank you for booking with us!
          </div>
        ) : null}
      </form>
    </div>
  );
}

/*{
                Hotels.map(hotel =>
                  {
                    pricePerNight = hotel.price_ppn;
                  })
              }
              <p>Total is: {pricePerNight}</p>
               */
