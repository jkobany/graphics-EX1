import React from "react";
import MyCanvas from "../components/canvas-container/MyCanvas";
import "./ScreenEx1.scss"

type HomeScreenProps = {};

const HomeScreen: React.FC<HomeScreenProps> = (props) => {
    
   
    return (
        <div className={`screen-ex1`}>
            <div className="title-screen">
                Ex 1 - Drawing circle, rectungle and polygon shapes from 2 points on the canvas.
            </div>
            <MyCanvas/>
        </div>
      );
};

export default HomeScreen;

HomeScreen.defaultProps = {};