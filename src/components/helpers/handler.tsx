import React from 'react';
import Columns from '../Columns/Columns';
import { Bookmark } from '../blocks/Bookmark';
import Callout from '../blocks/Callout/Callout';
import Code from '../blocks/Code/Code';
import Divider from '../blocks/Divider/Divider';
import { Headers, ToggleHeaders } from '../blocks/Headers';
import BulletList from '../blocks/Lists/BulletList/BulletList';
import NumberList from '../blocks/Lists/NumberList/NumberList';
import ToDoList from '../blocks/Lists/ToDoList/ToDoList';
import Paragraph from '../blocks/Paragraph/Paragraph';
import Picture from '../blocks/Picture/Picture';
import Quote from '../blocks/Quote/Quote';
import { ThemeEnum } from '../types/code';
import { Equation } from '../blocks/Equation';
import { ChildPage } from '../blocks/ChildPage';
import Table from '../blocks/Table/Table';

export const HEADERS = ['heading_1', 'heading_2', 'heading_3'];

interface HandleComponentProps {
  block: any;
  additionalProps: any;
}

const HandleComponent = (props: HandleComponentProps) => {
  const block = props?.block;
  const additionalProps = props?.additionalProps;

  if ((HEADERS.includes(block?.type) && block[block?.type]?.is_toggleable) || block?.type === 'toggle') {
    return <ToggleHeaders toggleHeaderBlock={block[block?.type]} type={block?.type} {...additionalProps} />;
  }

  switch (block?.type) {
    case 'heading_3':
    case 'heading_2':
    case 'heading_1':
      return (
        <Headers headerStyles={additionalProps?.headerStyles} headerBlock={block[block?.type]} type={block?.type} />
      );
    case 'paragraph':
      return <Paragraph paragraphStyles={additionalProps?.paragraphStyles} paragraphBlock={block?.paragraph} />;
    case 'code':
      return (
        <Code
          codeBlock={block?.code}
          theme={additionalProps.codeTheme ?? ThemeEnum.Light}
          codeOverlay={additionalProps.codeOverlay ?? true}
          codeStyles={additionalProps?.codeStyles}
        />
      );
    case 'image':
      return <Picture pictureBlock={block?.image} pictureStyles={additionalProps?.pictureStyles} />;
    case 'callout':
      return <Callout calloutStyles={additionalProps?.calloutStyles} calloutBlock={block?.callout} />;
    case 'quote':
      return <Quote quoteStyles={additionalProps?.quoteStyles} quoteBlock={block?.quote} />;
    case 'bulleted_list_item':
      return <BulletList listStyles={additionalProps?.listStyles} bulletedListBlock={block?.bulleted_list_item} />;
    case 'numbered_list_item':
      return <NumberList listStyles={additionalProps?.listStyles} numberedNumberBlock={block?.blocks} />;
    case 'to_do':
      return <ToDoList listStyles={additionalProps?.listStyles} todoListProps={block?.to_do} />;
    case 'divider':
      return <Divider />;
    case 'column_list':
      return <Columns columnBlock={block?.children} {...additionalProps} />;
    case 'equation':
      return <Equation equationBlock={block?.equation} {...additionalProps} />;
    case 'child_page':
      return <ChildPage childPageBlock={block} {...additionalProps} />;
    case 'bookmark':
      return <Bookmark bookmarkBlock={block?.bookmark} bookmarkStyles={additionalProps?.bookmarkStyles} />;
    case 'table':
      return <Table tableBlock={block} {...additionalProps} />;
    default:
      return null;
  }
};

HandleComponent.defaultProps = {
  additionalProps: {},
};

export default HandleComponent;
