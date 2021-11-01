import logo from "../assets/paragon.png";

const AppHeader = () => {
  return (
    <header>
      <div className="left-header">
        &nbsp;
        <img src={logo} alt="Logo" />
        &nbsp;&nbsp;
      </div>
      <div className="left-header">
        <h2>React-Redux-App</h2>
      </div>
    </header>
  );
};

export default AppHeader;
