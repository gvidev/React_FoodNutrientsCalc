interface SearchTableProps {
  searchedFoods: [
    {
      id: number;
      desc: String;
      kcal: number;
      protein: number;
      fat: number;
      carbs: number;
    }
  ];
}

const SearchTable = ({ searchedFoods }: SearchTableProps) => {
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
          {searchedFoods.map((food, id) => (
            <tr key={id}>
              <td>{food.desc}</td>
              <td className="right aligned">{food.kcal}</td>
              <td className="right aligned">{food.protein}</td>
              <td className="right aligned">{food.fat}</td>
              <td className="right aligned">{food.carbs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SearchTable;
