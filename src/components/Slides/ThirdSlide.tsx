import { motion } from "framer-motion";

const ThirdSlide = () => {
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
      <p className="absolute top-0 font-sans text-2xl px-10 py-16 h-max stroke-[#412416] text-[#FFF2C7] font-outline-2 fix-stroke flex-col gap-2 flex">
        Hukum pengelompokkan terjadi apabila hasil dari perkalian sama walaupun
        dikerjakan dari mana saja.
        <br />
        Contoh:
        <br />
        (a x b) x c = d, dikelompokkan menjadi bentuk a x (b x c) = d (2 x 5) x
        3 = . . .
        <br />
        Jika perkalian di atas diubah menjadi sifat pengelompokkan maka (2 x 5)
        x 3 akan menjadi 2 x (5 x 3)
        <br />
        Jadi, perkaliannya (2 x 5) x 3 = 2 x (5 x 3)
        <br />
        10 x 3 = 2 x 15
        <br />
        30 = 30
        <br />
        3) Sifat Penyebaran (Distributif) Untuk sifat distributif ini berlaku
        bahwa: a x (b x c) = (a x b) + (a x c)
        <br />
        Contoh:
        <br />
        4 x (3 + 6) jika diubah menjadi sifat distributif menjadi = 4 x (3 + 6)
        = (4 x 3) + (4 x 6).
        <br />
        = 4 x 9 = 12 + 24
        <br />= 36 = 36
      </p>
      <img
        src="/image/assets/Number_Pad.png"
        alt="Number Pad"
        className="w-full h-[320px]"
      />
    </motion.div>
  );
};

export default ThirdSlide;
