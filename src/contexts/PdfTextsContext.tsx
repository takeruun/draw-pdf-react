import { useState, createContext, ReactNode } from 'react';
import { textHtmlProps } from '../PdfContent/types';

type newProps = textHtmlProps & {
  current: any;
};

type PdfTextsContextType = {
  pdfTexts: newProps[];
  handlePdfTexts: (pdfTexts: newProps[]) => void;
};

export const PdfTextsContext = createContext<PdfTextsContextType>(
  {} as PdfTextsContextType
);

type Props = {
  children: ReactNode;
};

export const PdfTextsProvider: React.FC<Props> = ({ children }) => {
  const [pdfTexts, setPdfTexts] = useState<newProps[]>([]);
  const handlePdfTexts = (pdfTexts: newProps[]) => {
    setPdfTexts(pdfTexts);
  };
  return (
    <PdfTextsContext.Provider value={{ pdfTexts, handlePdfTexts }}>
      {children}
    </PdfTextsContext.Provider>
  );
};
