import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Decoration from './components/Decoration';
import './styles/app.scss';

const Home = React.lazy(() => import('./pages/Home'));

const App = () => (
    <div className="app">
        <Decoration/>
        <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/*' element={ <Navigate to='/Home'/> }/>
        </Routes>
    </div>
);

export default App;
