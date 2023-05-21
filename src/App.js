// import logo from './logo.svg';
import './App.css';
import {BrowserRouter ,Route,Routes} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderCompenent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
// import EmployeeService from './components/EmployeeService';




function App() {
  
  return (
    <div>
  
    <BrowserRouter  >
    <div className="container">
      <HeaderComponent/>
    <div className="App">
     <Routes>
     <Route path="/" exact element={<ListEmployeeComponent/>}/>
<Route path="/employees"  element={<ListEmployeeComponent/>}/>
<Route path="/add-employee" exact element={<CreateEmployeeComponent/>}/>
<Route path="/update-employee/:empid" exact element={<UpdateEmployeeComponent/>}/>
     
     </Routes>
     </div>
    <FooterComponent/>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;

// cant use this bwlow code for routing
{/* <Router>
<div ClassName="container">
<HeaderComponent/>
<div className="App">
<Switch>
<Route path="/" component={ListEmployeeComponent}></Route>
<Route path="/employees" component={ListEmployeeComponent}></Route>
<ListEmployeeComponent/>
</Switch>
</div>
<FooterComponent/>
</div>
</Router> */}