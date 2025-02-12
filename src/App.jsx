import './App.css'
import ClockAppName from "./components/ClockAppName";
import ClockSlogan from "./components/ClockSlogan";
import CurrentTime from "./components/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (<center>
    <ClockAppName/>
    <ClockSlogan/>
    <CurrentTime/>
  </center>
  );
}

export default App;
