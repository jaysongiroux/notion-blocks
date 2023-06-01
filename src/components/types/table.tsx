import { AnnotationsProps } from './general';

export interface tableProps {
  tableStyle?:React.CSSProperties;
  tableRowStyle?:React.CSSProperties;
  tableHeaderStyle?:React.CSSProperties;
  tableBlock: {
    has_children: boolean;
    type: string;
    table: {
      table_width: number;
      has_row_header: boolean;
      has_column_header: boolean;
      children: tableRows[];
    };
  };
}

export interface tableRows {
  has_children: boolean;
  type: string;
  object: string;
  table_row: {
    cells: tableCells[][];
  };
}

export interface tableCells {
  annotations: AnnotationsProps;
  href: string | null;
  plain_text: string;
  type: string;
  text: {
    content: string;
    link: string | null;
  };
}
