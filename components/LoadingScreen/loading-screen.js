import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import style from "./loading-screen.module.scss";

const loadingVariant = {
  maximize: {
    opacity: 1,
  },
  minimize: {
    opacity: 0,
  },
  rotate: {
    rotate: [0, 360],
    scale: 1.1,
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.75,
      repeatDelay: 0.5,
    },
  },
};

function Loading() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const regex = new RegExp("\\?");

  useEffect(() => {
    const handleStart = (url) => {
      if (!regex.test(url) && !regex.test(router.asPath)) {
        setLoading(true);
      }
    };
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    loading && (
      <AnimatePresence>
        <motion.div className={style.loading} variants={loadingVariant}>
          <motion.div variants={loadingVariant} whileInView="rotate">
            <Image
              src="/favicon.ico"
              alt="loading_icon"
              width={100}
              height={100}
              layout="fixed"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    )
  );
}

export default Loading;
