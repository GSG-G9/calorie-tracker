import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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
  FoodList,
  FoodQuantityPath,
} from '../Utils/constant';
import AllFoodList from './FoodList';
import HomePage from './Home';
import LoginPage from './Login';
import SignupPage from './Signup';
import LogoutPage from './Logout';
import NutritionPage from './Nutrition';
import MyProfilePage from './Profile';
import CaloriesPage from './Calories';
import FoodQuantity from './FoodQuantity';
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
        <Route exact path={Login} component={LoginPage} />
        <Route exact path={Signup} component={SignupPage} />
        <Route exact path={Home} component={HomePage} />
        <Route exact path={Logout} component={LogoutPage} />
        {isAuthenticated ? (
          <>
            <Route exact path={MyProfile} component={MyProfilePage} />
            <Route exact path={Food} component={FoodPage} />
            <Route exact path={FoodList} component={AllFoodList} />
            <Route exact path={FoodQuantityPath} component={FoodQuantity} />
            <Route exact path={Exercise} component={ExercisePage} />
            <Route exact path={Nutrition} component={NutritionPage} />
            <Route exact path={Calories} component={CaloriesPage} />
          </>
        ) : (
          ''
        )}
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default Pages;
