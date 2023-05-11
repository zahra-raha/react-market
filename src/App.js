
import css from  './App.module.css';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import { Route,Switch } from 'react-router-dom';
import './api/axiosDefaults'
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import { createContext, useEffect, useState } from 'react';
import axios from "axios";

export const CurrentUserContext = createContext()
export const SetCurrentUserContext = createContext()

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  const handleMount = async () => {
    try{
      const {data} = await axios.get("/dj-rest-auth/user/ ");
      setCurrentUser(data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    handleMount()
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        <div className={css.App}>
          <NavBar/>
          <Container className={css.Main}>
            <Switch>
              <Route exact path='/' render={()=> <h2>Home Page</h2>} />
              <Route exact path='/login' render={()=> <SignInForm />} />
              <Route exact path='/register' render={()=> <SignUpForm />} />
            </Switch>
          </Container>
        </div>
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;