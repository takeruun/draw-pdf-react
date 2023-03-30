import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import PdfPreviewContent from "./PdfPreviewContent";

const AppRouets = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/preview" element={<PdfPreviewContent/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouets;