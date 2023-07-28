import store from "@/redux/store";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  const persistor = persistStore(store);
  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <NextUIProvider>
          {getLayout(<Component {...pageProps} />)}
        </NextUIProvider>
      </SessionProvider>
    </Provider>
  );
}
