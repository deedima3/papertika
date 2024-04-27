import { useState } from "react";
import NormalButton from "../Button/NormalButton";

const knowAudio = new Audio("/sound/know.mp3");
const whyAudio = new Audio("/sound/why.mp3");

const SingleBall = () => {
  return (
    <div className="">
      <img
        src="/image/ball/ball.png"
        alt="Ball Picture"
        className="w-24 h-24"
      />
    </div>
  );
};

const BallGrouper = () => {
  const [isGrouped, setIsGrouped] = useState(true);
  return (
    <div className="flex items-center gap-24">
      {isGrouped ? (
        <div className="flex gap-24">
          <div className="flex flex-col gap-24">
            <div className="flex gap-2">
              <SingleBall />
              <SingleBall />
              <SingleBall />
            </div>
            <div className="flex gap-2">
              <SingleBall />
              <SingleBall />
              <SingleBall />
            </div>
            <div className="flex gap-2">
              <SingleBall />
              <SingleBall />
              <SingleBall />
            </div>
          </div>
          <div className="flex flex-col gap-24">
            <div className="flex gap-2">
              <SingleBall />
              <SingleBall />
              <SingleBall />
            </div>
            <div className="flex gap-2">
              <SingleBall />
              <SingleBall />
              <SingleBall />
            </div>
            <div className="flex gap-2">
              <SingleBall />
              <SingleBall />
              <SingleBall />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex gap-28">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <SingleBall />
              <SingleBall />
              <SingleBall />
            </div>
            <div className="flex gap-2">
              <SingleBall />
              <SingleBall />
              <SingleBall />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <SingleBall />
              <SingleBall />
              <SingleBall />
            </div>
            <div className="flex gap-2">
              <SingleBall />
              <SingleBall />
              <SingleBall />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <SingleBall />
              <SingleBall />
              <SingleBall />
            </div>
            <div className="flex gap-2">
              <SingleBall />
              <SingleBall />
              <SingleBall />
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col items-center gap-16">
        <NormalButton
          text={"Ganti Mode"}
          type={"button"}
          onClick={() => setIsGrouped(!isGrouped)}
        />
        <div className="">
          <NormalButton
            text={"Sound"}
            type={"button"}
            onClick={() => {
              knowAudio.play();
              knowAudio.addEventListener("ended", () => {
                whyAudio.play();
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BallGrouper;
