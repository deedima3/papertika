const tableData = [
  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [22, 24, 26, 28, 30, 32, 34, 36, 38, 40],
  [33, 36, 39, 42, 45, 48, 51, 54, 57, 60],
  [44, 48, 52, 56, 60, 64, 68, 72, 76, 80],
  [55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
  [66, 72, 78, 84, 90, 96, 102, 108, 114, 120],
];

const tableDataHidden = [
  ["Mult", 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [2, 22, "X", 26, "X", 30, "X", "X", 36, "X", 40],
  [3, 33, 36, "X", "X", 45, 48, "X", "X", 57, 60],
  [4, 44, "X", 52, 56, "X", "X", 68, 72, "X", 80],
  [5, 55, 60, "X", "X", 75, 80, "X", "X", "X", 100],
  [6, 66, "X", "X", 84, "X", "X", "X", 108, 114, 120],
];

const tableDataHiddenAhli = [
  ["Mult", 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [2, 22, "X", 26, "X", 30, "X", "X", 36, "X", 40],
  [3, 33, 36, "X", "X", 45, 48, "X", "X", 57, 60],
  [4, 44, "X", 52, 56, "X", "X", 68, 72, "X", 80],
  [5, 55, 60, "X", "X", 75, 80, "X", "X", "X", 100],
  [6, 66, "X", "X", 84, "X", "X", "X", 108, 114, 120],
];

const asalData = [
  24, 28, 32, 34, 38, 39, 42, 51, 54, 48, 60, 64, 76, 65, 70, 85, 90, 95, 72,
  78, 90, 96, 102,
];

const assosiativeData = [
  ["Mult", 12, 13, 14, 15],
  [2, 48, "X", "X", 60],
  [3, 108, 117, "X", "X"],
  [4, "X", "X", 224, 240],
  [5, "X", 325, "X", 240],
  [6, 432, "X", 504, "X"],
];

const distibutiveData = [
  ["Mult", 12, 13, 14, 15],
  [2, 28, "X", "X", 34],
  [3, 45, 48, "X", "X"],
  [4, "X", "X", 72, 76],
  [5, "X", 90, "X", 100],
  [6, 108, "X", 120, "X"],
];

const evalQuestion = {
  question: "Pilihlah perkalian yang menggunakan hukum komutatif dan hukum asosiatif",
  answer: [
    {
      choice: "37 x 5 = 5 x 37",
      isTrue: true,
    },
    {
      choice: "38 x 9 = 25 x 6",
      isTrue: false,
    },
    {
      choice: "(7 x 8) x 2 = 7 x (8 x 2)",
      isTrue: true,
    },
    {
      choice: "7 x (8 + 2) = (7x 8) + (7 x 2)",
      isTrue: false,
    },
  ],
};

export {
  tableData,
  tableDataHidden,
  asalData,
  assosiativeData,
  distibutiveData,
  evalQuestion,
  tableDataHiddenAhli,
};
