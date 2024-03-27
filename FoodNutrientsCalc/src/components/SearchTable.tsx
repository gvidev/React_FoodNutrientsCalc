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
    calories: Number;
    proteins: Number;
    fats: Number;
    carbohydrates: Number;
  };

  getClickedFood: (data: Object) => void;
}

const SearchTable = ({ getClickedFood, foodElement }: SearchTableProps) => {
  const [query, setQuery] = useState(String);
  const [searchedFoods, setSearchedFoods] = useState(Array<typeof foodElement>);

  const handleInputChange = (evt: any) => {
    console.log(evt.target.value);
    setQuery(evt.target.value);
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
      <table className={"ui large selectable  table"}>
        <thead>
          <tr>
            <th>
              <div className="ui icon input left">
                <input
                  type="text"
                  placeholder="Search foods..."
                  value={query}
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
