import '../../styles/match-table.css';
import { useNavigate, useParams } from 'react-router-dom';
import { IMatches } from '../../utils/dto/dtos';

interface ChildComponentProps {
  data: IMatches[] | undefined;
  isLoading: boolean;
}

function MatchTable(props: ChildComponentProps) {
  const navigate = useNavigate();
  const { teamId } = useParams<{ teamId: string }>();
  const matches = props.data?.filter((item) => item?.team1 === teamId);

  return (
    <div className="background">
      <button className="back-button" onClick={() => navigate(-1)}>
        &lt; Back to team
      </button>
      <h1>{`Match Table for ${teamId}`}</h1>
      <table>
        <thead>
          <tr>
            <th>Team 1</th>
            <th>Team 2</th>
            <th>Score 1</th>
            <th>Score 2</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {matches?.map((match) => (
            <tr key={match.date}>
              <td>{match.team1}</td>
              <td>{match.team2}</td>
              <td>{match.score1}</td>
              <td>{match.score2}</td>
              <td>{match.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MatchTable;
