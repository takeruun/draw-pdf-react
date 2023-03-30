import { useState, useContext, useCallback, createRef, useEffect } from 'react';
import { PdfTextsContext } from '../contexts/PdfTextsContext';
import { textHtmlProps } from './types';

export const usePdfContent = () => {
  const { handlePdfTexts } = useContext(PdfTextsContext);
  const [firstMount, setFirstMount] = useState(true);
  const [texts, setTexts] = useState<textHtmlProps[]>([]);
  const handleSetTexts = (text: textHtmlProps) =>
    setTexts((prev) => [...prev, text]);

  const handleCHangeWidth = (id: number, width: number, height: number) =>
    setTexts((prev) =>
      prev.map((text) => (text.id === id ? { ...text, width, height } : text))
    );

  const handleChangePosition = (id: number, x: number, y: number) =>
    setTexts((prev) =>
      prev.map((text) => (text.id === id ? { ...text, x, y } : text))
    );

  // const initialTexts: textHtmlProps[] = [
  //   {
  //     id: 1,
  //     width: 120,
  //     height: 30,
  //     x: 352,
  //     y: 65,
  //     htmlRef: createRef()
  //   },
  //   {
  //     id: 2,
  //     width: 130,
  //     height: 30,
  //     x: 375,
  //     y: 110,
  //     htmlRef: createRef()
  //   },
  //   {
  //     id: 3,
  //     width: 160,
  //     height: 30,
  //     x: 595,
  //     y: 67,
  //     htmlRef: createRef()
  //   },
  //   {
  //     id: 4,
  //     width: 60,
  //     height: 30,
  //     x: 282,
  //     y: 259,
  //     htmlRef: createRef()
  //   }
  // ];
  
  return {
    texts,
    action: {
      handlePdfTexts,
      handleSetTexts,
      handleCHangeWidth,
      handleChangePosition,
    }
  };
};
