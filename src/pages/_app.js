import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <NextUIProvider>{getLayout(<Component {...pageProps} />)}</NextUIProvider>
  );
}
