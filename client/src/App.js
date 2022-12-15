import './App.scss';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SearchPage from './pages/SearchPage/SearchPage';
import NutritionFacts from './components/NutritionFacts/NutritionFacts';
import NutritionPage from './pages/NutritionPage/NutritionPage';
import Comments from './components/Comments/Comments';
import CreateComment from './pages/CreateComment/CreateComment';
import CommentPost from './pages/CommentPost/CommentPost';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import { AuthContext } from '../src/pages/AuthContext/AuthContext';
import { useState } from 'react';

function App() {
  const [officalState, setOfficalState] = useState(false)


  return (
    <div className="App">
      <AuthContext.Provider value={{ officalState, setOfficalState }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path='/'
              element={<HomePage />}
            />

            <Route
              path='/search'
              element={<SearchPage />}
            />

            <Route
              path='/:name'
              element={<NutritionPage />}
            />

            <Route
              path='/createcomment'
              element={<CreateComment />}
            />

            <Route
              path='/createcomment'
              element={<Comments />}
            />

            <Route
              path='/commentpost/:id'
              element={<CommentPost />}
            />
            {
              !officalState && (
                <>
                  <Route
                    path='/login'
                    element={<Login />}
                  />

                  <Route
                    path='/register'
                    element={<Register />}
                  />
                </>
              )
            }
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
