import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import BackgroundLayout from "../components/Layout/BackgroundLayout";
import AsalTable from "../components/Table/AsalTable";
import NormalButton from "../components/Button/NormalButton";
import AsalBouquet from "../components/Table/AsalBouquet";

const Eval = () => {
  const navigate = useNavigate({ from: "/" });
  return (
    <>
      <BackgroundLayout
        title="Selamat Datang!"
        image="image/background/TestBackground.png"
      >
        <div className="flex gap-5 w-full h-full items-center justify-between min-h-screen px-20">
          <div className="flex flex-col gap-5 w-3/5">
            <AsalTable />
            <div className="flex gap-5">
              <NormalButton
                text={"Kembali Ke Menu"}
                type={"button"}
                onClick={() => navigate({ to: "/select" })}
              />
            </div>
          </div>
          <AsalBouquet />
        </div>
      </BackgroundLayout>
    </>
  );
};

export const Route = createLazyFileRoute("/evaluasi")({
  component: Eval,
});
