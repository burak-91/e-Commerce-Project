import './App.css';
import {Switch, Route} from "react-router-dom"


import Header from "./Components/header/header.component"
import HomePage from "./Pages/Homepage/homepage.component"
import ShopPage from "./Pages/ShopPage/shoppage.component"
import SignInAndSignUp from "./Pages/SignIn-SignUp/signIn-signUp-page.component"




function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/signin" component={SignInAndSignUp}/>
     </Switch>
    </div>
  );
}

export default App;
