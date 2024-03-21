import React, { useState } from "react";

const SelectedFoodTable = () => {
  return (
    <>
      <table className={"ui large table"}>
        <thead>
          <tr>
            <th>
              <div>Selected foods</div>
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
          {/* <tr>
            <td>Celery</td>
            <td className="right aligned">0</td>
            <td className="right aligned">0</td>
            <td className="right aligned">0</td>
            <td className="right aligned">0</td>
          </tr> */}
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            <th className="right aligned">0</th>
            <th className="right aligned">0</th>
            <th className="right aligned">0</th>
            <th className="right aligned">0</th>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default SelectedFoodTable;
