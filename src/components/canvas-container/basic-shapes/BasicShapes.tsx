import React, { useState } from "react";
import { Stage, Layer, Circle, Line, RegularPolygon, Rect } from "react-konva";

type BasicShapesProps = {};

const BasicShapes: React.FC<BasicShapesProps> = (props) => {
  const [firstPoint, setFirstPoint] = useState<any>();
  const [secondPoint, setSecondPoint] = useState<any>();
  const [turn, setTurn] = useState<number>(0);
  const [systemX, setSystemX] = useState<number>(200);
  const [systemY, setSystemY] = useState<number>(400);
  const [systemRadius, setRadius] = useState<number>(100);
  

  const TurnHandler = () => {
    if(turn === 0){
        return(
            <span style={{ color: "#4169E1", fontSize: 15, fontWeight: 500 }}>
              Pleese choose your{" "}
              <b style={{ color: "black", fontSize: 13 }}>  First
              </b>{" "}
              point
            </span>
            )
      }   else if(turn === 1){
        return(
            <span style={{ color: "#4169E1", fontSize: 15, fontWeight: 500 }}>
              Pleese choose your{" "}
              <b style={{ color: "black", fontSize: 13 }}> Second
              </b>{" "}
              point
            </span>
            )
      } else if (turn === 2){
        return(
            <span style={{ color: "#4169E1", fontSize: 15, fontWeight: 500 }}>
              Pleese click to generate your {" "}
              <b style={{ color: "black", fontSize: 13 }}> shape
              </b>{" "}
            </span>
        )
      }
      else {
        return(
            <span style={{ color: "#4169E1", fontSize: 15, fontWeight: 500 }}>
            <b style={{ color: "black", fontSize: 13 }}> Your custom shape
            </b>{" "}
            , the next click will start a new shape
        </span>
        )
      }
  }

  const DDA = () => {
    const range = Math.max(Math.abs(firstPoint.x - secondPoint.x), Math.abs(firstPoint.y - secondPoint.y));
    let deltaX = 0;
    let deltaY = 0;
    if (range !== 0){
        deltaX = (firstPoint.x - secondPoint.x)/range;
        deltaY = (firstPoint.x - secondPoint.x)/range;
    }
    let localSecondPointX =  secondPoint.x;
    let localSecondPointY = secondPoint.y;
    
    for(let index=0; index<range; index++){
        // draw
        localSecondPointX += deltaX;
        localSecondPointY += deltaY;
    }
  }


  const rangeDistance = () => {
    const X = firstPoint.x - secondPoint.x;
    const Y= firstPoint.y - secondPoint.y;
    return Math.sqrt( X*X + Y*Y );
  }

  const isCanvasClicked = (item: any) => {
    console.log(item);
    console.log(item.evt.screenX);
    console.log(item.evt.screenY);
    if (turn === 0) {
        setFirstPoint({ x:item.evt.screenX -130, y: item.evt.screenY - 100 });
    } 
    else if (turn === 1) {
        setSecondPoint({ x:item.evt.screenX -130, y: item.evt.screenY - 100});
    } 
    else if (turn === 2){
        // CALCULATE X
        // CALCULATE Y
        // CALCULATE RADIUS
        const range = rangeDistance();
        console.log(range);
        
        // setSystemX({ x:item.evt.screenX -130, y: item.evt.screenY - 100 });
        // setSystemY();
        setSystemX(firstPoint.x)
        setSystemY(secondPoint.y)
        setRadius(range/2);
    }
    else {
        setFirstPoint({x: 0, y: 0});
        setSecondPoint({x: 0, y: 0});
    }
    setTurn((turn + 1) % 4);
  };

  const VerticaleLine = () => {
      return (
        <Line
            x={systemX}
            y={systemY}
            moveTo={[20, 20]}
            points={[0, 0, 0, systemRadius*2]}
            tension={0.5}
            closed
            stroke="#4169E1"
        />
    );
  };

  const HorizonLine = () => {
    return (
      <Line
        x={systemX- systemRadius}
        y={systemY+systemRadius}
        moveTo={[20, 20]}
        points={[0, 0,  systemRadius*2, 0]}
        tension={0.5}
        closed
        stroke="#4169E1"
      />
    );
  };

  const CustomCircle = () => {
      return <Circle
        x={systemX}
        y={systemY+100} 
        radius={systemRadius} 
        stroke="red" 
      />;
  };

  const CustomReqtangle = () => {
    return (
      <RegularPolygon
        x={systemX}
        y={systemY+100}
        sides={4}
        radius={systemRadius}
        stroke="#4169E1"
      />
    );
  };

  const CustomReqtangle2 = () => {
    return (
      <Rect
      x={200}
      y={500}
      width={100}
      height={100}
      stroke="#4169E1"
      />
    );
  };
  
  const CustomPointOne = () => {
    return (
        <Line
            x={firstPoint.x}
            y={firstPoint.y}
            moveTo={[20, 20]}
            points={[0, 0, 10, 0]}
            tension={0.5}
            closed
            stroke="#4169E1"
        />
    );
  };

  const CustomPointTwo = () => {
    return (
        <Line
            x={secondPoint.x}
            y={secondPoint.y}
            moveTo={[20, 20]}
            points={[0, 0, 10, 0]}
            tension={0.5}
            closed
            stroke="#4169E1"
        />
    );
  };

  /***
   * CALCULATE FORMULA
   *   // y = x^3 - 9x
    // 5 points
    //  {3,0} , {-3,0} , {0,0}

    //   3x^2 - 9 = 0 -> x^2 = 9
    // 4 - {Squere 3,0} {-Squere 3, 0}

    // 100, 0 | 10, 0 | 0, 0 | -10, 0 |-100 , 0 
   */
  const Parabula = () => {
    return (
      <Line
        x={systemX}
        y={systemY}
        // 200 , 400
        // points={[0, 0, 50, 50, 0, 100, -50, 150, 0, 200]}
        points={[0, 0,      systemRadius/2, systemRadius/2,        0, systemRadius,         -systemRadius/2, systemRadius + systemRadius/2,       0, systemRadius*2]}
        stroke={"black"}
        tension={1}
      />
    );
  };

  
  return (
    <div>
      <TurnHandler/>
      <Stage width={900} height={800} onClick={isCanvasClicked}>
        <Layer>
        {turn === 0 &&  
            <>
            </>
        } 
        {turn === 1 &&  
            <>
             <CustomPointOne/>
            </>
        } 
        {turn === 2 &&  
            <>
             <CustomPointOne/>
             <CustomPointTwo/>
            </>
        } 
        {turn === 3 &&  
            <>
                <CustomCircle />
                <CustomReqtangle />
                <VerticaleLine/>
                <HorizonLine />
                <Parabula />
            </>
        } 
        </Layer>
      </Stage>
    </div>
  );
};

export default BasicShapes;

BasicShapes.defaultProps = {};
