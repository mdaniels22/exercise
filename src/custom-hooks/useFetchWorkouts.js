import React, { useState, useEffect } from "react";

//function used to fetch workout gif from giphy

export default function useFetchWorkout(workout) {
  const [workouts, setWorkouts] = useState([]);

  let urlWorkout = `https://api.giphy.com/v1/gifs/search?api_key=8ZuxebZwu1aVGjWKrUefIShJhT3wDfz6&q=exercise+${workout}&limit=1&offset=0&rating=g&lang=en`;

  useEffect(() => {
    const loadWorkouts = async () => {
      await fetch(urlWorkout)
        .then((res) => res.json())
        .then((data) =>
          setWorkouts(data.data.map((item) => item.images.original_mp4.mp4))
        );
    };
    loadWorkouts();
  }, [urlWorkout]);

  return workouts;
}
