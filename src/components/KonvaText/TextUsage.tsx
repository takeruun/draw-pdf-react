import { useRef, useEffect, memo } from 'react';
import { Rect, Transformer } from 'react-konva';
import { textHtmlProps } from '../../PdfContent/types';
import TextHtml from './TextHtml';
import TextInputHtml from './TextInputHtml';

interface TextUsageProps {
  textProps: textHtmlProps;
  selected: boolean;
  handleSelectedId: (id: number) => void;
  isEditing: boolean;
  changeWidth: (width: number, height: number) => void;
  changePosition: (x: number, y: number) => void;
}

const TextUsage: React.FC<TextUsageProps> = memo(
  ({
    textProps,
    selected,
    isEditing,
    handleSelectedId,
    changeWidth,
    changePosition
  }) => {
    const textRef = useRef<any>(null);
    const transformerRef = useRef<any>(null);

    const transformer = selected ? (
      <Transformer
        ref={transformerRef}
        flipEnabled={false}
        rotateEnabled={false}
        enabledAnchors={['middle-right', 'bottom-center']}
      />
    ) : null;

    const handleResize = () => {
      if (textRef.current !== null) {
        const textNode = textRef.current;
        const newWidth = textNode.width() * textNode.scaleX();
        const newHeight = textNode.height() * textNode.scaleY();

        textNode.setAttrs({
          width: newWidth,
          height: newHeight,
          scaleX: 1,
          scaleY: 1
        });
        changeWidth(newWidth, newHeight);
      }
    };

    const onDragMove = () => {
      if(!textRef.current) return;

      if (!selected) handleSelectedId(textProps.id);
      else changePosition(textRef.current.x(), textRef.current.y());
    };

    const handleDragEnd = () => {
      if (transformerRef.current !== null) {
        changePosition(transformerRef.current.x(), transformerRef.current.y());
      }
    };

    useEffect(() => {
      if (selected && transformerRef.current !== null) {
        transformerRef.current.nodes([textRef.current]);
        transformerRef.current.getLayer().batchDraw();
      }
    }, [selected]);

    return (
      <>
        <Rect
          onClick={() => {
            handleSelectedId(textProps.id);
          }}
          width={textProps.width}
          height={textProps.height}
          onTransform={handleResize}
          ref={textRef}
          x={textProps.x}
          y={textProps.y}
          draggable
          onDragMove={onDragMove}
          onDragEnd={handleDragEnd}
        />
        <TextInputHtml textProps={textProps} isEditing={isEditing} />
        <TextHtml textProps={textProps} isEditing={isEditing} />
        {transformer}
      </>
    );
  }
);

export default TextUsage;
