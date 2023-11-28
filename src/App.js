import './App.css';
import 'flowbite';
import Header from './MyComponents/Headers';
import {Footer} from './MyComponents/Footer';
import MyChart from './MyComponents/MyChart';
import BarCharts from './MyComponents/BarCharts';
import PieCharts from './MyComponents/PieCharts';
import LineChart from './MyComponents/LineChart';
import { PieChart } from 'recharts';
import StackedAreaCharts from './MyComponents/StackedAreaCharts';
import SalesGraph from './MyComponents/SalesComparisonGraph';
import BarChartStackedBySign from './MyComponents/BarChartStackedBySign';
import CustomerTable from './MyComponents/CustomerTable';
import Table from './MyComponents/Table';
import HorizontalBarChart from './MyComponents/HorizontalBarChart';
import { SideBar } from './MyComponents/SideBar';
import DCT from './MyComponents/DCT';

function App() {
  

  return (
    <div className="App">
      <SideBar/>
    {/* <Header/> */}
    {/* <PieCharts/>
    <LineChart/>
     <StackedAreaCharts/> */}
<CustomerTable />

     <>
<BarChartStackedBySign/>

     {/* <Footer/> */}
     <BarCharts/>
     {/* <SalesGraph/> */}
<Table/>
<HorizontalBarChart/>
{/* <DCT/> */}
     </>

    </div>
  );
}

export default App;
