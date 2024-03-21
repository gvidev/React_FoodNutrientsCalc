import React from "react";

const AddFoodForm = () => {
  return (
    <>
      <h1 className="ui header">Add new food</h1>

      <div className="ui form">
        <div className="two fields">
          <div className="field">
            <label>Description</label>
            <input type="text" required></input>
          </div>
          <div className="field">
            <label>Calories</label>
            <input type="number" required></input>
          </div>
        </div>
        <div className="three fields">
          <div className="field">
            <label>{"Protein (g)"}</label>
            <input type="number" required></input>
          </div>
          <div className="field">
            <label>{"Fat (g)"}</label>
            <input type="number" required></input>
          </div>
          <div className="field">
            <label>{"Carbs (g)"}</label>
            <input type="number" required></input>
          </div>
        </div>
      </div>
      <button className="ui button" type="submit">
        Submit
      </button>
    </>
  );
};

export default AddFoodForm;
