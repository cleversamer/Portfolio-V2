import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import getVisitorData from "./services/getVisitorData";
import sendEmail from "./services/sendEmail";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { visitorsRef } from "./firebase";
import styled from "styled-components";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";
import Events from "./pages/Events";

const App = () => {
  useEffect(() => {
    getVisitorData((res) => {
      const currentDate = new Date();

      addDoc(visitorsRef, {
        visitDate: currentDate.toDateString(),
        visitTime: currentDate.toTimeString(),
        visitorData: res.data,
        timestamp: serverTimestamp(),
      });

      sendEmail({
        lastVisit: `${currentDate.toDateString()} at ${currentDate.toTimeString()}`,
      });
    });
  }, []);

  return (
    <Container>
      <Routes>
        <Route path="/events" element={<Events />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
`;

export default App;
