import React, { useState } from "react";

const NewFoodForm = () => {
  const [fields, setFields] = useState({
    description: "",
    calories: "",
    fat: "",
    protein: "",
    carbs: "",
  });
  const [description, setDescription] = useState(String);
  const [calories, setCalories] = useState(Number);
  const [proteins, setProteins] = useState(Number);
  const [fats, setFats] = useState(Number);
  const [carbs, setCarbs] = useState(Number);

  const handleInput = (evt: any) => {
    const updFields = Object.assign({}, fields);
    updFields[evt.target.name] = evt.target.value;
    setFields(updFields);
    console.log(updFields);
  };

  return (
    <>
      <h1 className="ui olive massive label" style={{ color: "#264E86" }}>
        New Food Nutrients
      </h1>
      <div className="ui green inverted segment">
        <form className="ui huge inverted form">
          <div className="field">
            <div className="ui labeled input">
              <div className="ui olive label">Desc</div>
              <input
                type="text"
                name="description"
                placeholder="Enter description..."
                required
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="field">
            <div className="ui labeled input">
              <div className="ui olive label">Calories</div>
              <input
                type="number"
                name="calories"
                placeholder="Enter calories..."
                required
                onChange={handleInput}
              />
            </div>
          </div>
          <hr className="ui olive "></hr>
          <div className="field">
            <div className="ui labeled input">
              <div className="ui olive label">Fat</div>
              <input
                type="number"
                step="0.01"
                name="fat"
                placeholder="Enter fat..."
                required
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="field">
            <div className="ui labeled input">
              <div className="ui olive label">Protein</div>
              <input
                type="number"
                step="0.01"
                name="protein"
                placeholder="Enter protein..."
                required
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="field" style={{ paddingBottom: "10px" }}>
            <div className="ui labeled input">
              <div className="ui olive label">Carbohydrates</div>
              <input
                type="number"
                step="0.01"
                name="carbs"
                placeholder="Enter carbohydrates..."
                required
                onChange={handleInput}
              />
            </div>
          </div>

          <div className="ui buttons">
            <button className="ui inverted olive big button" type="submit">
              Submit
            </button>
            <button className="ui inverted red big button " type="button">
              Go Back
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default NewFoodForm;
