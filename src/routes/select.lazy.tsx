import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import NormalButton from "../components/Button/NormalButton";
import BackgroundLayout from "../components/Layout/BackgroundLayout";
import Title from "../components/Title/Title";

const Select = () => {
  const navigate = useNavigate({ from: "/" });
  return (
    <>
      <BackgroundLayout
        title="Selamat Datang!"
        image="image/background/ArrowBackground.png"
      >
        <Title />
        <div className="mx-auto flex flex-col gap-5 w-full items-center mt-20">
          <div className="flex gap-5">
            <div className="flex flex-col gap-5">
              <NormalButton
                text={"Asal"}
                type={"button"}
                onClick={() => navigate({ to: "/asal" })}
              />
              <NormalButton
                text={"Ahli"}
                type={"button"}
                onClick={() => navigate({ to: "/ahli" })}
              />
            </div>
            <div className="flex flex-col gap-5">
              <NormalButton
                text={"Materi"}
                type={"button"}
                onClick={() => navigate({ to: "/slides" })}
              />
              <NormalButton
                text={"Evaluasi"}
                type={"button"}
                onClick={() => navigate({ to: "/evaluasi" })}
              />
            </div>
          </div>
          <NormalButton
            text={"Kembali ke Awal"}
            type={"button"}
            onClick={() => navigate({ to: "/" })}
          />
        </div>
      </BackgroundLayout>
    </>
  );
};

export const Route = createLazyFileRoute("/select")({
  component: Select,
});
