import { motion } from "framer-motion";

const FourthSlide = () => {
  return (
    <motion.div
      className="flex flex-col relative w-4/5 h-max"
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <p className="absolute top-0 font-sans text-2xl px-10 py-16 h-max stroke-[#412416] text-[#FFF2C7] font-outline-2 fix-stroke flex-col gap-5 flex">
        <p>Capaian Pembelajaran:</p>
        <p>
          Pada Fase B, peserta didik dapat mengisi nilai yang belum diketahui
          dalam sebuah kalimat matematika yang berkaitan dengan hukum komutatif,
          asosiatif, dan distributif dalam perhitungan perkalian
        </p>
        <p>Tujuan Pembelajaran:</p>
        <ul>
          <li>
            Memanfaatkan hukum komutatif, asosiatif, dan distributif dalam
            perhitungan perkalian
          </li>
          <li>
            Menerapkan hukum komutatif, asosiatif, dan distributif, terjadi
            dalam situasi konkret
          </li>
        </ul>
      </p>
      <img
        src="/image/assets/Number_Pad.png"
        alt="Number Pad"
        className="w-full h-[320px]"
      />
    </motion.div>
  );
};

export default FourthSlide;
