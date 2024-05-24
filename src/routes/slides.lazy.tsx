import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import BackgroundLayout from "../components/Layout/BackgroundLayout";
import { useState } from "react";
import BallGrouper from "../components/Slides/BallGrouper";
import NormalButton from "../components/Button/NormalButton";
import SecondSlide from "../components/Slides/SecondSlide";
import ThirdSlide from "../components/Slides/ThirdSlide";
import FourthSlide from "../components/Slides/FourthSlide";

const Slides = () => {
  const navigate = useNavigate({ from: "/" });
  const [selectedSlide, setSelectedSlides] = useState(0);

  return (
    <>
      <BackgroundLayout
        title="Selamat Datang!"
        image="image/background/TestBackground.png"
      >
        <div className="flex flex-col gap-5 w-full h-full items-center justify-between min-h-screen px-20 py-24">
          {selectedSlide == 0 ? <BallGrouper /> : ""}
          {selectedSlide == 1 ? <SecondSlide /> : ""}
          {selectedSlide == 2 ? <ThirdSlide /> : ""}
          {selectedSlide == 3 ? <FourthSlide /> : ""}
          <div className="flex gap-24">
            <NormalButton
              text={"Back"}
              type={"button"}
              onClick={() =>
                setSelectedSlides(selectedSlide == 0 ? 3 : selectedSlide - 1)
              }
            />
            <NormalButton
              text={"Next"}
              type={"button"}
              onClick={() =>
                setSelectedSlides(selectedSlide == 3 ? 0 : selectedSlide + 1)
              }
            />
            <NormalButton
              text={"Kembali ke Menu"}
              type={"button"}
              onClick={() => navigate({ to: "/" })}
            />
          </div>
        </div>
      </BackgroundLayout>
    </>
  );
};

export const Route = createLazyFileRoute("/slides")({
  component: Slides,
});
