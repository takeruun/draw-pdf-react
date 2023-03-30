import { useContext } from 'react';
import parse from 'html-react-parser';
import { Box, styled } from '@mui/material';
import { PdfTextsContext } from '../contexts/PdfTextsContext';
import { Stage, Layer, Image, Group } from 'react-konva';
import useImage from 'use-image';
import { INITIAL_IMAGE_WIDTH, INITIAL_IMAGE_HEIGHT } from '../constant';
import { Html } from 'react-konva-utils';

const PrintBody = styled(Box)(
  () => `
  @page { 
    size: 3.3in 10in
    margin: 0;
    size: landscape;
  }
  @media print {
    body {
      width: 180mm;
      height: 80mm;
    }
  }
`
);
const HtmlDiv = styled('div')(
  () => `p {
    margin: 0;
    padding: 0;
  }
  `
);

const BaseImage = () => {
  const [image] = useImage('/images/recipt_base.JPG');
  return <Image image={image} height={350} width={850} />;
};

const ReceiptPreviewContent = () => {
  const { pdfTexts } = useContext(PdfTextsContext);

  return (
    <PrintBody>
      <Stage
        width={INITIAL_IMAGE_WIDTH}
        height={INITIAL_IMAGE_HEIGHT}
        style={{ backgroundColor: 'white' }}
      >
        <Layer>
          <Group>
            <BaseImage />
            {pdfTexts &&
              pdfTexts.map((text) => {
                return (
                  <Html
                    key={text.id}
                    groupProps={{ x: text.x, y: text.y }}
                    divProps={{
                      style: {
                        pointerEvents: 'none'
                      }
                    }}
                  >
                    <HtmlDiv>{parse(text.current.outerHTML)}</HtmlDiv>
                  </Html>
                );
              })}
          </Group>
        </Layer>
      </Stage>
    </PrintBody>
  );
};

export default ReceiptPreviewContent;
