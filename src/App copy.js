import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";



import MainPage from './pages/MainPage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignupPage'
import NewItemPage from './pages/NewItemPage'

import './App.css';
import { auth, createUserProfileDocument } from './utils/firebase'

class App extends React.Component {

  constructor() {
    super();
    this.state = { currentUser: null, isLogged: false }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => console.log(this.state))
        })
      }
      this.setState({ currentUser: userAuth, isLogged: true })
    })

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    // if (this.state currentUser) {
    //   console.log('user', this.state.currentUser)
    // } else {
    //   console.log('not logged in')
    // }
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            {/* <Route exact path="/signin" element={<SignInPage />} /> */}
            <Route exact path="/signin">
              {this.state.currentUser ? <Navigate to="/" /> : <SignInPage />}
            </Route>
            <Route exact path="/signup" element={<SignUpPage />} />
            <Route path="/newitem" element={<NewItemPage />} />
          </Routes>
        </BrowserRouter >


      </div >
    );
  }
}
export default App;
