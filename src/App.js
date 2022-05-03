import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";



import MainPage from './pages/MainPage'
import HomePage from './pages/HomePage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignupPage'
import NewItemPage from './pages/NewItemPage'
import EmployeePage from './pages/Employee'
import EmployeesPage from './pages/Employees'
import PricingPage from './pages/PricingPage'
import TestPage from './pages/TestPage'
import PageNotFound from './pages/PageNotFound';
import InstructionPage from './pages/InstrictionPage';

import './App.css';
import { auth, createUserProfileDocument, checkData } from './utils/firebase'

export const DataContext = React.createContext('null')

class App extends React.Component {

  constructor() {
    super();
    this.state = { currentUser: null, isLogged: false, language: 'En', count: 0 }
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
          }, () => {
            console.log('user id', this.state.currentUser.id)
            const readData = async () => {
              const data = await checkData(this.state.currentUser.id)
              console.log('teaddata is ', data)
              this.setState({ count: data.employees.length })
            }
            readData()
          })
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
        <DataContext.Provider value={this.state.count} >
          <BrowserRouter>
            <Routes>
              <Route exact path="/hrsaas" element={<HomePage />} />
              {/* <Route path="/mainpage" element={!this.state.currentUser ? (<Navigate to="/signin" />) : (<MainPage />)} /> */}
              <Route path="/mainpage" element={this.state.currentUser ? (<MainPage />) : (<Navigate to="/signin" />)} />
              <Route path="/signin" element={this.state.currentUser ? (<Navigate to="/mainpage" />) : (<SignInPage />)} />
              {/* <Route path="/signin" element={<SignInPage />} /> */}
              {/* testing */}
              <Route path="/instruction" element={<InstructionPage language={this.state.language} />} />
              <Route path="/signup" element={this.state.currentUser ? (<Navigate to="/mainpage" />) : (<SignUpPage />)} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/test" element={<TestPage count={this.state.count} />} />
              <Route path="/newitem" element={<NewItemPage currentUser={this.state.currentUser} />} />
              <Route path="/employees" element={!this.state.currentUser ? (<Navigate to="/signin" />) : (<EmployeesPage currentUser={this.state.currentUser} testValue="test value" />)} />
              <Route path="/employee" element={!this.state.currentUser ? (<Navigate to="/signin" />) : (<EmployeePage currentUser={this.state.currentUser} testValue="test value" />)} />
              {/* <Route path="/employee:id" element={!this.state.currentUser ? (<Navigate to="/signin" />) : (<EmployeePage currentUser={this.state.currentUser} testValue="test value" />)} /> */}
              {/* <Route path="/employee" element={<EmployeePage currentUser={this.state.currentUser} testValue="test value" />} /> */}
              {/* <Route path="/employee" element={<EmployeePage currentUser={this.state.currentUser} testValue="test value" />} /> */}
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter >
        </DataContext.Provider>
      </div >
    );
  }
}
export default App;
