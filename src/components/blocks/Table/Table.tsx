import React from 'react';
import { RichTextProps } from '../../types/general';
import { constructTextFromBlocks } from '../../helpers/text';
import { tableCells, tableProps, tableRows } from '../../types/table';
import './table.css';

const Table = (props: tableProps) => {
  const { tableBlock } = props;
  const table = tableBlock?.table;
  const tableRows = table?.has_row_header ? table?.children.slice(1) : table?.children;

  return (
    <table className="tableContainer" style={props?.tableStyle}>
      {table?.has_row_header && (
        <thead className={'tableRowHeader'}>
          <tr>
            {table?.children[0]?.table_row?.cells?.map((headerCell: RichTextProps[], index: number) => (
              <th key={index} style={props?.tableHeaderStyle} className="tableRowHeader tableCell">
                {constructTextFromBlocks(headerCell, {})}
              </th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {tableRows?.map((row: tableRows, index: number) => (
          <tr key={index}>
            {row?.table_row?.cells?.map((cell: tableCells[], index: number) => (
              <td
                key={index}
                className={`${table?.has_column_header && index === 0 ? 'tableRowHeader' : 'tableRow'} tableCell`}
                style={table?.has_column_header && index === 0 ? props?.tableHeaderStyle : props?.tableRowStyle}
              >
                <div className={"tableRowContentContainer"}>

                {constructTextFromBlocks(cell, {})}
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
