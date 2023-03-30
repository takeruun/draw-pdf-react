import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import ReceiptBody from './PdfContent/PdfBody';
import { usePdfContent } from './PdfContent/usePdfContent';

function App() {
  const navigate = useNavigate();

  const {
    texts,

    action: {
      handlePdfTexts,
      handleSetTexts,
      handleCHangeWidth,
      handleChangePosition,
    }
  } = usePdfContent();

  return (
    <>
      <Box sx={{ my: 4 }}>
        <ReceiptBody
          texts={texts}
          handleSetTexts={handleSetTexts}
          handleCHangeWidth={handleCHangeWidth}
          handleChangePosition={handleChangePosition}
        />
      </Box>
      <Box sx={{ mt: 7 }}>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            handlePdfTexts(
              texts.map((text) => {
                return {
                  ...text,
                  current: text.htmlRef.current
                };
              })
            );
            navigate({
              pathname: '/preview',
            });
          }}
        >
          Preview
        </Button>
      </Box>
    </>
  )
}

export default App
