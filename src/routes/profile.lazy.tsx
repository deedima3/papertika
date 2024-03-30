import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import BackgroundLayout from "../components/Layout/BackgroundLayout";
import DeveloperCard from "../components/Card/DeveloperCard";
import NormalButton from "../components/Button/NormalButton";

const Profile = () => {
  const navigate = useNavigate({ from: "/profile" });
  return (
    <>
      <BackgroundLayout
        title="Informasi Pengembang"
        image="image/background/WelcomeBackground.png"
      >
        <DeveloperCard />
        <div className="w-full flex justify-center mt-10">
          <NormalButton
            text={"Kembali Ke Menu"}
            type={"button"}
            onClick={() => navigate({ to: "/" })}
          />
        </div>
      </BackgroundLayout>
    </>
  );
};

export const Route = createLazyFileRoute("/profile")({
  component: Profile,
});
