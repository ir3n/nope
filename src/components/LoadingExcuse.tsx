const LoadingExcuse = () => {
  return (
    <div
      className="flex text-6xl font-bold gap-2 opacity-50"
      role="status"
      aria-label="Loading excuse..."
    >
      <span className="w-3 h-3 rounded-full dark:bg-white bg-gray-900 animate-bounce [animation-delay:-0.4s]"></span>
      <span className="w-3 h-3 rounded-full dark:bg-white bg-gray-900 animate-bounce [animation-delay:-0.2s]"></span>
      <span className="w-3 h-3 rounded-full dark:bg-white bg-gray-900 animate-bounce"></span>
    </div>
  );
};

export default LoadingExcuse;
