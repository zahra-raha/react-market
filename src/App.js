
import css from  './App.module.css';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import { Route,Switch } from 'react-router-dom';

function App() {
  return (
    <div className={css.App}>
      <NavBar/>
      <Container className={css.Main}>
        <Switch>
          <Route exact path='/' render={()=> <h2>Home Page</h2>} />
          <Route exact path='/login' render={()=> <h2>log in</h2>} />
          <Route exact path='/register' render={()=> <h2>Register</h2>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;