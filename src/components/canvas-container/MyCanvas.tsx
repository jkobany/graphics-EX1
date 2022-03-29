import React, { useEffect, useState } from "react";
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';
import BasicShapes from "./basic-shapes/BasicShapes";
import DrawingArea from "./drawing-area/DrawingArea";
import "./MyCanvas.scss"

type MyCanvasProps = {};




const MyCanvas: React.FC<MyCanvasProps> = (props) => {

    return (
        <div className={`canvas-container`}>
         <BasicShapes/>
         {/* <DrawingArea/> */}
        </div>
      );
};

export default MyCanvas;

MyCanvas.defaultProps = {};