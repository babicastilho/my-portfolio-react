import React, { Component } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from './components/scroll-top/ScrollToTop';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Homepage from './homepage/Homepage';
import Aboutpage from './pages/About/About';
import Contactpage from './pages/Contact/Contact';

export default class App extends Component {
    render() {
        return (
            <>
                <section className="App">
                    <ScrollToTop />
                    <Header />

                    <main className="flex-shrink-0">
                        <Routes>
                            <Route path="/" element={<Homepage />} />
                            <Route path="/about" element={<Aboutpage />} />
                            <Route path="/contact" element={<Contactpage />} />
                            <Route path='*' element={<Navigate to='/' />} />
                        </Routes>
                    </main>
                    <Footer />
                </section>
            </>
        )
    }
}