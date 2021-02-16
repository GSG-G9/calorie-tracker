import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Home,
  Login,
  Signup,
  Logout,
  Nutrition,
  MyProfile,
  Calories,
  Food,
  Exercise,
} from '../Utils/constant';
import HomePage from './Home';
import LoginPage from './Login';
import SignupPage from './Signup';
import LogoutPage from './Logout';
import NutritionPage from './Nutrition';
import MyProfilePage from './Profile';
import CaloriesPage from './Calories';

import FoodPage from './Food';
import ExercisePage from './Exercise';
import NavBar from '../components/NavBar';

import { context } from '../components/userProvider';

function Pages() {
  const [isAuthenticated] = useContext(context);
  return (
    <>
      {isAuthenticated ? <NavBar /> : ''}
      <Switch>
        <Route
          exact
          path={Login}
          render={(props) =>
            isAuthenticated ? <HomePage {...props} /> : <LoginPage {...props} />
          }
        />
        <Route
          exact
          path={Signup}
          render={(props) =>
            isAuthenticated ? (
              <HomePage {...props} />
            ) : (
              <SignupPage {...props} />
            )
          }
        />
        <Route exact path={Home} component={HomePage} />
        <Route exact path={Logout} component={LogoutPage} />
        {isAuthenticated ? (
          <>
            <Route exact path={Nutrition} component={NutritionPage} />
            <Route exact path={MyProfile} component={MyProfilePage} />
            <Route exact path={Calories} component={CaloriesPage} />
            <Route exact path={Food} component={FoodPage} />
            {/* <Route exact path={FoodList} component={FoodList} />
            <Route exact path={FoodQuantity} component={FoodQuantity} /> */}
            <Route exact path={Exercise} component={ExercisePage} />
          </>
        ) : (
          ''
        )}
      </Switch>
    </>
  );
}

export default Pages;
