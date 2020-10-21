import React, { useEffect, useState } from "react";
import useFetchWorkouts from "../../custom-hooks/useFetchWorkouts";
import "./Reel.css";
import Button from "../Button/Button";

export default function Reel() {
  const [reelAnimation, setReelAnimation] = useState("");
  //changes the slotNumber in order to change the starting/ending exercise animation
  const [slotNumber, setSlotNumber] = useState(["1", "2", "3", "4"]);
  const [excerciseText, setExerciseText] = useState("Exercise!");

  //enalbe button to be disabled
  const [disableButton, setDisableButton] = useState("");

  //creates countdown
  const [time, setTime] = useState();
  useEffect(() => {
    //when time reaches 0 sets the time to null
    if (time === 0) {
      setTime(null);
      setDisableButton("");
    }
    //when time is null it will exit
    if (!time) {
      return;
    }
    const timer = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);

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

    const stopTimer = setTimeout(() => {
      handleStop();
    }, 5000);

    return () => clearTimeout(stopTimer);
  }

  function handleStop() {
    //REMOVES "Ring_Animation" from className
    setReelAnimation("Reel_Animation_STOP");
    console.log("---The Animation has STOPPED ---");

    //changes the slotNumber array so the ending animation changes
    changeEndingAnimation();
    //divScroll.current.scrollIntoView();

    //begins the countdown timer by setting it to 5 instead of null
    setTime(7);

    setDisableButton("Disable");
  }
  const pushups = useFetchWorkouts("pushups");
  const calfraises = useFetchWorkouts("calfraises");
  const crunches = useFetchWorkouts("crunches");
  const squats = useFetchWorkouts("squats");

  return (
    <>
      <span className="ExerciseText">{`${excerciseText}`}</span>

      <div className={`Reel ${reelAnimation}`}>
        {pushups.map((pushup) => (
          <video
            key={pushup}
            id={`Slot${slotNumber[0]}`}
            className="Slot"
            src={pushup}
            autoPlay
            loop
          />
        ))}
        {squats.map((squat) => (
          <video
            key={squat}
            id={`Slot${slotNumber[1]}`}
            className="Slot"
            src={squat}
            autoPlay
            loop
          />
        ))}
        {crunches.map((crunch) => (
          <video
            key={crunch}
            id={`Slot${slotNumber[2]}`}
            className="Slot"
            src={crunch}
            autoPlay
            loop
          />
        ))}
        {calfraises.map((calfraise) => (
          <video
            key={calfraise}
            id={`Slot${slotNumber[3]}`}
            className="Slot"
            src={calfraise}
            autoPlay
            loop
          />
        ))}
      </div>
      {/* <button onClick={handleStart}>START</button>
      <button onClick={handleStop}>STOP</button> */}
      <Button
        className={`StartButton ${disableButton}`}
        buttonName={"Spin"}
        clicked={() => handleStart()}
        disableTime={5000}
      />
      {/* <Button
        className={"StopButton"}
        buttonName={"Stop"}
        clicked={handleStop}
      /> */}
      <div className="Time">{time}</div>
    </>
  );
}
