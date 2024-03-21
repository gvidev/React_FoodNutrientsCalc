import React from "react";

const SearchTable = () => {
  const hasEffect = () => {};
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
          <tr onClick={hasEffect}>
            <td>Celery</td>
            <td className="right aligned">0</td>
            <td className="right aligned">0</td>
            <td className="right aligned">0</td>
            <td className="right aligned">0</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default SearchTable;
