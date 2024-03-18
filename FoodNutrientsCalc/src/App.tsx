import { useState } from "react";
import "./App.css";
import Table from "./components/Table";

function App() {
  const [count, setCount] = useState(0);
  const [tableColor, setTableColor] = useState("black");

  const handleButtonClick = () => {
    setCount(count + 1);
    setTableColor("red");
  };

  return (
    <>
      <div className="ui grid">
        <div className="four wide columns">
          <div className="ui icon input left">
            <input type="text" placeholder="Search..."></input>
            <i className="circular search link icon"></i>
          </div>
        </div>

        <div className="two wide columns">
          <div className="ui icon add right">
            <i className="circular add icon"></i>
          </div>
        </div>
      </div>

      <Table color={"" + tableColor + ""}></Table>

      <div className="card">
        <button onClick={handleButtonClick}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
