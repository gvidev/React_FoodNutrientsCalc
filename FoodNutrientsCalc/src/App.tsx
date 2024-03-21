import { useState } from "react";
import "./App.css";
import SelectedFoodTable from "./components/SelectedFoodsTable";
import SearchTable from "./components/SearchTable";
import AddFoodButton from "./components/AddFoodButton";

function App() {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <SelectedFoodTable></SelectedFoodTable>
      <br></br>
      <br></br>
      <AddFoodButton></AddFoodButton>
      <SearchTable></SearchTable>

      <div className="card">
        <button onClick={handleButtonClick}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
