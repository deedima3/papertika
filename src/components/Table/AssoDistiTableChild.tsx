import { SelectedColumn } from "../../hooks/useAssosiativeState";

type AssoDistiTableChildProps = {
  data: string | number;
  row: number;
  column: number;
  activeColumn: SelectedColumn;
  setActiveColumn: (selected: SelectedColumn) => void;
};

const AssoDistiTableChild = ({
  data,
  column,
  row,
  activeColumn,
  setActiveColumn,
}: AssoDistiTableChildProps) => {
  if (data == "X") {
    return (
      <button
        className={`w-14 flex items-center justify-center ${activeColumn.col == column && activeColumn.row == row ? "animate-scale-slow" : ""}`}
        onClick={() =>
          setActiveColumn({
            row: row,
            col: column,
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

export default AssoDistiTableChild;
