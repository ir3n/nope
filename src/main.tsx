import { createRoot } from "react-dom/client";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white relative">
    <div className="absolute top-0 left-0 w-full h-full opacity-5 dark:opacity-20 bg-[url('/no.svg')] bg-repeat bg-size-[70px]" />
    <div className="relative z-1">
      <App />
    </div>
  </div>,
);
