import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import AddEditProjectPage from "./pages/AddEditProjectPage";
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        
        {/* Protected Admin Routes */}
        <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        {/* --- 2. ADD THE NEW ROUTES HERE --- */}
        <Route path="/admin/new" element={<ProtectedRoute><AddEditProjectPage /></ProtectedRoute>} />
        <Route path="/admin/edit/:id" element={<ProtectedRoute><AddEditProjectPage /></ProtectedRoute>} />
         <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;