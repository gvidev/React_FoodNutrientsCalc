import TableHeader from "./TableHeader";

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
  getClickedFood: (data: Object) => void;
}

const SearchTable = ({ searchedFoods, getClickedFood }: SearchTableProps) => {
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
