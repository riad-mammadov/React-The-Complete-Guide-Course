import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge difficulty="Easy" targetTime={1} />
        <TimerChallenge difficulty="Not Easy" targetTime={5} />
        <TimerChallenge difficulty="Getting Tough" targetTime={5} />
        <TimerChallenge difficulty="Pros only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
