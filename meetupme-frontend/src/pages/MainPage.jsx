// src/pages/MainPage.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection"
import MeetupPreview from "../components/MeetupPreview";
import Footer from "../components/Footer";
import SignupForm from "../components/SignupForm";

function MainPage() {
    return(
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={
                    <>
                        <HeroSection />
                        <MeetupPreview />
                        <Footer />
                    </>
                } />
                <Route path="/signup" element={<SignupForm />} /> {/* 회원가입 라우팅 추가 */}
            </Routes>
        </Router>
    );
}

export default MainPage;