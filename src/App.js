import React, { Component } from "react";
import './App.css'
import {Switch, Route, Redirect} from "react-router-dom"
import {auth,createUserProfileDocument} from "./Firebase/firebase.utils"
import {connect} from 'react-redux';


import Header from "./Components/header/header.component"
import HomePage from "./Pages/Homepage/homepage.component"
import ShopPage from "./Pages/ShopPage/shoppage.component"
import SignInAndSignUp from "./Pages/SignIn-SignUp/signIn-signUp-page.component"

import setCurrentUser from "./redux/user/user.action";




class App extends Component{
    unsubscribeFromAuth = null

    componentDidMount(){
      const {setCurrentUser} = this.props;
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
          
          if(userAuth){
            const userRef = await createUserProfileDocument(userAuth)

            userRef.onSnapshot(snapShot =>{
              setCurrentUser({
                id:snapShot.id,
                  ...snapShot.data()
              })
              console.log(this.state)
            })
            
          }
          setCurrentUser(userAuth);
          
        })
    }

    componentWillUnmount(){
      this.unsubscribeFromAuth();
    }

  render(){
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route exact path="/signin" render={()=> this.props.currentUser ? (<Redirect to="/"/>) :(<SignInAndSignUp/>) }/>
       </Switch>
      </div>
    )
  }
  
}

const mapStateToProps = ({user}) =>({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user =>dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
