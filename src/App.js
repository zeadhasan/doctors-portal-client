import './App.css';
import Navbar from "./Pages/Shared/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import { Routes, Route } from "react-router-dom";
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import DashboardReview from './Pages/Dashboard/DashboardReview';
import History from './Pages/Dashboard/History';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/requierAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctor from './Pages/Dashboard/ManageDoctor';
import Payment from './Pages/Dashboard/Payment';

function App() {
  return (
    <div className='max-w-7xl	mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={<RequireAuth> <Appointment /> </RequireAuth>} />

        <Route path="dashboard" element={<RequireAuth> <Dashboard /> </RequireAuth>}>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path="dashboard-review" element={<DashboardReview></DashboardReview>}></Route>
          <Route path="history" element={<History></History>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="addDoctor" element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
          <Route path="manageDoctor" element={<RequireAdmin><ManageDoctor></ManageDoctor></RequireAdmin>}></Route>
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
