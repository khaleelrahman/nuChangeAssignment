
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./component/Header/header";
import Shoppage from "./pages/collection/collection";
import Checkout from "./pages/checkout/checkout-page";


function App() {
  return (
    <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Shoppage} />
          <Route  path="/checkout" component={Checkout} />
        </Switch>
      </div>
  );
}

export default App;
