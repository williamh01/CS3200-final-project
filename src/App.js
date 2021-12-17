import './App.css';
import Home from './components/Home';
import AddUsers from './components/AddUsers';
import { Switch, Route } from 'react-router-dom';
import EditUsers from './components/EditUsers';
import Restaurants from './components/Restaurants';
import AddRestaurants from './components/AddRestaurants';
import EditRestaurants from './components/EditRestaurants';
import ViewUser from './components/ViewUser';
import Reviews from './components/Reviews';
import AddReviews from './components/AddReviews';
import EditReviews from './components/EditReviews';
import ViewRestaurants from './components/ViewRestaurants';
import Cuisines from './components/Cuisines';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={AddUsers} />
        <Route exact path="/edit/:id" component={EditUsers} />
        <Route exact path="/view/:id" component={ViewUser} />
        
        <Route exact path="/restaurants" component={Restaurants} />
        <Route exact path="/addRestaurants" component={AddRestaurants} />
        <Route exact path="/editRestaurants/:id" component={EditRestaurants} />
        <Route exact path="/viewRestaurants/:id" component={ViewRestaurants} />

        <Route exact path="/reviews" component={Reviews} />
        <Route exact path="/addReviews" component={AddReviews} />
        <Route exact path="/editReviews/:id" component={EditReviews} />

        <Route exact path="/cuisines" component={Cuisines} />
      </Switch>
    </div>
  );
}

export default App;

/*
add reviews
edit reviews
view for one student
*/