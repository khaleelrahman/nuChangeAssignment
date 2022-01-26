
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./component/Header/header";
import Shoppage from "./pages/collection/collection";


function App() {
  return (
    <div>
        <Header />
        <Switch>
          <Route  path="/" component={Shoppage} />
        </Switch>
      </div>
  );
}

export default App;
