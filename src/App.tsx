import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Decoration from './components/Decoration';
import Loading from './components/Loading';

import './styles/app.scss';
import './styles/section.scss';

const Home = React.lazy(() => import('./pages/Home'));
const Works = React.lazy(() => import('./pages/Works'));
const Notes = React.lazy(() => import('./pages/Notes'));

const App = () => (
    <div className="app">
        <Decoration/>
        <Routes>
            <Route path='/Home' element={
                <React.Suspense fallback={ <Loading/> }>
                    <Home/>
                </React.Suspense>
            }/>
            <Route path='/Works' element={
                <React.Suspense fallback={ <Loading/> }>
                    <Works/>
                </React.Suspense>
            }/>
            <Route path='/Notes' element={
                <React.Suspense fallback={ <Loading/> }>
                    <Notes/>
                </React.Suspense>
            }/>
            <Route path='/*' element={ <Navigate to='/Home'/> }/>
        </Routes>
    </div>
);

export default App;
