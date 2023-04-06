export interface ILeaderboard {
  placements: IPlacements[];
  teams: ITeams[];
  matches: IMatches[];
}
export interface IPlacements {
  teamId: string;
  place: number;
  won: string;
  lost: string;
  score: string;
  color: string;
  division: string;
}

export interface IPlayers {
  nick: string;
  name: string;
}

export interface ITeams {
  id: string;
  name: string;
  iconSrc: string;
  division: string;
  players: IPlayers[];
}

export interface IMatches {
  status: string;
  team1: string;
  team2: string;
  score1: string;
  score2: string;
  date: string;
  division: string;
}
