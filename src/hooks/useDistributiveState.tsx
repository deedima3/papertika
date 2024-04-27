import { create, type StateCreator } from "zustand";
import { createJSONStorage, type PersistOptions } from "zustand/middleware";
import { persist } from "zustand/middleware";
import { assosiativeData } from "../data/table.data";
import { SelectedColumn } from "./useAssosiativeState";

type DistributiveState = {
  tableState: (string | number)[][];
  activeColumn: {
    row: number;
    col: number;
  };
  setActiveColumn: (selected: SelectedColumn) => void;
  setTable: (table: (string | number)[][]) => void;
};

type MyPersist = (
  config: StateCreator<DistributiveState>,
  options: PersistOptions<DistributiveState>
) => StateCreator<DistributiveState>;

const useDistributiveStore = create<DistributiveState>(
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
      name: "papertika-answer-distributive-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export { useDistributiveStore };
