const newFoodModal = () => {
  return (
    <>
      {/* active */}
      <div className={"ui active modal"}>
        <div className="header">Add new food</div>
        <div className="content">
          <div className="ui form">
            <div className="two fields">
              <div className="field">
                <label>Description</label>
                <input type="text" required></input>
              </div>
              <div className="field">
                <label>Calories</label>
                <input type="number" required></input>
              </div>
            </div>
            <div className="three fields">
              <div className="field">
                <label>{"Protein (g)"}</label>
                <input type="number" required></input>
              </div>
              <div className="field">
                <label>{"Fat (g)"}</label>
                <input type="number" required></input>
              </div>
              <div className="field">
                <label>{"Carbs (g)"}</label>
                <input type="number" required></input>
              </div>
            </div>
          </div>
          <div className="extra content">
            <div className="ui two buttons">
              <div className="ui basic green button">Approve</div>
              <div className="ui basic red button">Decline</div>
            </div>
          </div>
        </div>
        {
          <div className="ui cards">
            <div className="card">
              <div className="content">
                <div className="header">Elliot Fu</div>
                <div className="meta">Friends of Veronika</div>
                <div className="description">
                  Elliot requested permission to view your contact details
                </div>
              </div>
              <div className="extra content">
                <div className="ui two buttons">
                  <div className="ui basic green button">Approve</div>
                  <div className="ui basic red button">Decline</div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="header">Jenny Hess</div>
                <div className="meta">New Member</div>
                <div className="description">
                  Jenny wants to add you to the group <b>best friends</b>
                </div>
              </div>
              <div className="extra content">
                <div className="ui two buttons">
                  <div className="ui basic green button">Approve</div>
                  <div className="ui basic red button">Decline</div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </>
  );
};

export default newFoodModal;
