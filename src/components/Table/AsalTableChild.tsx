import { useAnswerStore } from "../../hooks/useAnswerState";

type AsalTableChildProps = {
  data: string | number;
  row: number;
  column: number;
};

const AsalTableChild = ({ data, column, row }: AsalTableChildProps) => {
  const activeNumber = useAnswerStore((state) => state.activeNumber);
  const setActiveNumber = useAnswerStore((state) => state.setActiveNumber);

  if (data == "X") {
    return (
      <button
        className={`w-14 flex items-center justify-center ${activeNumber.column == column && activeNumber.row == row ? "animate-scale-slow" : ""}`}
        onClick={() =>
          setActiveNumber({
            row: row,
            column: column,
          })
        }
      >
        <img
          src="/image/assets/Btn_Star.png"
          alt="Option"
          className="w-full hover:scale-110 transition-all"
        />
      </button>
    );
  }
  if (data == "Mult") {
    return (
      <div className="font-bold text-4xl stroke-[#412416] text-[#FFF2C7] font-outline-2 fix-stroke w-14 flex items-center justify-center">
        <p>X</p>
      </div>
    );
  }
  return (
    <div className="font-bold text-4xl stroke-[#412416] text-[#FFF2C7] font-outline-2 fix-stroke w-14 flex items-center justify-center">
      <p>{data}</p>
    </div>
  );
};

export default AsalTableChild;
