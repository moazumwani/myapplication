import "./App.css";
import "flowbite";
import {
  BrowserRouter as Router,
  RouterProvider,
  Switch,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import BarCharts from "./MyComponents/BarCharts";
import PieCharts from "./MyComponents/PieCharts";
import LineChart from "./MyComponents/LineChart";
import SalesGraph from "./MyComponents/SalesComparisonGraph";
import { SideBar } from "./MyComponents/SideBar";
import { Activity } from "./MyComponents/Activity";
import DCT from "./MyComponents/DCT";
import Headers from "./MyComponents/Headers";
import Decision from "./MyComponents/Decision";
import DecisionTree from "./MyComponents/DecisionTree";

function App() {
  return (
    <div className="App">
      <Router>
        <SideBar />
        <Headers/>
        <Routes>
        {/* <Route path="/linechart1" element= /> */}
          <Route path="/" element={
            <>
            
            <LineChart />
            <BarCharts />
            <PieCharts />
            <SalesGraph />
            <Activity />
            </>
          }/>
            
          

          <Route path="/DCT" element={<DCT/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
