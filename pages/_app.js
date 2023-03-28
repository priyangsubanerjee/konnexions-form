import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <div className="scrollbar-hide">
      <Toaster
        position="top-center"
        toastOptions={{
          // Define default options
          className: "",
          style: {
            background: "#fff",
            color: "#0d1117",
            zIndex: 1,
            borderRadius: "50px",
            fontSize: "14px",
          },
          duration: 5000,
        }}
      />
      <Component {...pageProps} />
    </div>
  );
}
