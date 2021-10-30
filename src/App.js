import './App.css';
import Home from './Pages/Home/Home/Home'
import NotFound from './Pages/NotFound/NotFound'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ServiceDetails from './Pages/Booking/ServiceDetails/ServiceDetails';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import Doctor from './Pages/Doctor/Doctor';
import Services from './Pages/Home/Services/Services';
import Footer from './Pages/Footer/Footer';
import AboutUs from './Pages/AboutUs/AboutUs';
import Offers from './Pages/Home/Offers/Offers';
import AddNewOffer from './Pages/AddNewOffer/AddNewOffer';
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard';
import OfferDetails from './Pages/Booking/OfferDetails/OfferDetails';
import BookNow from './Pages/BookNow/BookNow';
import MyBooking from './Pages/MyBooking/MyBooking';
import UpdateMyBooking from './Pages/UpdateMyBooking/UpdateMyBooking';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/Offers">
              <Offers></Offers>
            </Route>
            <Route path="/addNewOffer">
              <AddNewOffer></AddNewOffer>
            </Route>
            <Route path="/adminDashboard">
              <AdminDashboard></AdminDashboard>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            {/* <PrivateRoute exact path="/doctor">
              <Doctor></Doctor>
            </PrivateRoute> */}

            {/* <PrivateRoute exact path="/doctor/:details">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute> */}
            <PrivateRoute exact path="/bookNow">
              <BookNow></BookNow>
            </PrivateRoute>
            <Route exact path="/myBooking">
              <MyBooking></MyBooking>
            </Route>
            <Route path="/myBooking/update/:id">
              <UpdateMyBooking></UpdateMyBooking>
            </Route>
            <PrivateRoute exact path="/offer/:id">
              <OfferDetails></OfferDetails>
            </PrivateRoute>

            <PrivateRoute exact path="/about-us">
              <AboutUs></AboutUs>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>

        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
