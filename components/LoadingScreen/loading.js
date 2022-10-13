import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoadingScreen from "./loading-screen";

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

  return loading && <LoadingScreen />;
}

export default Loading;
