import "./App.css";
import Header from "./Project-Movies/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectMovie from "./Project-Movies";
import Navbar from "./Project-Movies/Navbar";
import Popular from "./Project-Movies/Popular";
import Layout from "./Project-Movies/Layout";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="ProjectMovie" element={<ProjectMovie />} />
            <Route path="Header" element={<Header />} />
            <Route path="Navbar" element={<Navbar />} />
            <Route path="Popular" element={<Popular />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
