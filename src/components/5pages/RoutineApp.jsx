import React from 'react';
import Table from 'react-bootstrap/Table';
import RoutineRow from '../2molecules/RoutineRow';
import RoutineCol from '../2molecules/RoutineCol';
import { useEffect, useState } from 'react';
export default function RoutineApp() {
  const [row, setTableRow] = useState(0);
  const [column, setTableCol] = useState(0);
  const [cellstair, setCellStair] = useState(0);

  useEffect(() => {
    setTableRow(prompt('how many class you want'));
    setTableCol(prompt('how many period you want'));
    setCellStair(prompt('how many cell stair you want in every cell '));
  }, []);

  return (
    <>
      <mark>
        row={row}, column={column}, cellstair={cellstair}
      </mark>
      <Table id="routineTable" striped bordered hover>
        <thead>
          <tr>
            {(() => {
              let colArry = [];
              for (let i = 0; i <= column; i++) {
                if (i === 0) {
                  colArry.push(<RoutineCol name="class" />);
                } else {
                  colArry.push(<RoutineCol name={`period ${i}`} />);
                }
              }
              return colArry;
            })()}
          </tr>
        </thead>
        <tbody>
          {/* -------------------THIS IS ROW */}
          {(() => {
            let rowArry = [];
            for (let i = 0; i < row; i++) {
              rowArry.push(
                <RoutineRow cellstair={cellstair} column={column} />
              );
            }
            return rowArry;
          })()}
        </tbody>
      </Table>
    </>
  );
}
