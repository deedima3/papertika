import { create, type StateCreator } from "zustand";
import { createJSONStorage, type PersistOptions } from "zustand/middleware";
import { persist } from "zustand/middleware";
import { asalData, tableDataHidden } from "../data/table.data";

type AnswerState = {
  tableState: (string | number)[][];
  unansweredChoice: number[];
  isJigsawComplete: boolean;
  answerJigsaw: ({ row, column, answer }: Answer) => void;
  activeFlower: number;
  activeNumber: {
    row: number;
    column: number;
  };
  setFlower: (flower: number) => void;
  setActiveNumber: ({ row, column }: { row: number; column: number }) => void;
  setUnansweredChoice: (array: number[]) => void;
};

type Answer = {
  row: number;
  column: number;
  answer: number;
};

type MyPersist = (
  config: StateCreator<AnswerState>,
  options: PersistOptions<AnswerState>
) => StateCreator<AnswerState>;

const useAnswerStore = create<AnswerState>(
  (persist as unknown as MyPersist)(
    (set) => ({
      tableState: tableDataHidden,
      unansweredChoice: asalData,
      isJigsawComplete: false,
      activeFlower: 0,
      activeNumber: {
        row: 0,
        column: 0,
      },
      answerJigsaw: (answer: Answer) =>
        set((state) => ({
          tableState: answerJigsaw(answer, state),
        })),
      setFlower: (flower: number) =>
        set(() => ({
          activeFlower: flower,
        })),
      setUnansweredChoice: (array: number[]) =>
        set(() => ({
          unansweredChoice: array,
        })),
      setActiveNumber: ({ row, column }) =>
        set(() => ({
          activeNumber: {
            row: row,
            column: column,
          },
        })),
      resetStore: () =>
        set(() => ({
          tableState: tableDataHidden,
        })),
    }),
    {
      name: "papertika-answer-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

const answerJigsaw = ({ row, column, answer }: Answer, state: AnswerState) => {
  console.log("Row", row);
  console.log("Column", column);
  console.log("Answer", answer);
  if ((row == 0 && column == 0) || answer == 0) {
    return state.tableState;
  }
  if ((column + 10) * (row + 1) == answer) {
    const tempTableState = [...state.tableState];
    const tempUnansweredChoice = [...state.unansweredChoice];

    tempTableState[row][column] = answer;

    const index = state.unansweredChoice.findIndex((value) => value == answer);
    console.log("Index", index);

    if (index != -1) {
      tempUnansweredChoice.splice(index, 1);
    }

    state.setUnansweredChoice(tempUnansweredChoice);
    state.setFlower(0);
    state.setActiveNumber({
      row: 0,
      column: 0,
    });
    return tempTableState;
  }
  state.setFlower(0);
  state.setActiveNumber({
    row: 0,
    column: 0,
  });
  console.log("Wrong Answer, Resseting State");
  return state.tableState;
};

export { useAnswerStore };
