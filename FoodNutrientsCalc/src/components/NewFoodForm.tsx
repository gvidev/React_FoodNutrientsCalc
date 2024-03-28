import React from "react";

const NewFoodForm = () => {
  return (
    <>
      <h1>Add new food</h1>
      <div className="ui centered grid">
        <form className="ui equal width form">
          <div className="fields">
            <div className="field">
              <label>Description</label>
              <input type="text" placeholder="First Name"></input>
            </div>
          </div>
          <div className="fields">
            <div className="field">
              <label>First name</label>
              <input type="text" placeholder="First Name"></input>
            </div>
            <div className="field">
              <label>Middle name</label>
              <input type="text" placeholder="Middle Name"></input>
            </div>
            <div className="field">
              <label>Middle name</label>
              <input type="text" placeholder="Middle Name"></input>
            </div>
            <div className="field">
              <label>Last name</label>
              <input type="text" placeholder="Last Name"></input>
            </div>
          </div>
          <div className="extra content">
            <div className="ui two buttons">
              <div className="ui basic green button">Approve</div>
              <div className="ui basic red button">Decline</div>
            </div>
          </div>
        </form>

        {false && (
          <div className="ui form">
            <div className="ui message">
              <div className="header">We had some issues</div>
              <ul className="list">
                <li>Please enter your first name</li>
                <li>Please enter your last name</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default NewFoodForm;
