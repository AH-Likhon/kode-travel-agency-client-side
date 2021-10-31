import './App.css';
import Home from './Pages/Home/Home/Home'
import NotFound from './Pages/NotFound/NotFound'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import Footer from './Pages/Footer/Footer';
import AboutUs from './Pages/AboutUs/AboutUs';
import Offers from './Pages/Home/Offers/Offers';
import AddNewOffer from './Pages/AddNewOffer/AddNewOffer';
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard';
import OfferDetails from './Pages/Booking/OfferDetails/OfferDetails';
import BookNow from './Pages/BookNow/BookNow';
import MyBooking from './Pages/MyBooking/MyBooking';
import UpdateMyBooking from './Pages/UpdateMyBooking/UpdateMyBooking';
import AllOffers from './Pages/AllOffers/AllOffers';



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

            <Route exact path="/Offers">
              <Offers></Offers>
            </Route>
            <Route exact path="/Offers/:id">
              <AllOffers></AllOffers>
            </Route>

            <PrivateRoute path="/addNewOffer">
              <AddNewOffer></AddNewOffer>
            </PrivateRoute>

            <PrivateRoute path="/adminDashboard">
              <AdminDashboard></AdminDashboard>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute exact path="/bookNow/:id">
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

            <Route exact path="/about-us">
              <AboutUs></AboutUs>
            </Route>

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
