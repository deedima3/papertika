import { useEffect, useMemo, useState } from "react";
import { useAnswerStore } from "../../hooks/useAnswerState";
import { motion } from "framer-motion";
import { arrayEquals } from "../../lib/utils";
import CheckerButton from "../Button/CheckerButton";
import { sort } from "radash";

const MultiplicationCard = () => {
  const choosenAhli = useAnswerStore((state) => state.choosenAhli);
  const row = useMemo(() => choosenAhli.row + 1, [choosenAhli]);
  const col = useMemo(() => choosenAhli.column + 10, [choosenAhli]);
  const setTableAhli = useAnswerStore((state) => state.setTableAhli);
  const tableAhli = useAnswerStore((state) => state.tableAhliState);
  const setChoosenAhli = useAnswerStore((state) => state.setChoosenAhli);

  const [mult, setMult] = useState<string[]>([]);
  const [multAlt, setMultAlt] = useState<string[]>([]);
  const [add, setAdd] = useState<string[]>([]);

  const [isMultCorrect, setMultCorrect] = useState(false);
  const [isMultAltCorrect, setMultAltCorrect] = useState(false);
  const [isAddCorrect, setAddCorrect] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const isTrue = useMemo(() => {
    return isMultAltCorrect && isMultCorrect && isAddCorrect;
  }, [isMultAltCorrect, isAddCorrect, isMultCorrect]);

  useEffect(() => {
    console.log("IsMult", isMultCorrect);
    console.log("IsMultAlt", isMultAltCorrect);
    console.log("IsAdd", isAddCorrect);
  }, [isMultAltCorrect, isMultCorrect, isAddCorrect]);

  useEffect(() => {
    let temp = 0;
    mult.map((value) => {
      if (temp == 0) {
        temp = parseInt(value);
      } else {
        temp = temp * parseInt(value);
      }
    });
    console.log("MultTemp", temp);
    console.log("Mult", mult);
    if (temp == row * col) {
      setMultCorrect(true);
    } else {
      setMultCorrect(false);
    }
  }, [col, mult, row]);

  useEffect(() => {
    if (
      arrayEquals(
        sort(multAlt, (f) => parseInt(f)),
        sort(mult, (f) => parseInt(f))
      )
    ) {
      setMultAltCorrect(true);
    } else {
      setMultAltCorrect(false);
    }
  }, [multAlt, mult]);

  useEffect(() => {
    let temp = 0;
    add.map((value) => {
      temp = temp + parseInt(value);
    });
    if (temp == row * col) {
      setAddCorrect(true);
    } else {
      setAddCorrect(false);
    }
  }, [col, add, row]);

  useEffect(() => {
    if (row != 0 && col != 0) {
      const tempArray = [];
      const tempAddArray = [];
      for (let i = 0; i < row; i++) {
        tempArray.push("");
      }
      for (let i = 0; i < col; i++) {
        tempAddArray.push("");
      }
      setMult(tempArray);
      setMultAlt(tempArray);
      setAdd(tempAddArray);
    }
  }, [col, row]);

  const changeMult = (mult: string[], index: number, value: string) => {
    const tempMult = [...mult];
    tempMult[index] = value;
    setMult(tempMult);
  };

  const changeMultAlt = (mult: string[], index: number, value: string) => {
    const tempMult = [...mult];
    tempMult[index] = value;
    setMultAlt(tempMult);
  };

  const changeAdd = (add: string[], index: number, value: string) => {
    const tempAdd = [...add];
    tempAdd[index] = value;
    setAdd(tempAdd);
  };
  return (
    <div className="w-1/3 flex flex-col items-center gap-10">
      <motion.div
        className="flex flex-col relative w-full max-h-full max-w-md"
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 300, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <div className="bg-[#8F5A3D] p-5 rounded-md">
          <div className="bg-[#7F492D] rounded-md px-5 py-10 text-xl font-bold text-[#FFF2C7] ">
            <div className="flex flex-col gap-10">
              <div className="flex gap-5">
                {mult &&
                  mult.map((value, key) => {
                    if (key + 1 == mult.length) {
                      return (
                        <>
                          <input
                            value={value}
                            onChange={(e) => {
                              changeMult(mult, key, e.target.value);
                            }}
                            key={key}
                            className="bg-transparent border-b-2 border-[#FFF2C7] w-16 focus:outline-none px-2"
                          />
                          <p>=</p>
                        </>
                      );
                    } else {
                      return (
                        <>
                          <input
                            value={value}
                            onChange={(e) => {
                              changeMult(mult, key, e.target.value);
                            }}
                            key={key}
                            className="bg-transparent border-b-2 border-[#FFF2C7] w-16 focus:outline-none px-2"
                          />
                          <p>X</p>
                        </>
                      );
                    }
                  })}
              </div>
              <div className="flex gap-5 flex-wrap">
                {add &&
                  add.map((value, key) => {
                    if (key + 1 == add.length) {
                      return (
                        <>
                          <input
                            value={value}
                            onChange={(e) => {
                              changeAdd(add, key, e.target.value);
                            }}
                            key={key}
                            className="bg-transparent border-b-2 border-[#FFF2C7] w-16 focus:outline-none px-2"
                          />
                        </>
                      );
                    } else {
                      return (
                        <>
                          <input
                            value={value}
                            onChange={(e) => {
                              changeAdd(add, key, e.target.value);
                            }}
                            key={key}
                            className="bg-transparent border-b-2 border-[#FFF2C7] w-16 focus:outline-none px-2"
                          />
                          <p>+</p>
                        </>
                      );
                    }
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[-40px] flex items-center justify-center">
          <p className="w-full text-2xl font-bold stroke-[#412416] text-[#FFF2C7] font-outline-2 fix-stroke absolute top-2 flex justify-center">
            Kotak Perintah
          </p>
          <img
            src="/image/assets/NumpadTitle.png"
            alt="Numpad Pic"
            className="w-max h-16"
          />
        </div>
      </motion.div>
      <div className="flex gap-10">
        <motion.div
          className="flex flex-col relative w-full max-h-full max-w-md"
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 300, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <div className="bg-[#8F5A3D] p-5 rounded-md">
            <div className="bg-[#7F492D] rounded-md px-5 py-10 text-xl font-bold text-[#FFF2C7] ">
              <div className="flex flex-col gap-10">
                <div className="flex gap-5">
                  {multAlt &&
                    multAlt.map((value, key) => {
                      if (key + 1 == multAlt.length) {
                        return (
                          <>
                            <input
                              value={value}
                              onChange={(e) => {
                                changeMultAlt(multAlt, key, e.target.value);
                              }}
                              key={key}
                              className="bg-transparent border-b-2 border-[#FFF2C7] w-16 focus:outline-none px-2"
                            />
                          </>
                        );
                      } else {
                        return (
                          <>
                            <input
                              value={value}
                              onChange={(e) => {
                                changeMultAlt(multAlt, key, e.target.value);
                              }}
                              key={key}
                              className="bg-transparent border-b-2 border-[#FFF2C7] w-16 focus:outline-none px-2"
                            />
                            <p>X</p>
                          </>
                        );
                      }
                    })}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[-40px] flex items-center justify-center">
            <p className="w-full text-2xl font-bold stroke-[#412416] text-[#FFF2C7] font-outline-2 fix-stroke absolute top-2 flex justify-center">
              Atau
            </p>
            <img
              src="/image/assets/NumpadTitle.png"
              alt="Numpad Pic"
              className="w-max h-16"
            />
          </div>
        </motion.div>
        <CheckerButton
          isAnswered={isAnswered}
          isTrue={isTrue}
          onClick={() => {
            setIsAnswered(true);
            setTimeout(() => {
              const tempTable = [...tableAhli];
              tempTable[choosenAhli.row][choosenAhli.column] = row * col;
              setTableAhli(tempTable);
              setChoosenAhli({
                row: 0,
                column: 0,
              });
            }, 1000);
          }}
        />
      </div>
    </div>
  );
};

export default MultiplicationCard;
