import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import NewFoodForm from "./components/NewFoodForm.tsx";
import { createContext } from "react";
import { GlobalContextProvider } from "./components/GlobalContext.tsx";

export const AppContext = React.createContext({
  selectedFoods: [
    {
      id: Number,
      description: String,
      calories: Number,
      proteins: Number,
      fats: Number,
      carbohydrates: Number,
    },
  ],
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalContextProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/create" element={<NewFoodForm />} />
        </Routes>
      </GlobalContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
