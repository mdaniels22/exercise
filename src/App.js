import React from "react";
//import { useTransition, useSpring, animated } from "react-spring";
//import { Keyframes } from "react-spring/renderprops";
//import useFetchWorkouts from "./custom-hooks/useFetchWorkouts";
import Reel from "./components/Reel/Reel";
import "./App.css";

function App() {
  // // const [pushups, setPushups] = useState([]);
  // // const [squats, setSquats] = useState([]);
  // // const [crunches, setCrunches] = useState([]);
  // // const [calfraises, setCalfraises] = useState([]);

  // //to add/remove "Ring_Animation" from className
  // const [ringAnimation, setRingAnimation] = useState("");

  // //changes the slotNumber in order to change the starting/ending exercise animation
  // const [slotNumber, setSlotNumber] = useState(["1", "2", "3", "4"]);

  // const [exerciseText, setExerciseText] = useState("Exercise!");

  // // const workouts = {
  // //   pushups: `https://api.giphy.com/v1/gifs/search?api_key=8ZuxebZwu1aVGjWKrUefIShJhT3wDfz6&q=pushup&limit=2&offset=0&rating=g&lang=en`,
  // //   squats: `https://api.giphy.com/v1/gifs/search?api_key=8ZuxebZwu1aVGjWKrUefIShJhT3wDfz6&q=squats&limit=2&offset=0&rating=g&lang=en`,
  // //   crunches: `https://api.giphy.com/v1/gifs/search?api_key=8ZuxebZwu1aVGjWKrUefIShJhT3wDfz6&q=crunches&limit=2&offset=0&rating=g&lang=en`,
  // //   calfraises: `https://api.giphy.com/v1/gifs/search?api_key=8ZuxebZwu1aVGjWKrUefIShJhT3wDfz6&q=calfraises&limit=2s&offset=0&rating=g&lang=en`,
  // // };

  // // useEffect(() => {
  // //   const loadSquats = async () => {
  // //     await fetch(workouts.squats)
  // //       .then((res) => res.json())
  // //       .then((data) =>
  // //         setSquats(data.data.map((item) => item.images.original_mp4.mp4))
  // //       ); //the second "data" is the name of the results w giphy api
  // //     // setPic(data.results[0].image); //to only show the one image
  // //   };
  // //   const loadPushups = async () => {
  // //     await fetch(workouts.pushups)
  // //       .then((res) => res.json())
  // //       .then((data) =>
  // //         setPushups(data.data.map((item) => item.images.original_mp4.mp4))
  // //       );
  // //   };

  // //   const loadCrunches = async () => {
  // //     await fetch(workouts.crunches)
  // //       .then((res) => res.json())
  // //       .then((data) =>
  // //         setCrunches(data.data.map((item) => item.images.original_mp4.mp4))
  // //       );
  // //   };

  // //   const loadCalfraises = async () => {
  // //     await fetch(workouts.calfraises)
  // //       .then((res) => res.json())
  // //       .then((data) =>
  // //         setCalfraises(data.data.map((item) => item.images.original_mp4.mp4))
  // //       );
  // //   };

  // //   loadSquats();
  // //   loadPushups();
  // //   loadCrunches();
  // //   loadCalfraises();
  // // }, [
  // //   workouts.calfraises,
  // //   workouts.crunches,
  // //   workouts.pushups,
  // //   workouts.squats,
  // // ]);

  // const pushups = useFetchWorkouts("pushups");
  // const calfraises = useFetchWorkouts("calfraises");
  // const crunches = useFetchWorkouts("crunches");
  // const squats = useFetchWorkouts("squats");

  // const handleStop = () => {
  //   //REMOVES "Ring_Animation" from className
  //   setRingAnimation("Ring_Animation_Stop");
  //   console.log("---The Animation has STOPPED ---");

  //   //changes the slotNumber array so the ending animation changes
  //   changeEndingAnimation();
  //   //divScroll.current.scrollIntoView();
  // };

  // const handleStart = () => {
  //   //able to ADD "Ring_Animation" to className
  //   setRingAnimation("Ring_Animation_Start");
  //   console.log("--Starting Animation---");

  //   //changeEndingAnimation();
  // };

  // const NUMBER_OF_SLOTS = 4;

  // let randomNumber = Math.floor(Math.random() * NUMBER_OF_SLOTS);
  // // console.log({ randomNumber });

  // const changeEndingAnimation = () => {
  //   switch (randomNumber) {
  //     case 0:
  //       setSlotNumber(["1", "2", "3", "4"]);
  //       setExerciseText("PUSHUPS!");
  //       break;
  //     case 1:
  //       setSlotNumber(["2", "3", "4", "1"]);
  //       setExerciseText("CALFRAISES!");
  //       break;
  //     case 2:
  //       setSlotNumber(["3", "4", "1", "2"]);
  //       setExerciseText("CRUNCHES!");
  //       break;
  //     case 3:
  //       setSlotNumber(["4", "1", "2", "3"]);
  //       setExerciseText("SQUATS!");
  //       break;
  //     default:
  //       setSlotNumber(["1", "2", "3", "4"]);
  //       console.log("--Switch statement went to Default--");
  //   }
  // };

  return (
    <div className="Container">
      {/* <span className="ExerciseText">{`${exerciseText}`}</span> */}
      <div className="display absolute">
        <Reel />
      </div>
    </div>
  );
}

export default App;
