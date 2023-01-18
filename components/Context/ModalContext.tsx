import { createContext, useState, ReactNode } from "react";
import { Dispatch, SetStateAction } from "react";

type ModalContextType = {
  modalState: boolean;
  setModalState: (modalState: boolean) => void;
};

type ModalContextProviderProps = {
  children: ReactNode;
};

export const ModalContext = createContext<ModalContextType>({
  modalState: false,
  setModalState: () => {},
});

export const ModalContextProvider = ({
  children,
}: ModalContextProviderProps) => {
  const [modalState, setModalState] = useState(false);
  return (
    <ModalContext.Provider value={{ modalState, setModalState }}>
      {children}
    </ModalContext.Provider>
  );
};

