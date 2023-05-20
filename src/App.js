
import css from  './App.module.css';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import { Route,Switch } from 'react-router-dom';
import './api/axiosDefaults'
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import PostCreateForm from './pages/posts/PostCreateForm';
import PostPage from './pages/posts/PostPage';

function App() {

  return (
    <div className={css.App}>
      <NavBar/>
      <Container className={css.Main}>
        <Switch>
          <Route exact path='/' render={()=> <h2>Home Page</h2>} />
          <Route exact path='/login' render={()=> <SignInForm />} />
          <Route exact path='/register' render={()=> <SignUpForm />} />
          <Route exact path='/posts/create' render={()=> <PostCreateForm />} />
          <Route exact path='/posts/:id' render={()=> <PostPage />} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;