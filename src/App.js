import './App.scss';
import Countdown from './components/countdown/Countdown';
import useLocalStorage from "use-local-storage";
import Logo from './components/logo/Logo';
import Warning from './components/warning/Warning';

function App() {
  const [firstCountdown, setFirstCountdown] = useLocalStorage('firstCountdown', 60);
  const [secondCoundown, setSecondCoundown] = useLocalStorage('secondCoundown', 120);
  const [thirdCountdown, setThirdCountdown] = useLocalStorage('thirdCountdown', 180);


  return (
    <div className="App">
      <Logo />
      <Warning />
      <div className='counters'>
        {<Countdown timerInSeconds={firstCountdown} onCountdownUpdate={setFirstCountdown} />}
        {<Countdown timerInSeconds={secondCoundown} onCountdownUpdate={setSecondCoundown} />}
        {<Countdown timerInSeconds={thirdCountdown} onCountdownUpdate={setThirdCountdown} />}
      </div>
    </div>
  );
}

export default App;
