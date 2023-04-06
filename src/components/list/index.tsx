import '../../styles/list.css';
import { ILeaderboard, IPlacements, ITeams } from '../../utils/dto/dtos';
import ListItem from '../list-item';

interface ChildComponentProps {
  data: ILeaderboard;
}

function List(props: ChildComponentProps) {
  const { placements, teams } = props.data;

  function getTeamIcon(team: ITeams[], teamId: string): string | undefined {
    return team.find((item) => item.id === teamId)?.iconSrc;
  }

  return (
    <div className="list">
      <ul>
        {placements.map((placements: IPlacements) => (
          <li key={placements.teamId}>
            <ListItem
              data={placements}
              iconSrc={getTeamIcon(teams, placements.teamId)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
