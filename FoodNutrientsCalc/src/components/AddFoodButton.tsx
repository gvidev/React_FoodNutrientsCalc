import { Link } from "react-router-dom";

interface AddButtonProps {
  onClicked: () => void;
}

const AddFoodButton = () => {
  return (
    <>
      <div className="ui bottom attached button">
        <div className="ui animated fade">
          <Link className="button" to="/create">
            Add new food
          </Link>
        </div>
      </div>
    </>
  );
};

export default AddFoodButton;
