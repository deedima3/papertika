import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import BackgroundLayout from "../components/Layout/BackgroundLayout";
import { motion } from "framer-motion";
import NormalButton from "../components/Button/NormalButton";
import { useEffect } from "react";
import { fourAudio, oneAudio, threeAudio, twoAudio } from "../lib/tutorialsound";

const Tutorial = () => {
  const navigate = useNavigate({ from: "/" });
  useEffect(() => {
    oneAudio.play()
    oneAudio.addEventListener("ended", () => {
      oneAudio.currentTime = 0
      twoAudio.play()
    })
    twoAudio.addEventListener("ended", () => {
      twoAudio.currentTime = 0
      threeAudio.play()
    })
    threeAudio.addEventListener("ended", () => {
      threeAudio.currentTime = 0
      fourAudio.play()
    })
    fourAudio.addEventListener("ended", () => {
      fourAudio.currentTime = 0
    })
  }, [])
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
                Tutorial Penggunaan Aplikasi PAPERTIKA
              </h1>
              <ol>
                <li>Simaklah materi yang telah disajikan pada menu materi.</li>
                <li>
                  Setelah membaca materi, pilih menu "Asal" kemudian klik tanda
                  bintang yang terkunci pada papan perkalian secara berurutan
                  dari perkalian 2, jika semua sudah terisi klik kembali ke menu
                  utama.
                </li>
                <li>
                  Selanjutnya, pilih salah satu menu ahli untuk diselesaikan
                  dengan cara klik (tanda bintang) yang ada pada papan perkalian
                  kelompok ahli baik itu di papan (asosiatif, komutatif, atau
                  distributif), jika sudah klik tombol kembali ke menu.
                </li>
                <li>
                Terakhir pilih menu evaluasi kemudian pilihlah jawaban yang benar!
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
