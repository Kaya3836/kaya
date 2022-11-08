import styles from "../styles/components/Tabbar.module.css";
import team from "../assets/team.png";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "./Home";

const Product = () => {
  return <div>1</div>;
};
const Services = () => {
  return <div>2</div>;
};
const Contact = () => {
  return <div>3</div>;
};
const LogIn = () => {
  return <div>4</div>;
};
const GetAccess = () => {
  return <div>5</div>;
};

export const Tabbar = (props) => {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Link to="/">
          <img src={team} className={styles.logo} />
        </Link>
        <div className={styles.bar}>
            <Link to="/Product">
            <p>Product</p>
            </Link>
            <Link to="/Services">
            <p>Services</p>
            </Link>
            <Link to="/Contact">
            <p>Contact</p>
            </Link>
            <Link to="/Login">
            <p>Login</p>
            </Link>
            <Link to="/GetAccess">
            <p>Get Access</p>
            </Link>
        </div>
        <Routes>
          <Route path="/Product" element={<Product />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/GetAccess" element={<GetAccess />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
