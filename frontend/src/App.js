import React from "react";
import { BrowserRouter, Routes, Route, useLocation, Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import NGOHome from "./pages/NGOHome";
import DonorHome from "./pages/DonorHome";
import CreateBundle from "./pages/CreateBundle";
import BundleDetails from "./pages/BundleDetails";

const GlobalStyle = createGlobalStyle`
  :root{
    --bg: #f7f8fb;
    --card: #fff;
    --accent: #0b5cff;
    --muted: #6b7280;
  }
  *,*::before,*::after{box-sizing:border-box}
  html,body,#root{height:100%}
  body{
    margin:0;
    font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    background:var(--bg);
    color:#0f172a;
    -webkit-font-smoothing:antialiased;
  }
`;

const AppContainer = styled.div`
  max-width:1100px;
  margin:28px auto;
  padding:0 16px;
`;

const Header = styled.header`
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:12px;
  padding:12px 0;
`;
const Btn = styled.button`
  background:var(--accent);
  color:#fff;
  padding:8px 12px;
  border-radius:8px;
  border:none;
  cursor:pointer;
  &:hover{opacity:0.95}
`;

function HeaderBar() {
  const location = useLocation();
  return (
    <Header>
      <h1>Bundle Share</h1>
      <div>
        {location.pathname !== "/login" && (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Btn>Login</Btn>
          </Link>
        )}
      </div>
    </Header>
  );
}

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <AppContainer>
          <HeaderBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/ngo" element={<NGOHome />} />
            <Route path="/donor" element={<DonorHome />} />
            <Route path="/create-bundle" element={<CreateBundle />} />
            <Route path="/bundle/:id" element={<BundleDetails />} />
          </Routes>
        </AppContainer>
      </BrowserRouter>
    </>
  );
}
