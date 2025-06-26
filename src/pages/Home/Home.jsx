import './Home.css';
import Button from '../../components/Button';
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
                    <h1 className="name">Wilmer Velasco</h1>
                    <h2 className="role">Desarrollador de Software</h2>
                    <p className="tech-stack">Back-end · Front-end · Bases de Datos</p>
                    <p className="description">
                        Apasionado por la programación y el desarrollo de soluciones web. Me
                        especializo en crear aplicaciones funcionales con una buena
                        experiencia de usuario.
                    </p>

                    <div className="hero-buttons">
                        <Button text="Conoce Más!" className="btn--green" onClick={scrollToAbout} />
                        <Button text="Ver Resume" className="btn--blue" onClick={goToResume} />
                    </div>
                </div>
            </section>

            {/* === SECCIÓN ABOUT === */}
            <section id="about" className="about-section">
                <div className="about-content">
                    <div className="about-image">
                        <img
                            src={perfilImg}
                            alt="Foto de perfil"
                            className="about-profile-image"
                        />
                    </div>

                    <div className="about-text">
                        <h2 className="section-title">Acerca de Mí</h2>
                        <p className="about-description">
                            Soy Tecnólogo en Desarrollo de Software, actualmente en proceso de
                            formación, con conocimientos sólidos en Desarrollo Back-end,
                            Front-end y Administración de Bases de Datos. Tengo experiencia
                            aplicando conceptos como la programación orientada a objetos,
                            diseño MVC, maquetación web, uso de frameworks, modelado de datos
                            y control de versiones.
                        </p>
                        <p className="about-commitment">
                            Comprometido con el aprendizaje constante, la mejora continua y la
                            entrega de soluciones tecnológicas de valor.
                        </p>

                        <div className="about-buttons">
                            <Button
                                text="Ver Proyectos"
                                className="btn--green"
                                onClick={goToProjects}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
