import { createContext, ReactNode, useEffect, useState } from "react";
import { ILivro } from "../@libs/types";
import { LivroService } from "../services/livro.service";

interface LivrosContextProps {
  livros: ILivro[];
  setLivros: React.Dispatch<React.SetStateAction<ILivro[]>>;
}

// Cria o contexto com valores iniciais
export const LivrosContext = createContext<LivrosContextProps | undefined>(undefined);

// Cria o provider
interface LivrosProviderProps {
  children: ReactNode;
}

export const LivrosProvider: React.FC<LivrosProviderProps> = ({ children }) => {
  const [livros, setLivros] = useState<ILivro[]>([]);

  useEffect(()=>{
    LivroService.getAll()
      .then(result => {
        console.log(result.data)
        setLivros(result.data);
      })
  },[])

  return (
    <LivrosContext.Provider value={{ livros, setLivros }}>
      {children}
    </LivrosContext.Provider>
  );
};