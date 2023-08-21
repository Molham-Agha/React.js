import Footer from "../compontents/Footer";
import Header from "../compontents/Header";
import photo from "../photos/y.jpg"
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About page</title>
      </Helmet>
      <Header />
      <div className="im about-container">
          <img className="img" src={photo} alt="" />
          <p>A day without laughter is a wasted day !
            <hr></hr>
          <span>Charlie Chaplin</span>
          </p>
        </div>
        <div className="our-skills" id="our-skills">
          <h2 className="main-title">Our Skills</h2>
          <div className="container">
            <div className="skills">
              <div className="skill">
                <h3>HTML <span>85%</span>
                </h3>
                <div className="the-progress">
                  <span style={{width: '85%'}} />
                </div>
              </div>
              <div className="skill">
                <h3>CSS <span>70%</span>
                </h3>
                <div className="the-progress">
                  <span style={{width: '70%'}} />
                </div>
              </div>
              <div className="skill">
                <h3>JavaScript <span>50%</span>
                </h3>
                <div className="the-progress">
                  <span style={{width: '50%'}} />
                </div>
              </div>
              <div className="skill">
                <h3>pug.js <span>85%</span>
                </h3>
                <div className="the-progress">
                  <span style={{width: '85%'}} />
                </div>
              </div>
              <div className="skill">
                <h3>gulp.js <span>70%</span>
                </h3>
                <div className="the-progress">
                  <span style={{width: '70%'}} />
                </div>
              </div>
              <div className="skill">
                <h3>typeScript <span>50%</span>
                </h3>
                <div className="the-progress">
                  <span style={{width: '50%'}} />
                </div>
              </div>
              <div className="skill">
                <h3>React.js <span>60%</span>
                </h3>
                <div className="the-progress">
                  <span style={{width: '60%'}} />
                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </>
  );
};

export default About;
