import { create, type StateCreator } from "zustand";
import { createJSONStorage, type PersistOptions } from "zustand/middleware";
import { persist } from "zustand/middleware";
import { assosiativeData } from "../data/table.data";

type AssosiativeState = {
  tableState: (string | number)[][];
  activeColumn: {
    row: number;
    col: number;
  };
  setActiveColumn: (selected: SelectedColumn) => void;
  setTable: (table: (string | number)[][]) => void;
};

type SelectedColumn = {
  row: number;
  col: number;
};

type MyPersist = (
  config: StateCreator<AssosiativeState>,
  options: PersistOptions<AssosiativeState>
) => StateCreator<AssosiativeState>;

const useAssosiativeStore = create<AssosiativeState>(
  (persist as unknown as MyPersist)(
    (set) => ({
      tableState: assosiativeData,
      activeColumn: {
        row: 0,
        col: 0,
      },
      setActiveColumn: (selected: SelectedColumn) =>
        set(() => ({
          activeColumn: selected,
        })),
      setTable: (table) =>
        set(() => ({
          tableState: table,
        })),
    }),
    {
      name: "papertika-answer-assosiative-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export { useAssosiativeStore };
export type { SelectedColumn };
