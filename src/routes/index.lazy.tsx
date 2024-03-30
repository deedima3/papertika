import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import BackgroundLayout from "../components/Layout/BackgroundLayout";
import Title from "../components/Title/Title";
import NormalButton from "../components/Button/NormalButton";

const Index = () => {
  const navigate = useNavigate({ from: "/" });
  return (
    <>
      <BackgroundLayout
        title="Selamat Datang!"
        image="image/background/WelcomeBackground.png"
      >
        <Title />
        <div className="mx-auto flex flex-col gap-5 w-full items-center mt-20">
          <NormalButton
            text={"Menu Utama"}
            type={"button"}
            onClick={() => navigate({ to: "/select" })}
          />
          <NormalButton
            text={"Profil Pengembang"}
            type={"button"}
            onClick={() => navigate({ to: "/profile" })}
          />
        </div>
      </BackgroundLayout>
    </>
  );
};

export default Index;

export const Route = createLazyFileRoute("/")({
  component: Index,
});
