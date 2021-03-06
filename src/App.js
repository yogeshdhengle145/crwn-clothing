import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'


const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

class  App  extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
      else {
        this.setState({currentUser: userAuth});
      }
    })
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route  path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
    
}

export default App;
