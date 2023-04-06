import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Toolbar from './components/toolbar';
import Leaderboard from './pages/leaderboard';
import Team from './pages/team';
import MatchTable from './pages/match-table';
import { useEffect, useState } from 'react';
import { getLeaderboardData } from './services/leaderboard';
import { ILeaderboard } from './utils/dto/dtos';
import { BeatLoader } from 'react-spinners';

function App() {
  const [leaderboardData, setLeaderboardData] = useState<
    ILeaderboard | undefined
  >(undefined);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getLeaderboardData()
      .then((res) => setLeaderboardData(res))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="App">
      <Toolbar />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Leaderboard data={leaderboardData} isLoading={isLoading} />
            }
          />
          <Route
            path="/team/:teamId"
            element={
              <Team data={leaderboardData?.teams} isLoading={isLoading} />
            }
          />
          <Route
            path="/matchtable/:teamId"
            element={
              <MatchTable
                data={leaderboardData?.matches}
                isLoading={isLoading}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
