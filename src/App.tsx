import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import ScrollToTop from './Utils/scroll-top/ScrollToTop';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import { Portfolio } from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';


export default function App() {
    useScrollToTop();
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

function useScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
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
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio standalone={true} />} />
                <Route path="/contact" element={<Contact />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </div>
    );
}