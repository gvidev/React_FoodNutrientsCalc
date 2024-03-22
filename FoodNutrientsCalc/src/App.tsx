import { useState } from "react";
import "./App.css";
import SelectedFoodTable from "./components/SelectedFoodsTable";
import SearchTable from "./components/SearchTable";
import AddFoodButton from "./components/AddFoodButton";
import NewFoodModal from "./components/newFoodModal";

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [dataFromChild, setDataFromChild] = useState(0);

  function handleDataFromChild(data: number) {
    setDataFromChild(data);
    let element = findElementById(data);
    setSelectedFoods([...selectedFoods, element]);
  }

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
    let elm = {
      id: 0,
      desc: "",
      kcal: 0,
      protein: 0,
      fat: 0,
      carbs: 0,
    };
    searchedFoods.map((food) => {
      if (food.id == id) {
        elm.id = food.id;
        elm.desc = food.desc;
        elm.kcal = food.kcal;
        elm.protein = food.protein;
        elm.fat = food.fat;
        elm.carbs = food.carbs;
      }
    });
    return elm;
  };

  return (
    <>
      <SelectedFoodTable selectedFoods={selectedFoods}></SelectedFoodTable>
      <br></br>
      <br></br>
      <AddFoodButton onClicked={handleAddFoodButton}></AddFoodButton>
      {isFormOpen && <NewFoodModal></NewFoodModal>}
      <SearchTable
        searchedFoods={searchedFoods}
        sendDataToParent={handleDataFromChild}
      ></SearchTable>
      <div className="card"></div>
    </>
  );
}

export default App;
