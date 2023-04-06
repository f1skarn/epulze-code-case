import '../../styles/team.css';
import { useNavigate, useParams } from 'react-router-dom';
import { ITeams, IPlayers } from '../../utils/dto/dtos';

interface ChildComponentProps {
  data: ITeams[] | undefined;
  isLoading: boolean;
}

function Team(props: ChildComponentProps) {
  const navigate = useNavigate();
  const { teamId } = useParams<{ teamId: string }>();
  const team = props.data?.find((item) => item?.id === teamId);
  const handleClick = () => {
    navigate(`/matchtable/${teamId}`, { state: { teamdId: teamId } });
  };
  return (
    <div className="team">
      <button className="back-button" onClick={() => navigate(-1)}>
        &lt; Back to leaderboard
      </button>
      <button className="match-button" onClick={handleClick}>
        Match table for {team?.name}
      </button>
      <div className="team-info">
        <h1 className="team-name">Team {team?.name}</h1>
        <img className="team-logo" src={team?.iconSrc} />
      </div>
      <div className="team-members">
        <h2 className="member-heading">Team Members:</h2>
        <ul className="member-list">
          {team?.players.map((player: IPlayers) => (
            <li className="member" key={player.nick}>
              {player.nick} : {player.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Team;
