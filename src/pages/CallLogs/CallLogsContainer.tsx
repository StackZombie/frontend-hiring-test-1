import { NavBar } from '../../components/Navbar/Navbar';
import CustomSelect from '../../components/Select/Select';
import { OPTIONS } from './utils';
import { Container } from '@mui/system';
import { useState } from 'react';
import { Pagination, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import CallList from './CallList';
import { InitialState, Call } from '../../redux/reducers/CallReducer';

import {
  useDownloadCallLogsData,
  useFilterCallLogsData,
} from '../../hooks/useDownloadCallLogs';

const CallLogContiner = () => {
  const limit = 10;
  const [offset, setOffset] = useState(10);
  const [option, setOption] = useState<string>(OPTIONS[2]);

  useDownloadCallLogsData(offset);
  useFilterCallLogsData(option);

  const calls = useSelector<InitialState, Call[]>((state) => state.calls);

  const handleOption = (option: string) => {
    setOption(option);
  };

  const changePage = (event: any, value: number) => {
    setOffset(() => offset + limit);
  };

  return (
    <div>
      <NavBar />
      <Container fixed>
        <h2>Turing Technologies Front End Task</h2>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <p>Filter By: </p>{' '}
          <CustomSelect
            value={option}
            options={OPTIONS}
            style={{ width: 180, height: 30, marginTop: 10, marginLeft: 10 }}
            handleChange={handleOption}
          />{' '}
        </div>
        <Box>
          <CallList />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          <Pagination count={10} color="primary" onChange={changePage} />
        </Box>
      </Container>
    </div>
  );
};
export default CallLogContiner;
