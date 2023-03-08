import './App.scss';
// react router dom
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// pages
import { Home, MealDetails, Error, Category } from "./pages/index";
// components
import Header from "./components/Header/Header";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path = "/food-recipe-app" element = {<Home />} />
        <Route path = "/meal/:id" element = {<MealDetails />} />
        <Route path = "/meal/category/:name" element = {<Category />} />
        <Route path  = "*" element = {<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
