import { Routes , Route } from "react-router-dom";
import NavBar from "../components/navbar/Navbar"

// ROUTES
import ScreenEx1 from "../screens/ScreenEx1";



function RouterApplication() {

  return (
    <div className="app-container">
     <NavBar/>
      {/* <Routes >
        <Route path="/">
          <ScreenEx1 />
        </Route>
      </Routes > */}
      <ScreenEx1 />
    </div>
  );
}

export default RouterApplication;