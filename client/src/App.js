import logo from './logo.svg';
import './App.css';
import bootstarp from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter , Route , Link , Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import Loginscreen from './screens/Loginscreen';
import Registerscreen  from './screens/Registerscreen'
import 'react-bootstrap'
import Ordersscreen from './screens/Ordersscreen';
import Adminscreen from './screens/Adminscreen';
function App() {
  return (
    <div className="App">
      {/* <h1>Food Delivery</h1> */}
      <Navbar/>
      <BrowserRouter>
      <Route path="/" exact component={Homescreen}/>
      <Route path="/cart" exact component={Cartscreen}/>
      <Route path="/register" exact component={Registerscreen}/>
      <Route path="/login" exact component={Loginscreen}/>
      <Route path="/orders" exact component={Ordersscreen}/>
      <Route path="/admin" component={Adminscreen}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
