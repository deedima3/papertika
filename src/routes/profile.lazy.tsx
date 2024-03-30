import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import BackgroundLayout from "../components/Layout/BackgroundLayout";
import DeveloperCard from "../components/Card/DeveloperCard";
import NormalButton from "../components/Button/NormalButton";
import { useAnswerStore } from "../hooks/useAnswerState";

const Profile = () => {
  const navigate = useNavigate({ from: "/profile" });
  const resetStore = useAnswerStore((state) => state.resetStore);
  return (
    <>
      <BackgroundLayout
        title="Informasi Pengembang"
        image="image/background/WelcomeBackground.png"
      >
        <DeveloperCard />
        <div className="w-full flex flex-col items-center gap-2 justify-center mt-10">
          <NormalButton
            text={"Kembali Ke Menu"}
            type={"button"}
            onClick={() => navigate({ to: "/" })}
          />
          <NormalButton
            text={"Reset Aplikasi"}
            type={"button"}
            onClick={() => resetStore()}
          />
        </div>
      </BackgroundLayout>
    </>
  );
};

export const Route = createLazyFileRoute("/profile")({
  component: Profile,
});
