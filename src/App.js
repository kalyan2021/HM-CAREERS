import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import { Switch, Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './components/Navbar/Home/Home';
import CurrentOpenings from './components/Currentopenings';
import JobRecommend from './components/jobRecommend';

function App() {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route exact path="/"  element={<Home/>}/>
        <Route exact path="/joblist" element={<CurrentOpenings/>} />
        <Route exact path="/job-recommend" element={<JobRecommend/>}/>
        <Route exact path="/benefits" />
        <Route exact path="/life@work" />
      </Routes>


















      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/joblist" element={<CurrentOpenings />} />
        </Routes>
      </BrowserRouter> */}
      {/* <Routes>
        <Switch>
        <Route path='/'></Route>
        <Route path='/joblist' component={CurrentOpenings}></Route>
        <Route path='/benefits'></Route>
        <Route path='/life@work'></Route>
        </Switch>
      </Routes> */}
    </div>
  );
}

export default App;
