import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import CheckerButton from "../Button/CheckerButton";
import { rightAudio, wrongAudio } from "../../lib/sound";
import { useAssosiativeStore } from "../../hooks/useAssosiativeState";

const AssosiativeCard = () => {
  const choosenAhli = useAssosiativeStore((state) => state.activeColumn);
  const row = useMemo(() => choosenAhli.row + 1, [choosenAhli]);
  const col = useMemo(() => choosenAhli.col + 11, [choosenAhli]);
  const setChoosenAhli = useAssosiativeStore((state) => state.setActiveColumn);
  const tableState = useAssosiativeStore((state) => state.tableState);
  const setTableState = useAssosiativeStore((state) => state.setTable);

  const [mult, setMult] = useState<string[]>([]);
  const [isTrue, setIsTrue] = useState<boolean>(false);
  const [isAnswered, setIsAnswered] = useState(false);

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
                <p>(</p>
                <p>{row}</p>
                <p>X</p>
                <p>{col}</p>
                <p>)</p>
                <p>X</p>
                <p>{row}</p>
                <p>=</p>
              </div>
              <div className="flex gap-3">
                <p>{row}</p>
                <p>X</p>
                <p>(</p>
                <input
                  value={mult[0]}
                  onChange={(e) => {
                    const tempMult = [...mult];
                    tempMult[0] = e.target.value;
                    setMult(tempMult);
                  }}
                  className="bg-transparent border-b-2 border-[#FFF2C7] w-16 focus:outline-none px-2"
                />
                <p>X</p>
                <input
                  value={mult[1]}
                  onChange={(e) => {
                    const tempMult = [...mult];
                    tempMult[1] = e.target.value;
                    setMult(tempMult);
                  }}
                  className="bg-transparent border-b-2 border-[#FFF2C7] w-16 focus:outline-none px-2"
                />
                <p>)</p>
                <p>=</p>
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
      <CheckerButton
        isAnswered={isAnswered}
        isTrue={isTrue}
        onClick={() => {
          setIsAnswered(true);
          if (mult[0] && mult[1]) {
            if (
              (parseInt(mult[0]) == row && parseInt(mult[1]) == col) ||
              (parseInt(mult[0]) == col && parseInt(mult[1]) == row)
            ) {
              rightAudio.play();
              setIsTrue(true);
              const tempTable = [...tableState];
              tempTable[choosenAhli.row][choosenAhli.col] = row * col * row;
              setTableState(tempTable);
            } else {
              wrongAudio.play();
            }
          }
          setTimeout(() => {
            setChoosenAhli({
              row: 0,
              col: 0,
            });
            setIsAnswered(false);
            setIsTrue(false);
            setMult([]);
          }, 5000);
        }}
      />
    </div>
  );
};

export default AssosiativeCard;
