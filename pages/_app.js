import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <div className="scrollbar-hide">
      <Toaster position="top-right" />
      <Component {...pageProps} />
    </div>
  );
}
