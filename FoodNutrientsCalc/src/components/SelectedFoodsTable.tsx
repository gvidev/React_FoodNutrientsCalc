import { useEffect, useState } from "react";
import TableHeader from "./TableHeader";

interface SelectedFoodsProps {
  selectedFoods: [
    {
      id: number;
      description: String;
      calories: number;
      proteins: number;
      fats: number;
      carbohydrates: number;
    }
  ];
}

const SelectedFoodTable = ({ selectedFoods }: SelectedFoodsProps) => {
  const [color, setColor] = useState("black");
  const [totaKcal, setTotalKcal] = useState(Number);
  const [totalProtein, setTotalProtein] = useState(Number);
  const [totalFat, setTotalFat] = useState(Number);
  const [totalCarbs, setTotalCarbs] = useState(Number);

  const handleColor = (totalFat: number, count: number) => {
    let temp = totalFat / (count * 100);
    if (temp <= 0.25) {
      setColor("green");
    } else if (temp <= 0.35) {
      setColor("yellow");
    } else {
      setColor("red");
    }
  };

  const roundNumbers2Decimals = (x: number) => {
    return Math.round(x * 100) / 100;
  };

  const calculateTotals = () => {
    let totalK = 0;
    let totalP = 0;
    let totalF = 0;
    let totalC = 0;
    let count = 0;
    selectedFoods.map((food) => {
      count++;
      totalK += food.calories;
      totalP += food.proteins;
      totalF += food.fats;
      totalC += food.carbohydrates;
    });
    handleColor(totalF, count);
    setTotalKcal(roundNumbers2Decimals(totalK));
    setTotalProtein(roundNumbers2Decimals(totalP));
    setTotalFat(roundNumbers2Decimals(totalF));
    setTotalCarbs(roundNumbers2Decimals(totalC));
  };

  //calculate on every render
  useEffect(() => {
    calculateTotals();
  });

  return (
    <>
      <table className={"ui large " + color + " table"}>
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
        <TableHeader></TableHeader>
        <tbody>
          {selectedFoods.map((food) => (
            <tr key={food.id}>
              <td>{food.description}</td>
              <td className="right aligned">{food.calories}</td>
              <td className="right aligned">{food.proteins}</td>
              <td className="right aligned">{food.fats}</td>
              <td className="right aligned">{food.carbohydrates}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Total:</th>
            <th className="right aligned">{totaKcal}</th>
            <th className="right aligned">{totalProtein}</th>
            <th className="right aligned">{totalFat}</th>
            <th className="right aligned">{totalCarbs}</th>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default SelectedFoodTable;
