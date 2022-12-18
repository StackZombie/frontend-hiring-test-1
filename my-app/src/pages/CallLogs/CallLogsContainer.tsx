import { NavBar } from '../../components/Navbar/Navbar';
import CustomSelect from '../../components/Select/Select';
import { OPTIONS } from './utils';
import { Container } from '@mui/system';
import { useState } from 'react';
import { Pagination, Box } from '@mui/material';
import CallList from './CallList';
const CallLogContiner = () => {
  const [option, setOption] = useState<string>(OPTIONS[2]);

  const handleOption = (option: string) => {
    setOption(option);
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
          <Pagination count={10} color="primary" />
        </Box>
      </Container>
    </div>
  );
};
export default CallLogContiner;
