import React, { useState } from "react";
import useFetchWorkouts from "../../custom-hooks/useFetchWorkouts";
import "./Reel.css";
import Button from "../Button/Button";

export default function Reel() {
  const [reelAnimation, setReelAnimation] = useState("");
  //changes the slotNumber in order to change the starting/ending exercise animation
  const [slotNumber, setSlotNumber] = useState(["1", "2", "3", "4"]);
  const [excerciseText, setExerciseText] = useState("Exercise!");

  const NUMBER_OF_SLOTS = 4;

  let randomNumber = Math.floor(Math.random() * NUMBER_OF_SLOTS);
  // console.log({ randomNumber });

  const changeEndingAnimation = () => {
    switch (randomNumber) {
      case 0:
        setSlotNumber(["1", "2", "3", "4"]);
        setExerciseText("PUSHUPS!");
        break;
      case 1:
        setSlotNumber(["2", "3", "4", "1"]);
        setExerciseText("CALFRAISES!");
        break;
      case 2:
        setSlotNumber(["3", "4", "1", "2"]);
        setExerciseText("CRUNCHES!");
        break;
      case 3:
        setSlotNumber(["4", "1", "2", "3"]);
        setExerciseText("SQUATS!");
        break;
      default:
        setSlotNumber(["1", "2", "3", "4"]);
        console.log("--Switch statement went to Default--");
    }
  };

  function handleStart() {
    //able to ADD "Ring_Animation" to className
    setReelAnimation("Reel_Animation_START");
    console.log("--Starting Animation---");
  }

  function handleStop() {
    //REMOVES "Ring_Animation" from className
    setReelAnimation("Reel_Animation_STOP");
    console.log("---The Animation has STOPPED ---");

    //changes the slotNumber array so the ending animation changes
    changeEndingAnimation();
    //divScroll.current.scrollIntoView();
  }
  const pushups = useFetchWorkouts("pushups");
  const calfraises = useFetchWorkouts("calfraises");
  const crunches = useFetchWorkouts("crunches");
  const squats = useFetchWorkouts("squats");

  return (
    <>
      <div className={`Reel ${reelAnimation}`}>
        <span className="ExerciseText">{`${excerciseText}`}</span>
        {pushups.map((pushup) => (
          <video
            key={pushup}
            id={`slot${slotNumber[0]}`}
            className="slot"
            src={pushup}
            autoPlay
            loop
          />
        ))}
        {squats.map((squat) => (
          <video
            key={squat}
            id={`slot${slotNumber[1]}`}
            className="slot"
            src={squat}
            autoPlay
            loop
          />
        ))}
        {crunches.map((crunch) => (
          <video
            key={crunch}
            id={`slot${slotNumber[2]}`}
            className="slot"
            src={crunch}
            autoPlay
            loop
          />
        ))}
        {calfraises.map((calfraise) => (
          <video
            key={calfraise}
            id={`slot${slotNumber[3]}`}
            className="slot"
            src={calfraise}
            autoPlay
            loop
          />
        ))}
      </div>
      {/* <button onClick={handleStart}>START</button>
      <button onClick={handleStop}>STOP</button> */}
      <Button
        className={"StartButton"}
        buttonName={"Start"}
        clicked={() => handleStart()}
      />
      <Button
        className={"StopButton"}
        buttonName={"Stop"}
        clicked={handleStop}
      />
    </>
  );
}
