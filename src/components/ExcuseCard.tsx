import type { ExcuseCardProps } from "../types/types";
import LoadingExcuse from "./LoadingExcuse";

const ExcuseCard = (props: ExcuseCardProps) => {
  const { loading, text } = props;
  return (
    <div className="min-h-48 rounded-md p-5 flex items-center justify-center bg-gray-200 dark:bg-gray-800 shadow-md">
      {loading ? <LoadingExcuse /> : `"${text}"`}
    </div>
  );
};

export default ExcuseCard;
