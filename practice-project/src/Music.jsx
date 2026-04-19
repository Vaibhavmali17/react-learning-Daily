import React, { useRef, useState } from "react";
import { songs } from "./ListData.js";

const Music = () => {
  let audio = useRef();
  const [index, setIndex] = useState(0);

  const play = () => {
    audio.current.play();
  };

  const pause = () => {
    audio.current.pause();
  };

  const next = () => {
    let newIndex = index === songs.length - 1 ? 0 : index + 1;

    setIndex(newIndex);
    audio.current.src = songs[newIndex].src;
    audio.current.load();
    audio.current.play();
  };

  const prev = () => {
    let newIndex = index === 0 ? songs.length - 1 : index - 1;

    setIndex(newIndex);
    audio.current.src = songs[newIndex].src;
    audio.current.load();
    audio.current.play();
  };

  const shuffle = () => {
    let newIndex = Math.floor(Math.random() * songs.length);

    setIndex(newIndex);
    audio.current.src = songs[newIndex].src;
    audio.current.load();
    audio.current.play();
  };

  const plusFiveSeconds = () => {
    audio.current.currentTime += 5;
  };

  return (
    <div className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* BLURRED BACKGROUND */}
      <img
        src={songs[index].img}
        alt=""
        className="absolute inset-0 w-full h-full object-cover blur-lg scale-110"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* GLASS CARD */}
      <div
        className="flex flex-col items-center justify-center h-[480px] w-[350px] gap-4 
    backdrop-blur-lg bg-white/10 border border-white/20 
    rounded-2xl shadow-xl p-4 z-10"
      >
        <h2 className="text-xl font-bold text-white">{songs[index].title}</h2>

        <img
          src={songs[index].img}
          alt={songs[index].title}
          className="h-60 w-60 object-cover rounded-full slow-spin"
        />

        <h1 className="text-white">{songs[index].singer}</h1>

        <h3 className="text-sm text-gray-200">{songs[index].source}</h3>

        {/* <audio ref={audio}></audio> */}
 {/* Change the <audio> tag to set initial src: */}
<audio ref={audio} src={songs[0].src}></audio>


        <div className="flex flex-col gap-3">
          {/* FIRST ROW */}
          <div className="flex gap-3">
            <button onClick={play} className="bg-white px-3 py-1 rounded w-20">
              Play
            </button>
            <button onClick={pause} className="bg-white px-3 py-1 rounded w-20">
              Pause
            </button>
            <button
              onClick={shuffle}
              className="bg-white px-3 py-1 rounded w-20"
            >
              Shuffle
            </button>
          </div>

          {/* SECOND ROW */}
          <div className="flex gap-3">
            <button onClick={prev} className="bg-white px-3 py-1 rounded w-20">
              Prev
            </button>
            <button onClick={next} className="bg-white px-3 py-1 rounded w-20">
              Next
            </button>
            <button
              onClick={plusFiveSeconds}
              className="bg-white px-3 py-1 rounded w-20"
            >
              +5
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;