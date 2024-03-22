import { useState } from "react";

interface SelectedFoodsProps {
  selectedFoods: [
    {
      id: number;
      desc: String;
      kcal: number;
      protein: number;
      fat: number;
      carbs: number;
    }
  ];
  isTableChanged: boolean;
}

const SelectedFoodTable = ({
  selectedFoods,
}: // isTableChanged,
SelectedFoodsProps) => {
  const [color, setColor] = useState("black");
  const [totaKcal, setTotalKcal] = useState(0);
  const [totalProtein, setTotalProtein] = useState(0);
  const [totalFat, setTotalFat] = useState(0);
  const [totalCarbs, setTotalCarbs] = useState(0);

  const handleColor = (totalFat: number, count: number) => {
    let temp = totalFat / (count * 100);
    if (temp <= 0.35) {
      setColor("green");
    } else if (temp <= 0.45) {
      setColor("yellow");
    } else {
      setColor("red");
    }
  };

  const handleChanges = () => {
    let totalK = 0;
    let totalP = 0;
    let totalF = 0;
    let totalC = 0;
    let count = 0;
    selectedFoods.map((food) => {
      count++;
      totalK += food.kcal;
      totalP += food.protein;
      totalF += food.fat;
      totalC += food.carbs;
    });
    handleColor(totalF, count);
    setTotalKcal(totalK);
    setTotalProtein(totalP);
    setTotalFat(totalF);
    setTotalCarbs(totalC);
  };

  return (
    <>
      {/* {isTableChanged && handleChanges} */}
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
          {selectedFoods.map((food, id) => (
            <tr key={id} onClick={handleChanges}>
              <td>{food.desc}</td>
              <td className="right aligned">{food.kcal}</td>
              <td className="right aligned">{food.protein}</td>
              <td className="right aligned">{food.fat}</td>
              <td className="right aligned">{food.carbs}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
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
