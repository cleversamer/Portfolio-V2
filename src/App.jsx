/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as config from "./config";
import fetchData from "./services/fetchData";
import styled from "styled-components";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";
import Activities from "./pages/Activities";
import Intro from "./pages/Intro";

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [projectsFetched, setProjectsFetched] = useState(false);
  const [skillsFetched, setSkillsFetched] = useState(false);
  const [skillSetsFetched, setSkillSetsFetched] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      clearTimeout();
    }, config.loadingDuration);

    fetchData(
      dispatch,
      setProjectsFetched,
      setSkillsFetched,
      setSkillSetsFetched
    );
  }, []);

  const handleContinueWithError = () => {
    setProjectsFetched(true);
    setSkillsFetched(true);
    setSkillSetsFetched(true);
  };

  return (
    <Container>
      {loading && <Intro spinner={true} />}

      {!loading && projectsFetched && skillsFetched && skillSetsFetched ? (
        <Routes>
          <Route path="/activity" element={<Activities />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
      ) : (
        <Intro
          onContinue={handleContinueWithError}
          error={config.fetchErrorMssg}
          spinner={false}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
`;

export default App;
