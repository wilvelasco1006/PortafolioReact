import './Home.css';
import Button from '../../components/Button';
import TechCarousel from '../../components/TechCarousel';
import SocialCanvas from '../../components/SocialCanvas/SocialCanvas';
import perfilImg from '../../assets/my-avatar-wil.jpg';
import { useNavigate } from 'react-router-dom';

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

          <div className="hero-buttons">
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
            <h2 className="section-title">Acerca de Mí</h2>
            <p className="about-description">
              Soy Tecnólogo en Desarrollo de Software, actualmente en proceso de
              formación, con conocimientos sólidos en Desarrollo Back-end,
              Front-end y Bases de Datos. Tengo experiencia aplicando conceptos
              como la programación orientada a objetos, diseño MVC, maquetación
              web, uso de frameworks, modelado de datos y control de versiones.
            </p>
            <p className="about-commitment">
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
          <div className="about-social">
            <SocialCanvas />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
