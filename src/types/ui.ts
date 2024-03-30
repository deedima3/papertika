type TableData = {
  rowSymbol: string;
  rowData: number;
  rowAnswerData: TableRowAnswerData[];
};

type TableRowAnswerData = {
  isHidden: boolean;
  isAnsweredJigsaw: boolean;
  isAnsweredMult: boolean;
};

export type { TableData };
