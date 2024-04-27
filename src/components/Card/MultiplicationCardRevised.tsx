import { useMemo, useState } from "react";
import { useAnswerStore } from "../../hooks/useAnswerState";
import { motion } from "framer-motion";
import CheckerButton from "../Button/CheckerButton";
import { rightAudio, wrongAudio } from "../../lib/sound";

const MultiplicationCardRevised = () => {
  const choosenAhli = useAnswerStore((state) => state.choosenAhli);
  const row = useMemo(() => choosenAhli.row + 1, [choosenAhli]);
  const col = useMemo(() => choosenAhli.column + 10, [choosenAhli]);
  const setTableAhli = useAnswerStore((state) => state.setTableAhli);
  const tableAhli = useAnswerStore((state) => state.tableAhliState);
  const setChoosenAhli = useAnswerStore((state) => state.setChoosenAhli);

  const [mult, setMult] = useState<string>("");
  const [multAlt, setMultAlt] = useState<string>("");

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
                <p>{row}</p>
                <p>X</p>
                <input
                  value={mult}
                  onChange={(e) => {
                    setMult(e.target.value);
                  }}
                  className="bg-transparent border-b-2 border-[#FFF2C7] w-16 focus:outline-none px-2"
                />
                <p>=</p>
                <input
                  value={multAlt}
                  onChange={(e) => {
                    setMultAlt(e.target.value);
                  }}
                  className="bg-transparent border-b-2 border-[#FFF2C7] w-16 focus:outline-none px-2"
                />
                <p>X</p>
                <p>{row}</p>
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
          setMult(col.toString());
          setMultAlt(col.toString());
          if (mult && multAlt && mult == multAlt) {
            const tempTable = [...tableAhli];
            tempTable[choosenAhli.row][choosenAhli.column] = row * col;
            setTableAhli(tempTable);
            setIsTrue(true);
            rightAudio.play();
          }
          setTimeout(() => {
            setChoosenAhli({
              row: 0,
              column: 0,
            });
            setIsAnswered(false);
            setIsTrue(false);
            wrongAudio.play();
            setMult("");
            setMultAlt("");
          }, 5000);
        }}
      />
    </div>
  );
};

export default MultiplicationCardRevised;
