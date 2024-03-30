import { motion } from "framer-motion";
import { Portal } from "react-portal";

type CloseableModal = {
  isOpen: boolean;
  text: string;
  title: string;
  onClose: () => void;
};

const CloseableModal = () => {
  return (
    <Portal node={document && document.getElementById("portal")}>
      <motion.div className="w-full h-full min-h-screen flex justify-center items-center bg-black/70 absolute top-0">
        <div className="top-0 bottom-0 z-20"></div>
      </motion.div>
    </Portal>
  );
};

export default CloseableModal;
