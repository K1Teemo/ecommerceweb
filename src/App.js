import Aside from './Components/Aside/Aside';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
          { <Aside />}
          <Switch>
              <Route exact path='/'>
                  <Redirect to='/' />
                  <Home />
              </Route>
              <Route path={'/Profile'}>
                  < Profile/>
              </Route>
              <Route path={'/DASHBOARD'}>
                  < Dashbord/>
              </Route>
              <Route path={'/Inventory'}>
                  < Inventory
                      selectedItems={selectedItems}
                  />
              </Route>
              <Route path={'/SHOPPING'}>
                  < Cart />
              </Route>
              <Route path={'/ORDERS'}>
                  < Orders />
              </Route>
              <Route path={'/addProduct/:productId?'}>
                  <AddProduct/>
              </Route>
              <Route path={'/TRANSACTION'}>
                  < Transactions />
              </Route>
              <Route path={'/STORES'}>
                  < Stores />
              </Route>
              <Route path={'/catalog'}>
              </Route>
          </Switch>
      </Router>
  );
}

export default App;