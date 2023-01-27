import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import ScrollToTop from './components/scroll-top/ScrollToTop';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Homepage from './homepage/Homepage';
import Aboutpage from './pages/About/About';
import Contactpage from './pages/Contact/Contact';


export default function App() {
    return (
        <>
            <section className="App">
                <ScrollToTop />
                <Header />
                <main className="flex-shrink-0">
                    <Content />
                </main>
                <Footer />
            </section>
        </>
    )
}


function Content() {
    const location = useLocation();

    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransistionStage] = useState("fadeIn");

    useEffect(() => {
        if (location !== displayLocation) setTransistionStage("fadeOut");
    }, [location, displayLocation]);

    return (
        <div
            className={transitionStage}
            onAnimationEnd={() => {
                if (transitionStage === "fadeOut") {
                    setTransistionStage("fadeIn");
                    setDisplayLocation(location);
                }
            }}
        >
            <Routes location={displayLocation}>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<Aboutpage />} />
                <Route path="/contact" element={<Contactpage />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </div>
    );
}