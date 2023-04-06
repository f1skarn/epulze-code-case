import { useNavigate } from 'react-router-dom';
import '../../styles/list-item.css';
import { IPlacements } from '../../utils/dto/dtos';

interface ChildComponentProps {
  data: IPlacements;
  iconSrc: string | undefined;
}

function ListItem(props: ChildComponentProps) {
  const iconSrc = props.iconSrc;
  const { teamId, place, won, lost, score, color, division } = props.data;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/team/${teamId}`, { state: { teamdId: teamId } });
  };

  return (
    <div className="leaderboard-item">
      <div className="place">{place}</div>
      <button className="teamId-button" onClick={handleClick}>
        <img className="logo" src={iconSrc} />
        {teamId}
      </button>
      <div className="score">{score}</div>
      <div className="won">{won}</div>
      <div className="lost">{lost}</div>
      <div className="division">{division}</div>
    </div>
  );
}

export default ListItem;
