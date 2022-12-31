import { ThemeProvider } from 'react-bootstrap';
import './App.css';
import NbaTeams from './pages/nba-teams/NbaTeams';

function App() {
  return (
    <div className="App">
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
      >
        <NbaTeams />
      </ThemeProvider>
    </div>
  );
}

export default App;
