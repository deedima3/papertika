import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import NormalButton from "../components/Button/NormalButton";
import BackgroundLayout from "../components/Layout/BackgroundLayout";
import Title from "../components/Title/Title";

const Ahli = () => {
  const navigate = useNavigate({ from: "/" });
  return (
    <>
      <BackgroundLayout
        title="Selamat Datang!"
        image="image/background/ArrowBackground.png"
      >
        <Title />
        <div className="mx-auto flex flex-col gap-5 w-full items-center mt-20">
          <NormalButton
            text={"Asosiatif"}
            type={"button"}
            onClick={() => navigate({ to: "/asosiatif" })}
          />
          <NormalButton
            text={"Komutatif"}
            type={"button"}
            onClick={() => navigate({ to: "/komutatif" })}
          />
          <NormalButton
            text={"Distributif"}
            type={"button"}
            onClick={() => navigate({ to: "/distributif" })}
          />
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

export const Route = createLazyFileRoute("/ahli")({
  component: Ahli,
});
