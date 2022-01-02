import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Notfound from "./components/Notfound";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Services from "./components/Services";
import Projects from "./components/Projects";
import AddNewService from "./components/AddNewService";
import EditService from "./components/EditService";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* <Alts/> */}

        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/about-us" component={About} />

          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/projects" component={Projects} />

          <Route exact path="/contact-us" component={Contact} />
          <Route exact path="/services/add-service" component={AddNewService} />
          <Route
            exact
            path="/services/edit-service/:id"
            component={EditService}
          />
          <Route exact path="/login" component={Login} />

          <Route component={Notfound} />
        </Switch>

        <br></br>

        <br></br>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
