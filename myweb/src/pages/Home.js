import Header from "../compontents/Header";
import Footer from "../compontents/Footer";
import photo from "../photos/p.jpg"
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <Header />
      <div className="landing">
        <div className="container">
          <div className="text">
            <h5>Hello <span> I'am</span></h5>
            <h1>Molham agha</h1>
            <p>Website interface developer, interactive, responsive, easy to use, modern dynamic
            </p>
          </div>
          <div className="image">
            <img decoding="async" src={photo} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
