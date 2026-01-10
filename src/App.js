import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import AddFunds from "./pages/AddFunds";
import SendMoney from "./pages/SendMoney";
function App() {
  return (
    <AuthProvider>
    <Routes>
      <Route path="/" element={<Home />} />
       {/* Protected routes with layout - JUST WRAP EACH WITH ProtectedRoute */}
                <Route 
                  path="/home" 
                  element={
               
                      <Dashboard />
                    
                  } 
                /> 
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="add-funds" element = {<AddFunds/>}/>
            
                <Route 
                  path="/send-money" 
                  element={
                
                    
                        
                      
                        <SendMoney />
                    
                    
                  } 
                /> 
    </Routes>
    </AuthProvider>
  );
}

export default App;
