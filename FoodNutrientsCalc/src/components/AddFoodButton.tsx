interface AddButtonProps {
  onClicked: () => void;
}

const AddFoodButton = ({ onClicked }: AddButtonProps) => {
  return (
    <>
      <div className="ui top attached button" onClick={onClicked}>
        <div className="ui animated fade">
          <div>Add new food</div>
        </div>
      </div>
    </>
  );
};

export default AddFoodButton;
