import axios from "axios";
import { useState } from "react";

const NewFoodForm = () => {
  const [fields, setFields] = useState({
    description: "",
    calories: "",
    fats: "",
    proteins: "",
    carbohydrates: "",
  });
  const [onError, setOnError] = useState(String);
  const [onSuccess, setOnSuccess] = useState(String);

  const handleInput = (evt: any) => {
    const updFields = Object.assign({}, fields);
    updFields[evt.target.name] = evt.target.value;
    setFields(updFields);
  };

  const onFormSubmit = (evt: any) => {
    setOnError("");
    setOnSuccess("");
    evt.preventDefault();

    const fetchData = async () => {
      try {
        const { data: response } = await axios({
          method: "post",
          url: "http://localhost:8080/api/foods",
          data: fields,
          headers: { "Content-Type": "application/json" },
        });
        setOnSuccess("Successfully added new food!");
        console.log(response);
      } catch (error: any) {
        setOnError(
          "Already has a food with description: " + fields.description
        );
        console.error(error.message);
      }
    };
    fetchData();
  };

  return (
    <>
      <h1 className="ui olive massive label" style={{ color: "#264E86" }}>
        New Food Nutrients
      </h1>
      <div className="ui green inverted segment">
        <form className="ui huge inverted form" onSubmit={onFormSubmit}>
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
                name="fats"
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
                name="proteins"
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
                name="carbohydrates"
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
      {onError.length > 0 && (
        <label className="ui red big label">{onError}</label>
      )}
      {onSuccess.length > 0 && (
        <label className="ui green big label">{onSuccess}</label>
      )}
    </>
  );
};
export default NewFoodForm;
