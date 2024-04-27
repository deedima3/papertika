import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import BackgroundLayout from "../components/Layout/BackgroundLayout";
import NormalButton from "../components/Button/NormalButton";

const Eval = () => {
  const navigate = useNavigate({ from: "/" });
  return (
    <>
      <BackgroundLayout
        title="Selamat Datang!"
        image="image/background/TestBackground.png"
      >
        <div className="flex gap-5 w-full h-full items-center justify-between min-h-screen px-20">
          <div className="flex gap-10">
            <div className="relative gap-2">
              <p className="absolute top-0 font-sans text-3xl font-bold px-10 py-16 h-max stroke-[#412416] text-[#FFF2C7] font-outline-2 fix-stroke ">
                Manakah yang merupakan hukum komutatif dan asosiatif (pilih
                semua jawaban)
              </p>
              <img
                src="/image/assets/Number_Pad.png"
                alt="Number Pad"
                className="w-full h-[220px]"
              />
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex gap-2">
                <p className="absolute top-0 font-sans text-2xl px-10 py-16 h-max">
                  Manakah yang merupakan hukum komutatif dan asosiatif (pilih
                  semua jawaban)
                </p>
                <img
                  src="/image/assets/Number_Pad.png"
                  alt="Number Pad"
                  className="w-full h-[220px]"
                />
              </div>
              <div className="flex gap-2">
                <NormalButton
                  text={"38 x 9 = 25 x 6"}
                  type={"button"}
                  onClick={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              </div>
              <div className="flex gap-2">
                <NormalButton
                  text={"(7 x 8) x 2 = 7 x (8 x 2)"}
                  type={"button"}
                  onClick={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              </div>
              <div className="flex gap-2">
                <NormalButton
                  text={"7 x (8 + 2) = (7x 8) + (7 x 2)"}
                  type={"button"}
                  onClick={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </BackgroundLayout>
    </>
  );
};

export const Route = createLazyFileRoute("/evaluasi")({
  component: Eval,
});
