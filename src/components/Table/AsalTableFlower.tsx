import { useAnswerStore } from "../../hooks/useAnswerState";

type AsalTableFlowerProps = {
  data: number;
};

const AsalTableFlower = ({ data }: AsalTableFlowerProps) => {
  const activeFlower = useAnswerStore((state) => state.activeFlower);
  const setFlower = useAnswerStore((state) => state.setFlower);
  return (
    <button
      className={`flex items-center justify-center relative`}
      onClick={() => setFlower(data)}
    >
      <p className="text-2xl font-bold absolute top-0 bottom-0 flex items-center justify-center z-10">
        {data}
      </p>
      <img
        src="/image/assets/Flower.png"
        alt="Flower"
        className={`w-48 ${activeFlower == data ? "animate-spin scale-110" : ""}`}
      />
    </button>
  );
};

export default AsalTableFlower;
