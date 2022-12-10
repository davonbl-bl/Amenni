import './App.scss';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import NutritionFacts from './components/NutritionFacts/NutritionFacts';
import NutritionPage from './pages/NutritionPage/NutritionPage';
import RegisterForm from './components/RegisterForm/RegisterForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <RegisterForm/>
      <Routes>
        <Route
          path='/'  
          element= {<HomePage/>}
          />

        <Route 
            path='/:name'
            element={<NutritionPage/>}
        /> 

          {/* food/:tag_id */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
