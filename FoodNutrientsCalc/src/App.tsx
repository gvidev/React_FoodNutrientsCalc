import "./App.css";
import SelectedFoodTable from "./components/SelectedFoodsTable";
import SearchTable from "./components/SearchTable";
import AddFoodButton from "./components/AddFoodButton";
import { useGlobalContext } from "./components/GlobalContext";

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
  const { selectedFoods, setSelectedFoods } = useGlobalContext();

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
      <SearchTable getClickedFood={handleDerivedFood}></SearchTable>
      <AddFoodButton></AddFoodButton>
    </>
  );
}

export default App;
