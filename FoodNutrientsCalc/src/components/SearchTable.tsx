import TableHeader from "./TableHeader";
import { useState, useEffect } from "react";
import axios from "axios";

interface SearchTableProps {
  searchedFoods: [
    {
      id: number;
      description: String;
      calories: number;
      proteins: number;
      fats: number;
      carbohydrates: number;
    }
  ];

  foodElement: {
    id: number;
    description: String;
    calories: number;
    proteins: number;
    fats: number;
    carbohydrates: number;
  };

  getClickedFood: (data: Object) => void;
}

const SearchTable = ({ getClickedFood, foodElement }: SearchTableProps) => {
  const [query, setQuery] = useState("empty");
  const [searchError, setSearchError] = useState("");
  const [searchText, setSearchText] = useState(String);
  const [searchedFoods, setSearchedFoods] = useState(Array<typeof foodElement>);
  const specialChars = /[~`$&+:;=?@#|'<>.-^*(){}%!"]/;

  const handleInputChange = (evt: any) => {
    let text = evt.target.value;
    let length = evt.target.textLength;

    if (!specialChars.test(text)) {
      setSearchText(text);
      setSearchError("");
      if (length >= 2) {
        setQuery(text);
      }
    } else {
      setSearchError("Invalid symbol " + text[text.length - 1] + "");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "http://localhost:8080/api/foods/search?query=" + query + ""
        );
        setSearchedFoods(response);
      } catch (error: any) {
        console.error(error.message);
      }
    };
    fetchData();
  }, [query]);

  return (
    <>
      {searchError != "" && <h3 className="ui red header">{searchError}</h3>}
      <table className={"ui large selectable  table"}>
        <thead>
          <tr>
            <th>
              <div className="ui icon input left">
                <input
                  type="text"
                  placeholder="Search foods..."
                  value={searchText}
                  onChange={handleInputChange}
                ></input>
                <i className="circular search link icon"></i>
              </div>
            </th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <TableHeader></TableHeader>
        <tbody>
          {searchedFoods.map((food) => (
            <tr
              key={food.id}
              onClick={() => {
                getClickedFood(food);
              }}
            >
              <td>{food.description}</td>
              <td className="right aligned">{food.calories}</td>
              <td className="right aligned">{food.proteins}</td>
              <td className="right aligned">{food.fats}</td>
              <td className="right aligned">{food.carbohydrates}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SearchTable;
