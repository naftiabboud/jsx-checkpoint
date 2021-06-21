import "./style.css";
import nature from "./nature.jpg";

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }} />
      <h1 className="title red">Your name here</h1>
      <div className="images">
        <img src={"/fall.jpg"} alt="fall" />
        <img src={nature} alt="nature" />
      </div>
    </div>
  );
}

export default App;
