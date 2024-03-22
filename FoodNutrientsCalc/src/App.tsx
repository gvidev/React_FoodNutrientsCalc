import { useState } from "react";
import "./App.css";
import SelectedFoodTable from "./components/SelectedFoodsTable";
import SearchTable from "./components/SearchTable";
import AddFoodButton from "./components/AddFoodButton";
import NewFoodModal from "./components/newFoodModal";

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const selectFoodsArray = [
    {
      id: 1,
      desc: "String",
      kcal: 1,
      protein: 1,
      fat: 50,
      carbs: 1,
    },
    {
      id: 1,
      desc: "String",
      kcal: 1,
      protein: 1,
      fat: 32131,
      carbs: 1,
    },
  ];

  const [selectedFoods, setSelectedFoods] = useState(selectFoodsArray);

  const [searchedFoods, setSearchedFoods] = useState([
    {
      id: 1,
      desc: "String",
      kcal: 1,
      protein: 1,
      fat: 50,
      carbs: 1,
    },
    {
      id: 1,
      desc: "String",
      kcal: 1,
      protein: 1,
      fat: 32131,
      carbs: 1,
    },
  ]);

  const handleAddFoodButton = () => {
    setIsFormOpen(!isFormOpen);
  };

  const findElementById = (id: number) => {
    searchedFoods.map((food) => {
      if (food.id == id) {
        return food;
      }
    });
  };

  return (
    <>
      <SelectedFoodTable selectedFoods={selectedFoods}></SelectedFoodTable>
      <br></br>
      <br></br>
      <AddFoodButton onClicked={handleAddFoodButton}></AddFoodButton>
      {isFormOpen && <NewFoodModal></NewFoodModal>}
      <SearchTable searchedFoods={searchedFoods}></SearchTable>
      <div className="card"></div>
    </>
  );
}

export default App;
