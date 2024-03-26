import { useState } from "react";

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
  sendDataToParent: (data: any) => void;
}

const SearchTable = ({ searchedFoods, sendDataToParent }: SearchTableProps) => {
  const [data, setData] = useState(Object);

  function handleClick() {
    sendDataToParent(data);
  }
  return (
    <>
      <table className={"ui large selectable  table"}>
        <thead>
          <tr>
            <th>
              <div className="ui icon input left">
                <input type="text" placeholder="Search foods..."></input>
                <i className="circular search link icon"></i>
              </div>
            </th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th className="ten wide">Description</th>
            <th>{"Kcal"}</th>
            <th>{"Protein (g)"}</th>
            <th>{"Fat (g)"}</th>
            <th>{"Carbs (g)"}</th>
          </tr>
        </thead>
        <tbody>
          {searchedFoods.map((food) => (
            <tr
              key={food.id}
              onClick={() => {
                sendDataToParent(food);
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
