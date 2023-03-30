import { memo } from 'react';
import { Html } from 'react-konva-utils';
import { styled } from '@mui/material';
import { textHtmlProps } from '../../PdfContent/types';

interface Props {
  textProps: textHtmlProps;
  isEditing: boolean;
}

const HtmlDiv = styled('div')(
  () => `p {
    margin: 0;
    padding: 0;
  }
  `
);

const TextHtml: React.FC<Props> = memo(({ textProps, isEditing }) => {
  return (
    <>
      <Html
        transform
        groupProps={{ x: textProps.x, y: textProps.y }}
        divProps={{
          style: {
            pointerEvents: 'none'
          }
        }}
      >
        <HtmlDiv>
          <div
            style={{
              whiteSpace: 'break-spaces',
              overflowWrap: 'break-word',
              width: `${textProps.width}px`,
              height: `${textProps.height}px`,
              fontSize: 18,
              display: isEditing ? 'none' : 'block'
            }}
            ref={textProps.htmlRef}
          />
        </HtmlDiv>
      </Html>
    </>
  );
});

export default TextHtml;
