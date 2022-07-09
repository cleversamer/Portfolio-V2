/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as config from "./config";
import checkUser from "./services/checkUser";
import recordVisit from "./services/recordVisit";
import fetchData from "./services/fetchData";
import styled from "styled-components";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";
import Events from "./pages/Events";
import Intro from "./pages/Intro";
import BlockedUser from "./pages/BlockedUser";

const App = () => {
  const dispatch = useDispatch();
  const [userBlocked, setUserBlocked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [projectsFetched, setProjectsFetched] = useState(false);
  const [skillsFetched, setSkillsFetched] = useState(false);
  const [skillSetsFetched, setSkillSetsFetched] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, config.loadingDuration);

    let unsubscribe;

    checkUser(handleBlockUser, () => {
      unsubscribe = handleAllowUser();
    });

    return unsubscribe;
  }, []);

  const handleBlockUser = () => {
    setUserBlocked(true);
  };

  const handleAllowUser = () => {
    recordVisit();

    return fetchData(
      dispatch,
      setProjectsFetched,
      setSkillsFetched,
      setSkillSetsFetched
    );
  };

  const handleContinueWithError = () => {
    setProjectsFetched(true);
    setSkillsFetched(true);
    setSkillSetsFetched(true);
  };

  if (userBlocked) {
    return <BlockedUser />;
  }

  return (
    <Container>
      {loading && <Intro spinner={true} />}

      {projectsFetched && skillsFetched && skillSetsFetched ? (
        <Routes>
          <Route path="/events" element={<Events />} />
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
