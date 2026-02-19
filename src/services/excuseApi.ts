import type { Excuse } from "../types/types";

const API = "https://naas.isalman.dev/no";

export const fetchExcuse = async (): Promise<Excuse> => {
  const res = await fetch(API);

  if (!res.ok) {
    throw new Error(`Failed to fetch excuse, status: ${res.status}`);
  }

  const data = await res.json();

  return data;
};
