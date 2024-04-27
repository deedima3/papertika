import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import BackgroundLayout from "../components/Layout/BackgroundLayout";
import NormalButton from "../components/Button/NormalButton";
import AhliTable from "../components/Table/AhliTable";
import { useAnswerStore } from "../hooks/useAnswerState";
import MultiplicationCardRevised from "../components/Card/MultiplicationCardRevised";

const Komutatif = () => {
  const navigate = useNavigate({ from: "/komutatif" });
  const selectedChoosen = useAnswerStore((state) => state.choosenAhli);
  return (
    <>
      <BackgroundLayout
        title="Selamat Datang!"
        image="image/background/TestBackground.png"
      >
        <div className="flex gap-5 w-full h-full items-center justify-between min-h-screen px-20">
          <div className="flex flex-col gap-5 w-3/5">
            <AhliTable />
            <div className="flex gap-5">
              <NormalButton
                text={"Kembali Ke Menu"}
                type={"button"}
                onClick={() => navigate({ to: "/ahli" })}
              />
            </div>
          </div>
          {selectedChoosen.column && selectedChoosen.row && (
            <MultiplicationCardRevised />
          )}
        </div>
      </BackgroundLayout>
    </>
  );
};

export const Route = createLazyFileRoute("/komutatif")({
  component: Komutatif,
});
