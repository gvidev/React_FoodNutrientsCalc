import { useState, useEffect } from "react";
import "./App.css";
import SelectedFoodTable from "./components/SelectedFoodsTable";
import SearchTable from "./components/SearchTable";
import axios from "axios";

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
  const [searchedFoods, setSearchedFoods] = useState(Array<typeof foodElement>);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "http://localhost:8080/api/foods"
        );
        setSearchedFoods(response);
      } catch (error: any) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  // const handleAddFoodButton = () => {
  //   setIsFormOpen(!isFormOpen);
  // };

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
      <SelectedFoodTable selectedFoods={selectedFoods}></SelectedFoodTable>
      <br></br>
      <br></br>
      {/* <AddFoodButton onClicked={handleAddFoodButton}></AddFoodButton>
      {isFormOpen && <NewFoodModal></NewFoodModal>} */}
      <SearchTable
        searchedFoods={searchedFoods}
        getClickedFood={handleDerivedFood}
      ></SearchTable>
      <div className="card"></div>
    </>
  );
}

export default App;
