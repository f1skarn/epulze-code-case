import '../../styles/header.css';

function Header() {
  const titles = ['Placement', 'Team', 'Score', 'Wins', 'Losses', 'Division'];

  return (
    <header className="header">
      {titles.map((title: string) => (
        <h1 key={title}>{title}</h1>
      ))}
    </header>
  );
}

export default Header;
