import './App.css';
import axios from "axios";

import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// components
import Landing from './pages/Landing/Landing';
import EventsPage from "./pages/Events/Events";
import Register from './pages/Register/Register';
import Footer from './components/Footer/Footer';
import Guidelines from "./pages/Guidlelines/Guidelines";
import InnovationMela from './pages/Events/InnovationMela/InnovationMela';
import Standup from './pages/Standup/Standup';
import Team from './pages/Team/Team'
import PitchTank from './pages/Events/PitchTank/PitchTank';
import PanelDiscussion from './pages/Events/PanelDiscussion/PanelDiscussion';
import CaseMaze from './pages/Events/CaseMaze/CaseMaze';
import Fallout from './pages/Events/Fallout/Fallout';
import MoneyQuest from './pages/Events/MoneyQuest/MoneyQuest';
import Moneyball from './pages/Events/Moneyball/Moneyball';
import Workshop from './pages/Events/Workshop/Workshop';
import Informals from './pages/Events/Informals/Informals';
import YouthPanelDiscussion from './pages/Events/YouthPanelDiscussion/YouthPanelDiscussion';
import Onspot from './pages/Events/Onspot/Onspot';
import Ideatastic from './pages/Events/Ideatastic/Ideatastic';
import Iste from './pages/Events/Iste/Iste';

function App() {
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
            exact
            path="/"
            element={ <Landing /> }
          />
          <Route 
            exact
            path="/events"
            element={ <EventsPage /> }
          />
          <Route
            exact
            path="/register"
            element={ <Register /> }
          />
          <Route
            exact
            path="/guidelines"
            element={ <Guidelines /> }
          />
          <Route
            exact
            path="/innovationMela"
            element={ <InnovationMela /> }
          />
          <Route
            exact
            path="/pitchTank"
            element={ <PitchTank /> }
          />
          <Route
            exact
            path="/moneyQuest"
            element={ <MoneyQuest /> }
          />
          <Route
            exact
            path="/panelDis"
            element={ <PanelDiscussion /> }
          />
          <Route
            exact
            path="/casemaze"
            element={ <CaseMaze /> }
          />
          <Route
            exact
            path="/fallout"
            element={ <Fallout /> }
          />
          <Route
            exact
            path="/moneyball"
            element={ <Moneyball /> }
          />
          <Route
            exact
            path="/workshop"
            element={ <Workshop /> }
          />
          <Route
            exact
            path="/ypd"
            element={ <YouthPanelDiscussion /> }
          />
          <Route
            exact
            path="/onspot"
            element={ <Onspot /> }
          />
          <Route
            exact
            path="/ideatastic"
            element={ <Ideatastic /> }
          />
          <Route
            exact
            path="/iste"
            element={ <Iste /> }
          />
          {/* <Route
            exact
            path="/team"
            element={ <Team /> }
          /> */}
        </Routes>
      </Router>
      <Toaster />
      <Footer />
    </div>
  );
}

export default App;
