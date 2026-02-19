import { useEffect, useState } from "react";
import { fetchExcuse } from "../services/excuseApi";

export const useFetchExcuse = () => {
  const [excuse, setExcuse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getExcuse = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await fetchExcuse();
      setExcuse(data?.reason || "");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Oops, an error has occurred.");
      }
      setExcuse("");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getExcuse();
  }, []);

  return { excuse, loading, error, getExcuse };
};
