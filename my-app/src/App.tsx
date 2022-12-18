import { CallLogsPage } from './pages/CallLogs';
import { LogInPage } from './pages/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/call-logs" element={<CallLogsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
