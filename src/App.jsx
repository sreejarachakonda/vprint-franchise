import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import useScrollTo from "./hooks/useScrollTo";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

/* 🔹 Scroll to top on route change */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

const App = () => {
  const scrollTo = useScrollTo();

  return (
    <BrowserRouter>
      <ScrollToTop />

      {/* 🔹 Global Layout Wrapper */}
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 text-slate-900">

        {/* 🔹 Navbar */}
        <Navbar onNavigate={scrollTo} />

        {/* 🔹 Main Content */}
        <main className="overflow-hidden">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onGetFranchise={() => scrollTo("franchise")}
                />
              }
            />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Routes>
        </main>

        {/* 🔹 Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;