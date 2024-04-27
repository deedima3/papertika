import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import BackgroundLayout from "../components/Layout/BackgroundLayout";
import NormalButton from "../components/Button/NormalButton";
import MultiplicationCardRevised from "../components/Card/MultiplicationCardRevised";
import AssoDistiTable from "../components/Table/AssoDistiTable";
import { useAssosiativeStore } from "../hooks/useAssosiativeState";

const Asosiatif = () => {
  const navigate = useNavigate({ from: "/komutatif" });

  const tableState = useAssosiativeStore((state) => state.tableState);
  const activeColumn = useAssosiativeStore((state) => state.activeColumn);
  const setChoosen = useAssosiativeStore((state) => state.setActiveColumn);
  return (
    <>
      <BackgroundLayout
        title="Selamat Datang!"
        image="image/background/TestBackground.png"
      >
        <div className="flex gap-5 w-full h-full items-center justify-between min-h-screen px-20">
          <div className="flex flex-col gap-5 w-3/5">
            <AssoDistiTable
              tableState={tableState}
              activeColumn={activeColumn}
              setChoosen={setChoosen}
              title={"Kelompok Assosiatif"}
            />
            <div className="flex gap-5">
              <NormalButton
                text={"Kembali Ke Menu"}
                type={"button"}
                onClick={() => navigate({ to: "/ahli" })}
              />
            </div>
          </div>
          {activeColumn.col && activeColumn.row && (
            <MultiplicationCardRevised />
          )}
        </div>
      </BackgroundLayout>
    </>
  );
};

export const Route = createLazyFileRoute("/asosiatif")({
  component: Asosiatif,
});
