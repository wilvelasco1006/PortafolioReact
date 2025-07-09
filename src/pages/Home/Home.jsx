import './Home.css';
import Button from '../../components/Button';
import TechCarousel from '../../components/TechCarousel';
import SocialCanvas from '../../components/SocialCanvas/SocialCanvas';
import perfilImg from '../../assets/my-avatar-wil.jpg';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

const Home = () => {
  const navigate = useNavigate();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToResume = () => {
    navigate('/resume');
  };

  const goToProjects = () => {
    navigate('/projects');
  };

  return (
    <div className="home-container">
      {/* === SECCIÓN HERO === */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="greeting">¡Hola! Soy</p>
          <h1 className="name">Wilmer Velasco</h1>
          <h2 className="role">Desarrollador de Software</h2>
          <p className="tech-stack">Back-end · Front-end · Bases de Datos</p>
          <p className="description">
            Tecnólogo en Desarrollo de Software, en proceso de formación. Con
            conocimientos en Java, Python, Django, React, PostgreSQL, Git.
            Comprometido con el aprendizaje continuo y la aplicación de buenas
            prácticas, busco constantemente expandir mis conocimientos y
            contribuir a proyectos innovadores que generen un impacto positivo.
          </p>

          <div className="hero-buttons" data-aos="fade-right">
            <Button
              text="Conoce Más!"
              className="btn--green"
              onClick={scrollToAbout}
            />
            <Button
              text="Ver Resume"
              className="btn--blue"
              onClick={goToResume}
            />
          </div>
        </div>

        <div className="hero-image">
          <img src={perfilImg} alt="Wilmer Velasco" className="profile-image" />
        </div>
      </section>

      {/* === SECCIÓN ABOUT === */}
      <section id="about" className="about-section">
        <div className="about-content">
          {/* COLUMNA IZQUIERDA - Texto */}
          <div className="about-text">
            <h2 className="section-title" data-aos="fade-up">
              Acerca de Mí
            </h2>
            <p className="about-description" data-aos="fade-right">
              Soy Tecnólogo en Desarrollo de Software en formación, con una
              sólida base en programación orientada a objetos y experiencia
              práctica en el desarrollo de aplicaciones web. He trabajado con
              tecnologías como Python, Java, Django, React, PostgreSQL y
              herramientas de control de versiones como Git y GitHub. Me
              caracterizo por ser autodidacta, responsable y comprometido con la
              calidad del trabajo. Disfruto enfrentar nuevos retos técnicos y
              siempre busco mejorar mis habilidades a través del aprendizaje
              continuo y la investigación. He desarrollado proyectos reales de
              manera individual y en equipo, aplicando buenas prácticas de
              desarrollo y enfocándome en soluciones funcionales y escalables.
              Mi objetivo es seguir creciendo como desarrollador full-stack, con
              especial interés en el desarrollo backend, y contribuir a
              proyectos que generen un impacto positivo.
            </p>
            <p className="about-commitment" data-aos="fade-left">
              Comprometido con el aprendizaje constante, la mejora continua y la
              entrega de soluciones tecnológicas de valor.
            </p>
            <div className="about-tech">
              <TechCarousel />
            </div>

            <div className="about-buttons">
              <Button
                text="Ver Proyectos"
                className="btn--blue"
                onClick={goToProjects}
              />
            </div>
          </div>

          {/* COLUMNA DERECHA - Canvas 3D */}
          <div className="about-social" data-aos="fade-left">
            <SocialCanvas />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
