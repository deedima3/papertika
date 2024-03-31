import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import BackgroundLayout from "../components/Layout/BackgroundLayout";
import NormalButton from "../components/Button/NormalButton";
import AhliTable from "../components/Table/AhliTable";
import MultiplicationCard from "../components/Card/MultiplicationCard";
import { useAnswerStore } from "../hooks/useAnswerState";

const Asal = () => {
  const navigate = useNavigate({ from: "/" });
  const selectedChoosen = useAnswerStore((state) => state.choosenAhli);
  return (
    <>
      <BackgroundLayout
        title="Selamat Datang!"
        image="image/background/TestBackground.png"
      >
        <div className="flex gap-5 w-full h-full items-center justify-between min-h-screen px-20">
          <div className="flex flex-col gap-5">
            <AhliTable />
            <div className="flex gap-5">
              <NormalButton
                text={"Kembali Ke Menu"}
                type={"button"}
                onClick={() => navigate({ to: "/select" })}
              />
            </div>
          </div>
          {selectedChoosen.column && selectedChoosen.row && (
            <MultiplicationCard />
          )}
        </div>
      </BackgroundLayout>
    </>
  );
};

export const Route = createLazyFileRoute("/ahli")({
  component: Asal,
});
