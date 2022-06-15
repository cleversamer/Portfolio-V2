import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { updateDoc, getDoc } from "firebase/firestore";
import { usersInfoDocRef } from "./firebase";
import styled from "styled-components";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";

const App = () => {
  useEffect(() => {
    getDoc(usersInfoDocRef)
      .then((result) => {
        const doc = result._document.data.value.mapValue.fields;
        const newVisitors = parseInt(doc.visitors.integerValue) + 1;

        updateDoc(usersInfoDocRef, {
          visitors: newVisitors,
          lastVisit: `${new Date().toDateString()} at ${new Date().toTimeString()}`,
        })
          .then(() => {})
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Routes>
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
