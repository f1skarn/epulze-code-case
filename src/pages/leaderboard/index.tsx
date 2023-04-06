import '../../styles/leaderboard.css';
import { BeatLoader } from 'react-spinners';

import List from '../../components/list';
import Header from '../../components/header';
import { ILeaderboard } from '../../utils/dto/dtos';

interface ChildComponentProps {
  data: ILeaderboard | undefined;
  isLoading: boolean;
}

function Leaderboard(props: ChildComponentProps) {
  const leaderboardData = props.data;
  const isLoading = props.isLoading;
  return (
    <div className="leaderboard">
      <Header />
      {leaderboardData ? (
        <List data={leaderboardData} />
      ) : (
        <p>{isLoading ? <BeatLoader /> : null}</p>
      )}
    </div>
  );
}

export default Leaderboard;
