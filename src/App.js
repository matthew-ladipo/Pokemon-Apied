import Img2 from "./image/IMG_3591.GIF";
import Img from "./image/IMG_3590.GIF";
import "./App.css";
import Page from "./Page";



function App() {
  return (
    <>
      <div className="App">
        <img src={Img} className="topImg"></img>
        <Page />
      </div>
      <img src={Img2} className="bottomImage" />
    </>
  );
}

export default App;
