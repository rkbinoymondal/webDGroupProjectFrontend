import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home       from './pages/Home';
import Recipes    from './pages/Recipes';
import Login      from './pages/Login';
import AddRecipe  from './pages/AddRecipe';
import Favorites  from './pages/Favorites';
import Profile    from './pages/Profile';
import About      from './pages/About';
import HowToGuides from './pages/HowToGuides';
import IngredientSubstitutions from './pages/IngredientSubstitutions';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/"           element={<Login />} />
        <Route path="/home"       element={<Home />} />
        <Route path="/recipes"    element={<Recipes />} />
        <Route path="/favorites"  element={<Favorites />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/profile"    element={<Profile />} />
        <Route path="/about"      element={<About />} />
        <Route path="/how-to-guides" element={<HowToGuides />} />
        <Route path="/substitutions" element={<IngredientSubstitutions />} />
      </Routes>
    </BrowserRouter>
  );
}
