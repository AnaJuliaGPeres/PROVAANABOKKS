import { useContext } from "react";
import { LivrosContext } from "../contexts/LivroContext";

export const useLivros = () => {
  const context = useContext(LivrosContext);

  if (!context) {
    throw new Error("useLivros deve ser usado dentro de um LivrosProvider");
  }
  
  return context;
};