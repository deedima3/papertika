import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Helmet } from "react-helmet";

type BackgroundLayoutProps = {
  image: string;
  title: string;
  children: ReactNode;
};

const BackgroundLayout = ({
  image,
  title,
  children,
}: BackgroundLayoutProps) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>PAPERTIKA | {title}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Helmet>
      <motion.div
        className="w-full h-full min-h-screen object-cover font-berlin"
        exit={{ opacity: 0.8 }}
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
      >
        <img
          src={image}
          alt="Background Image"
          className="w-full h-full min-h-screen object-cover"
        />
      </motion.div>
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 300, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="w-full absolute top-0 bottom-0"
      >
        {children}
      </motion.div>
    </>
  );
};

export default BackgroundLayout;
