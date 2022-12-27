import { Footer } from './components/Footer';
import { Table } from './components/Table';
import { Header } from './components/Header';
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
