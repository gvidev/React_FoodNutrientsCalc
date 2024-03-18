import React from "react";

interface TableProps {
  color?: "red" | "yellow" | "green" | "black";
}

const Table = ({ color }: TableProps) => {
  return (
    <>
      <table className={"ui " + color + "  table"}>
        <thead>
          <tr>
            <th>Food</th>
            <th>Calories</th>
            <th>Protein</th>
            <th>Fat</th>
            <th>Carbs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apples</td>
            <td>200</td>
            <td>0g</td>
            <td>0g</td>
            <td>0g</td>
          </tr>
          <tr>
            <td>Orange</td>
            <td>310</td>
            <td>0g</td>
            <td>0g</td>
            <td>0g</td>
          </tr>
        </tbody>
        <hr></hr>
        <tfoot>
          <td>Total</td>
          <td>0g</td>
          <td>0g</td>
          <td>0g</td>
          <td>0g</td>
        </tfoot>
      </table>
      ;
    </>
  );
};

export default Table;
