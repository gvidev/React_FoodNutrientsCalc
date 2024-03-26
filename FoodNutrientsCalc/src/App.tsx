import { useState, useEffect } from "react";
import "./App.css";
import SelectedFoodTable from "./components/SelectedFoodsTable";
import SearchTable from "./components/SearchTable";
import AddFoodButton from "./components/AddFoodButton";
import NewFoodModal from "./components/newFoodModal";
import axios from "axios";

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [selectedFoods, setSelectedFoods] = useState([]);

  const [searchedFoods, setSearchedFoods] = useState([]);

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

  const [dataFromChild, setDataFromChild] = useState("");

  function handleDataFromChild(data: any) {
    console.log(data);
  }

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
