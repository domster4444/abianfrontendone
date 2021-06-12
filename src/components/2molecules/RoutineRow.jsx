import React from 'react';
import FormControl from 'react-bootstrap/FormControl';

export default function RoutineRow(props) {
  // if column ->5
  //->>big log td must be 5-4
  let log = console.log;
  log(props.column);
  log(props.cellstair);
  return (
    <>
      <tr>
        {/*Standard cell comumn for class */}
        <td>
          <FormControl
            id="marginiTop"
            className="routineInputField"
            aria-label="Text input with checkbox"
          />
        </td>

        {(() => {
          let colArry = [];
          for (let i = 0; i < props.column; i++) {
            colArry.push(
              <td>
                {(() => {
                  let stairArry = [];
                  for (let i = 0; i < props.cellstair; i++) {
                    stairArry.push(
                      <FormControl
                        className="routineInputField"
                        aria-label="Text input with checkbox"
                      />
                    );
                  }
                  return stairArry;
                })()}
              </td>
            );
          }
          return colArry;
        })()}
      </tr>
    </>
  );
}
