export interface ColumnsProps { 
  columnStyles?: React.CSSProperties;
  columnBlock: [
    {
      children: any[],
      has_children: boolean,
      object: string,
      type: string
    }
  ];
}