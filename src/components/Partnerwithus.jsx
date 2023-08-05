import React from "react";
import "../css/partner_with_us.css";
import Header from "./Header";
function App() {
  return (
    <div className="AppContainer img3">
      <Header />
      <div class="container" style={{ maxWidth: "700px" }}>
        <div class="title">Seller Registration</div>
        <div class="content">
          <form action="/partner_with_us" method="post">
            <div class="user-details">
              <div class="input-box">
                <span class="details">Restaurant Name</span>
                <input
                  type="text"
                  placeholder="Enter Restaurant Name"
                  name="Name"
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">Location</span>
                <input
                  type="text"
                  placeholder="Enter Location"
                  name="Location"
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">Cover Image</span>
                <input
                  type="text"
                  placeholder="Enter Cover Image Link"
                  name="Image"
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">Description</span>
                <input
                  type="text"
                  placeholder="Enter Description"
                  name="Description"
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">Opening Timings</span>
                <input
                  type="time"
                  placeholder="Timing For A Day"
                  name="Open"
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">Closing Timings</span>
                <input
                  type="time"
                  placeholder="Timing For A Day"
                  name="Close"
                  required
                />
              </div>
            </div>
            <div>
              <span class="details">Days Working</span>
              <br />
              <input type="checkbox" id="Monday" name="Monday" value="mon" />
              <label for="Monday">Monday</label>
              <input type="checkbox" id="Tuesday" name="Tuesday" value="tue" />
              <label for="Tuesday">Tuesday</label>
              <input
                type="checkbox"
                id="Wednesday"
                name="Wednesday"
                value="wed"
              />
              <label for="Wednesday">Wednesday</label>
              <input
                type="checkbox"
                id="Thursday"
                name="Thursday"
                value="thu"
              />
              <label for="Thursday">Thursday</label>
              <input type="checkbox" id="Friday" name="Friday" value="fri" />
              <label for="Friday">Friday</label>
              <br />
              <input
                type="checkbox"
                id="Saturday"
                name="Saturday"
                value="sat"
              />
              <label for="Saturday">Saturday</label>
              <input type="checkbox" id="Sunday" name="Sunday" value="sun" />
              <label for="Sunday">Sunday</label>
            </div>
            <div>
              <span class="details">Days Working</span>
              <br />
              <input
                type="checkbox"
                id="TakeAWay"
                name="TakeAWay"
                value="taw"
              />
              <label for="TakeAWay">Take AWay</label>

              <input
                type="checkbox"
                id="Delivery"
                name="Delivery"
                value="del"
              />
              <label for="Delivery">Delivery</label>
              <div class="button">
                <input type="submit" value="Register" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
