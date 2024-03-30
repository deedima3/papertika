import { useEffect } from "react";
import { useAnswerStore } from "../../hooks/useAnswerState";
import AsalTableChild from "./AsalTableChild";

const Table = () => {
  const tableState = useAnswerStore((state) => state.tableState);
  const activeNumber = useAnswerStore((state) => state.activeNumber);
  const activeFlower = useAnswerStore((state) => state.activeFlower);
  const answerJigsaw = useAnswerStore((state) => state.answerJigsaw);

  useEffect(() => {
    answerJigsaw({
      row: activeNumber.row,
      column: activeNumber.column,
      answer: activeFlower,
    });
  }, [activeFlower, activeNumber]);
  return (
    <div className="relative w-full flex items-center justify-center">
      <div className="flex flex-col gap-12 absolute top-0 bottom-0 w-full mx-10 my-10 justify-center items-center">
        {tableState.map((tableRow, row) => {
          return (
            <div className="flex gap-5">
              {tableRow.map((tableCol, col) => {
                return (
                  <AsalTableChild
                    row={row}
                    column={col}
                    data={tableCol}
                    key={col}
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
      <div className="absolute top-[-70px] w-max">
        <img src="/image/assets/NumpadTitle.png" alt="Numpad Pic" />
        <p className="w-full text-5xl font-bold stroke-[#412416] text-[#FFF2C7] font-outline-2 fix-stroke absolute top-5 flex justify-center">
          Papan Perkalian Kelompok Asal
        </p>
      </div>
    </div>
  );
};

export default Table;
