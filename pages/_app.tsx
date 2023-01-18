import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { TabContextProvider } from "../components/Context/TabContext";

function MyApp({ Component, pageProps }) {
  return (
    <TabContextProvider>
      <Component {...pageProps} />
    </TabContextProvider>
  );
}

export default MyApp;
