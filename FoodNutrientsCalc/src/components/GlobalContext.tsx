// GlobalContext.tsx
import React, {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

interface Food {
  id: number;
  description: string;
  calories: number;
  proteins: number;
  fats: number;
  carbohydrates: number;
}

interface GlobalContextType {
  selectedFoods: Food[];
  setSelectedFoods: Dispatch<SetStateAction<Food[]>>;
}

const GlobalContext = createContext<GlobalContextType>({
  selectedFoods: [],
  setSelectedFoods: () => {},
});

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalContextProvider: React.FC = ({ children }) => {
  const [selectedFoods, setSelectedFoods] = useState<Food[]>([]);

  return (
    <GlobalContext.Provider value={{ selectedFoods, setSelectedFoods }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
