import { Footer } from './components/Footer';
import { Table } from './components/Table';
import { Header } from './components/Header';
// import {Pi1} from './components/piChart1'
// import {Pi2} from './components/piChart2'


// export const data = [
//   ["Task", "Hours per Day"],
//   ["Disagree strongly", 11],
//   ["Disagree a little", 2],
//   ["Neither agree nor disagree", 2],
//   ["Agree a little", 2],
//   ["Agree strongly", 7],
// ];

// export const options = {
//   title: "1. … is reserved",
//   is3D: true,
// };


import "./index.css";
import {
    Routes,
    Route,
  } from "react-router-dom";
import Charts from './Pages/Charts';


function App() {
  return (
    <Routes>
        <Route path="/" element={
            <div>
                <Header />
            
                <Table  />
                <Footer  />
            </div>
        } />
        <Route path="/stats" element={<Charts/>}/>
    </Routes>
  );
}

export default App;
