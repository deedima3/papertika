import { motion } from "framer-motion";

type CheckerButtonProps = {
  isTrue: boolean;
  isAnswered: boolean;
  onClick: () => void;
};
const CheckerButton = ({ isTrue, isAnswered, onClick }: CheckerButtonProps) => {
  if (!isAnswered) {
    return (
      <motion.button
        className=""
        onClick={onClick}
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 300, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <img src="/image/assets/Questioning.png" alt="Questioning" />
      </motion.button>
    );
  }
  if (isTrue) {
    return (
      <motion.button
        className=""
        onClick={onClick}
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 300, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <img src="/image/assets/Correct.png" alt="Correct" />
      </motion.button>
    );
  }
  return (
    <motion.button
      className=""
      onClick={onClick}
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <img src="/image/assets/Wrong.png" alt="Wrong" />
    </motion.button>
  );
};

export default CheckerButton;
