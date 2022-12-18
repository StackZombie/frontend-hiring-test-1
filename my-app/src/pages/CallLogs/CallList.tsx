import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { LABELS } from './utils';

import { CustomButton } from '../../components/Button/Button';
import React from 'react';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const CallList = () => {
  const handleAction = () => {
    console.log('Open Model');
  };

  const TableCells = () => {
    return (
      <>
        {LABELS.map((label) => (
          <TableCell>{label}</TableCell>
        ))}
      </>
    );
  };

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label="customized table">
          <TableHead sx={{ backgroundColor: 'lightgrey' }}>
            <TableRow>
              <TableCells />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell style={{ color: '#000088' }} align="center">
                  {row.calories}
                </TableCell>
                <TableCell align="center">{row.fat}</TableCell>
                <TableCell align="center">{row.carbs}</TableCell>
                <TableCell align="center">{row.protein}</TableCell>

                <TableCell align="center">{row.carbs}</TableCell>
                <TableCell align="center">{row.protein}</TableCell>
                <TableCell align="center">{row.protein}</TableCell>

                <TableCell align="center">
                  <CustomButton
                    label="Action"
                    click={handleAction}
                    className="btn-primary"
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CallList;
