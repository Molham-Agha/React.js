import photo from "../photos/y.jpg"
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About page</title>
      </Helmet>
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
                <h3>HTML <span>90%</span>
                </h3>
                <div className="the-progress">
                  <span style={{width: '90%'}} />
                </div>
              </div>
              <div className="skill">
                <h3>CSS & SCSS & Tailwind <span>75%</span>
                </h3>
                <div className="the-progress">
                  <span style={{width: '75%'}} />
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
                <h3>React.js <span>70%</span>
                </h3>
                <div className="the-progress">
                  <span style={{width: '70%'}} />
                </div>
              </div>
              <div className="skill">
                <h3>Bootstrap & B. React.js <span>75%</span>
                </h3>
                <div className="the-progress">
                  <span style={{width: '75%'}} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="About-p">
          <p>These are some languages that I have some knowledge of <span>Next.js</span> and <span>Vue.js</span> and <span>PHP</span> </p>
        </div>
    </>
  );
};

export default About;
