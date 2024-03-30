import { useAnswerStore } from "../../hooks/useAnswerState";
import AsalTableFlower from "./AsalTableFlower";

const AsalBouquet = () => {
  const unansweredChoice = useAnswerStore((state) => state.unansweredChoice);
  return (
    <div className="flex flex-wrap flex-shrink gap-2 max-h-full max-w-md">
      {unansweredChoice &&
        unansweredChoice
          .slice(0, 10)
          .map((choice) => <AsalTableFlower data={choice} />)}
    </div>
  );
};

export default AsalBouquet;
