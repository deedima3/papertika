import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import BackgroundLayout from "../components/Layout/BackgroundLayout";
import { motion } from "framer-motion";
import NormalButton from "../components/Button/NormalButton";

const Tutorial = () => {
  const navigate = useNavigate({ from: "/" });
  return (
    <>
      <BackgroundLayout
        title="Selamat Datang!"
        image="image/background/TestBackground.png"
      >
        <div className="flex flex-col gap-5 w-full h-full items-center justify-between min-h-screen px-20 py-24">
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
            <div className="absolute top-0 font-sans text-2xl px-14 py-16 h-max stroke-[#412416] text-[#FFF2C7] font-outline-2 fix-stroke flex flex-col gap-5">
              <h1 className="text-4xl text-center">
                Tutorial Penggunaan Aplikasi Papertika
              </h1>
              <ol>
                <li>
                  Buka aplikasi dan pilih opsi "Materi" untuk memilih topik
                  matematika yang ingin dipelajari.
                </li>
                <li>
                  Eksplorasi modul materi yang menyediakan penjelasan dengan
                  animasi dan gambar.
                </li>
                <li>
                  Gunakan opsi "Tabel Asal" dan "Tabel Ahli" untuk melatih
                  keterampilan matematika dengan berbagai operasi.
                </li>
                <li>
                  Gunakan opsi "Evaluasi" untuk menguji pemahaman anak tentang
                  materi yang telah dipelajari.
                </li>
                <li>
                  Pastikan untuk memberikan pujian dan dorongan kepada anak
                  Anda.
                </li>
                <li>
                  Jadwalkan sesi pembelajaran yang teratur sambil terlibat dalam
                  proses belajar mereka.
                </li>
              </ol>
            </div>
            <img
              src="/image/assets/Number_Pad.png"
              alt="Number Pad"
              className="w-full h-[320px]"
            />
          </motion.div>
          <NormalButton
            text={"Kembali ke Menu"}
            type={"button"}
            onClick={() => navigate({ to: "/" })}
          />
        </div>
      </BackgroundLayout>
    </>
  );
};

export const Route = createLazyFileRoute("/tutorial")({
  component: Tutorial,
});
