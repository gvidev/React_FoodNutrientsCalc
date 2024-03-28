import { useState } from "react";
import "./App.css";
// import SelectedFoodTable from "./components/SelectedFoodsTable";
// import SearchTable from "./components/SearchTable";
// import AddFoodButton from "./components/AddFoodButton";

// import NewFoodModal from "./components/newFoodModal";
import NewFoodForm from "./components/NewFoodForm";

function App() {
  // const [isFormOpen, setIsFormOpen] = useState(false);
  const foodElement = {
    id: Number,
    description: String,
    calories: Number,
    proteins: Number,
    fats: Number,
    carbohydrates: Number,
  };

  const [selectedFoods, setSelectedFoods] = useState(Array<typeof foodElement>);

  function handleDerivedFood(data: typeof foodElement) {
    let isAlreadyAdded = false;
    selectedFoods.map((food) => {
      if (data.id == food.id) {
        isAlreadyAdded = true;
      }
    });

    if (!isAlreadyAdded) {
      setSelectedFoods([...selectedFoods, data]);
    } else {
      console.log("This element is already added!");
    }
  }

  return (
    <>
      {/* <SelectedFoodTable selectedFoods={selectedFoods}></SelectedFoodTable>
      <br></br>
      <br></br>

      <SearchTable getClickedFood={handleDerivedFood}></SearchTable>
      <AddFoodButton onClick={() => {}}></AddFoodButton> */}
      <NewFoodForm></NewFoodForm>
    </>
  );
}

export default App;
