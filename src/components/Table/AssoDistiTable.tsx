import { SelectedColumn } from "../../hooks/useAssosiativeState";
import AssoDistiTableChild from "./AssoDistiTableChild";

type AstroDistiTable = {
  tableState: (string | number)[][];
  activeColumn: SelectedColumn;
  setChoosen: (selected: SelectedColumn) => void;
  title: string;
};

const AssoDistiTable = ({
  tableState,
  activeColumn,
  setChoosen,
  title,
}: AstroDistiTable) => {
  return (
    <div className="relative w-full flex items-center justify-center">
      <div className="flex flex-col gap-12 absolute top-0 bottom-0 w-full mx-10 my-10 justify-center items-center">
        {tableState.map((tableRow, row) => {
          return (
            <div className="flex gap-28">
              {tableRow.map((tableCol, col) => {
                return (
                  <AssoDistiTableChild
                    row={row}
                    column={col}
                    data={tableCol}
                    key={col}
                    activeColumn={activeColumn}
                    setActiveColumn={setChoosen}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      <img
        src="/image/assets/Number_Pad.png"
        alt="Number Pad"
        className="w-full object-cover"
      />
      <div className="absolute top-[-3vh] w-full">
        <img src="/image/assets/NumpadTitle.png" alt="Numpad Pic" />
        <p className="w-full text-3xl font-bold stroke-[#412416] text-[#FFF2C7] font-outline-2 fix-stroke absolute top-5 flex justify-center">
          Papan Perkalian {title}
        </p>
      </div>
    </div>
  );
};

export default AssoDistiTable;
