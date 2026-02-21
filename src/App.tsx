import ExcuseCard from "./components/ExcuseCard";
import { useFetchExcuse } from "./hooks/useFetchExcuse";

import "./styles/index.css";

function App() {
  const { loading, excuse, error, getExcuse } = useFetchExcuse();

  const getExcuseText = () => {
    if (excuse) {
      return excuse;
    } else {
      if (error) {
        return "Oops, there has been an error fetching excuses. I guess you'll have to go.";
      } else {
        return "No excuses this time. Just go.";
      }
    }
  };

  return (
    <main className=" flex items-center justify-center min-h-screen text-center">
      <div className="p-5 max-w-96 w-full flex flex-col gap-6">
        <h1 className="text-7xl md:text-8xl font-bold">nope.</h1>
        <p>
          Having difficulty saying no?
          <br /> Find an excuse that works for you.
        </p>
        <ExcuseCard loading={loading} text={getExcuseText()} />
        <button
          type="button"
          className="p-2 bg-pink-600 text-white rounded-md cursor-pointer shadow-md font-medium lg:hover:scale-103 transition-transform duration-500"
          onClick={getExcuse}
          disabled={loading}
        >
          Meh, generate a different excuse
        </button>
      </div>
    </main>
  );
}

export default App;
