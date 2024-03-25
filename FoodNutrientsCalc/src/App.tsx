import { useState, useEffect } from "react";
import "./App.css";
import SelectedFoodTable from "./components/SelectedFoodsTable";
import SearchTable from "./components/SearchTable";
import AddFoodButton from "./components/AddFoodButton";
import NewFoodModal from "./components/newFoodModal";
import axios from "axios";

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [dataFromChild, setDataFromChild] = useState(Object);

  const [selectedFoods, setSelectedFoods] = useState([]);

  const [searchedFoods, setSearchedFoods] = useState([]);

  function handleDataFromChild(data: object) {
    setDataFromChild(data);

    console.log(dataFromChild);
  }

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

  const handleAddFoodButton = () => {
    setIsFormOpen(!isFormOpen);
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
