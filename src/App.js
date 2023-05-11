
import css from  './App.module.css';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import { Route,Switch } from 'react-router-dom';
import './api/axiosDefaults'
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';

function App() {

  return (
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
  );
}

export default App;