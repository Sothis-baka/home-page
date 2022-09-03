import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import Decoration from './components/Decoration';
import Loading from './components/Loading';

import './styles/app.scss';
import './styles/section.scss';

const Home = React.lazy(() => import('./pages/Home'));
const Work = React.lazy(() => import('./pages/Work'));
const Note = React.lazy(() => import('./pages/Note'));
const NoteDetail = React.lazy(() => import('./pages/NoteDetail'));

const App = () => {
    const location = useLocation();

    // Scroll back to top when router changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])

    return (
        <div className="app">
            <Decoration/>
            <Routes>
                <Route path='/Home' element={
                    <React.Suspense fallback={ <Loading/> }>
                        <Home/>
                    </React.Suspense>
                }/>
                <Route path='/Work' element={
                    <React.Suspense fallback={ <Loading/> }>
                        <Work/>
                    </React.Suspense>
                }/>
                <Route path='/Note' element={
                    <React.Suspense fallback={ <Loading/> }>
                        <Note/>
                    </React.Suspense>
                }/>
                <Route path='/Note/:filename' element={
                    <React.Suspense fallback={ <Loading/> }>
                        <NoteDetail/>
                    </React.Suspense>
                }/>
                <Route path='/*' element={ <Navigate to='/Home'/> }/>
            </Routes>
        </div>
    );
}


export default App;
