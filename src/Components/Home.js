import React, { useState } from "react";
import LOGO from "../Assets/Images/logo.png";
import $ from "jquery";
import "../Assets/Home.scss";
import Swal from "sweetalert2";

function Home() {
  const [Name, SetName] = useState("");
  const [Email, SetEmail] = useState("");
  const [Phone, SetPhone] = useState("");
  const [Checkbox1, SetCheckbox1] = useState("");
  const [Area, SetArea] = useState("");
  const [About, SetAbout] = useState("");

  //form validation
  const handlesubmit = (e) => {
    if (Name === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "'Name can't be empty'",
        timer: "2000",
      });
    } else if (Name === null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "'Name can't be empty'",
        timer: "2000",
      });
    } else if (Phone.length < 4) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Number should be at least 5 charcters long",
        timer: "2000",
      });
    } else if (Phone === null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Phone number can't be empty",
        timer: "2000",
      });
    } else if (Email.length < 3) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email should be at least 3 charcters long",
        timer: "2000",
      });
    } else if (Email.split("").filter((x) => x === "@").length !== 1) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email should contain @",
        timer: "2000",
      });
    } else if (Email.indexOf(".") === -1) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email should contain at least one dot",
        timer: "2000",
      });
    } else if (true) {
      $("#submit-form").submit((e) => {
        e.preventDefault();

        $.ajax({
          url: "add url",
          data: $("#submit-form").serialize(),
          method: "post",
          success: function () {
            Swal.fire({
              icon: "success",
              title: "Thank you",
              text: "Your submission has been sent",
              timer: "2000",
            });

            setTimeout(() => {
              window.location.reload(true);
            }, 3000);
          },
          error: function () {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something's wrong..",
              timer: "2000",
            });
          },
        });
      });
    }
  };

  const reseting = () => {
    SetName("");
    SetEmail("");
    SetPhone("");
    SetCheckbox1("");
    SetAbout("");
    SetArea("");
    window.location.reload(true);
  };

  return (
    <div className="home-main-container">
      <div className="logo-center">
        <img src={LOGO} />
      </div>

      <div className="parent-input-container">
        <form
          id="submit-form"
          name="mc-embedded-subscribe-form"
          className="validate"
        >
          <div
            id="submit-form"
            name="mc-embedded-subscribe-form"
            className="form"
          >
            <div className="mailbox-child1">
              <div className="inputparent-mailchild1">
                <input
                  type="text"
                  name="Name"
                  placeholder="Name"
                  id="mce-NAME"
                  onChange={(e) => SetName(e.target.value)}
                  min={1}
                  max={30}
                  className="input-fileds"
                />

                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  onChange={(e) => SetEmail(e.target.value)}
                  className="input-fileds"
                  id="mce-EMAIL"
                  min={4}
                  max={80}
                />

                <input
                  type="text"
                  name="Phone"
                  className="input-fileds"
                  id="mce-PHONE"
                  placeholder="Mobile"
                  onChange={(e) => SetPhone(e.target.value)}
                  min={2}
                  max={50}
                />
              </div>
            </div>

            <div className="mailbox-child2">
              <div className="inputparent-mailchild2">
                <div className="labeltext">
                  <div className="textcolor">Are you a DSO resident</div>

                  <div className="radiotext">
                    <input
                      className="radioinput"
                      type="radio"
                      name="Resident"
                      value="Yes"
                    />{" "}
                    <span>Yes</span>
                    <input
                      className="radioinput"
                      type="radio"
                      name="Resident"
                      value="No"
                    />{" "}
                    <span>No</span>
                  </div>
                </div>

                <input
                  type="text"
                  name="Area"
                  placeholder="If not a DSO resident, where do you live?"
                  className="input-fileds"
                  id="mce-AREA"
                  onChange={(e) => SetArea(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="Where did you hear about this event?"
                  name="Hearabout"
                  className="input-fileds"
                  id="mce-PHONE"
                  onChange={(e) => SetAbout(e.target.value)}
                />
              </div>
            </div>
            <div></div>
          </div>

          <div className="labeltext">
            <div className="textcolor">
              Would you like to informed about future events happening at DSO?
            </div>

            <div className="radiotext">
              <input
                className="radioinput"
                type="radio"
                name="Checkbox1"
                value="Yes"
              />{" "}
              <span>Yes</span>
              <input
                className="radioinput"
                type="radio"
                name="Checkbox1"
                value="No"
              />{" "}
              <span>No</span>
            </div>
          </div>

          <div className="input-fileds-button">
            <input
              type="submit"
              value="Submit"
              onClick={handlesubmit}
              name="subscribe"
              id="mc-embedded-subscribe"
              className="input-fileds-button1"
            />
            <input
              type="button"
              value="Reset"
              onClick={reseting}
              className="input-fileds-button2"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
