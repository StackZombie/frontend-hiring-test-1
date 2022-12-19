import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { LABELS, decideColor } from './utils';
import { Call } from '../../redux/reducers/CallReducer';
import { CustomButton } from '../../components/Button/Button';

interface Props {
  calls: Call[];
}
function createData(
  callType: string,
  direction: string,
  duration: string,
  from: string,
  to: string,
  via: string,
  created_at: string,
  status: string,
  id: number
) {
  return {
    callType,
    direction,
    duration,
    from,
    to,
    via,
    created_at,
    status,
    id,
  };
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
    createData(
      'Voice Mail',
      'Outbound',
      '80 minute 23 seconds',
      '+3314213913',
      '+3314213913',
      '+3314213913',
      '12-08-2022',
      'Archieved',
      1
    ),
    createData(
      'Answered',
      'Outbound',
      '80 minute 23 seconds',
      '+3314213913',
      '+3314213913',
      '+3314213913',
      '12-08-2022',
      'Un-Archieved',
      1
    ),
    createData(
      'Voice Mail',
      'Outbound',
      '80 minute 23 seconds',
      '+3314213913',
      '+3314213913',
      '+3314213913',
      '12-08-2022',
      'Archieved',
      1
    ),
    createData(
      'Voice Mail',
      'Outbound',
      '80 minute 23 seconds',
      '+3314213913',
      '+3314213913',
      '+3314213913',
      '12-08-2022',
      'Archieved',
      1
    ),
    createData(
      'Missed',
      'Outbound',
      '80 minute 23 seconds',
      '+3314213913',
      '+3314213913',
      '+3314213913',
      '12-08-2022',
      'Un-Archieved',
      1
    ),
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
              <TableRow key={row.id}>
                <TableCell
                  style={{ color: decideColor(row.callType) }}
                  component="th"
                  scope="row"
                >
                  {row.callType}
                </TableCell>
                <TableCell style={{ color: '#000088' }} align="center">
                  {row.direction}
                </TableCell>
                <TableCell align="center">{row.duration}</TableCell>
                <TableCell align="center">{row.from}</TableCell>
                <TableCell align="center">{row.to}</TableCell>

                <TableCell align="center">{row.via}</TableCell>
                <TableCell align="center">{row.created_at}</TableCell>
                <TableCell align="center">{row.status}</TableCell>

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
