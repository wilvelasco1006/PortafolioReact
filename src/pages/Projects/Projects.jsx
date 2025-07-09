import React from 'react';
import './Projects.css';
import CardProject from '../../components/CardProject';

const Projects = () => {
    // Array de proyectos
    const projects = [
        {
            id: 1,
            title: 'Eye Care',
            image: 'src/assets/proyects/project-eyecare.png',
            description:
                'EyeCare es un sitio web 3D sobre enfermedades oculares con visualizaciones 3D interactivas. Desarrollada con React, Three.js y un backend en Express.',
            githubUrl: 'https://github.com/wilvelasco1006/EyeCare',
            demoUrl: 'https://eye-care-pi-5.vercel.app/',
        },
        {
            id: 2,
            title: 'SCSM - Sistema de Registro',
            image: 'src/assets/proyects/project-scsm.png',
            description:
                'Salvajina Cafe Software Manager(SCSM) es un aplicativo web para el registro detallado de procesos productivos de una empresa productora de café. Desarrollada en Django, PostgreSQL y Bootstrap.',
            githubUrl: 'https://github.com/wilvelasco1006/Proyecto_SCSM',
        },
        {
            id: 3,
            title: 'Beatrix-Statistics',
            image: 'src/assets/proyects/project-beatrix.png',
            description:
                'Beatrix Statistics es un paquete estadístico en Python para procesar y visualizar datos meteorológicos a partir de archivos CSV. Incluye una interfaz gráfica para visualización de datos y gráficos estadísticos.',
            githubUrl: 'https://github.com/wilvelasco1006/BeatrixV2.0',
        },
        {
            id: 4,
            title: 'Aretes Cordelia',
            image: 'src/assets/proyects/project-cordelia.png',
            description:
                'Aretes Cordelia es una página web básica para la venta de aretes de estilos variados. Se emplea HTML, CSS y Javascript.',
            githubUrl: 'https://github.com/wilvelasco1006/page-web-cordelia.git',
            demoUrl: 'https://page-web-cordelia.onrender.com/',
        },
        {
            id: 5,
            title: 'Proyecto Salud',
            image: 'src/assets/proyects/project-salud.png',
            description:
                'El Proyecto Salud es una base de datos relacional diseñada en PostgreSQL para gestionar información sobre pacientes y procesos médicos.',
            githubUrl: 'https://github.com/wilvelasco1006/Proyecto-salud',
        },
        {
            id: 6,
            title: 'Alinventario',
            image: 'src/assets/proyects/project-alinventario.png',
            description:
                'Alinventario es un programa básico en consola desarrollada en C++ para gestionar inventarios, registrar compras y ventas, y llevar un historial detallado de los movimientos de productos.',
            githubUrl: 'https://github.com/wilvelasco1006/Alinventario.git',
        },
        {
            id: 7,
            title: 'EL Rincon de la empanada',
            image: 'src/assets/proyects/project-empanada.png',
            description:
                'Este proyecto es una aplicación de escritorio desarrollada en Python con tkinter para gestionar pedidos de un restaurante ficticio llamado "El Rincón de la Empanada".',
            githubUrl:
                'https://github.com/wilvelasco1006/El-rincon-de-la-empanada.git',
        },
        {
            id: 8,
            title: 'Gastos Familiares',
            image: 'src/assets/proyects/project-gastos.png',
            description:
                'Este proyecto es un programa desarrollado en Python con una interfaz de tkinter para gestionar los gastos familiares de un problema específico, implementando matrices.',
            githubUrl: 'https://github.com/wilvelasco1006/gastos-familiares.git',
        },
    ];

    return (
        <div className="projects-container">
            <header className="projects-header">
                <h1 className="projects-title" data-aos="fade-down">Mis Proyectos</h1>
                <p className="projects-subtitle" data-aos="fade-up">
                    Una selección de trabajos personales y académicos que muestran mis habilidades en desarrollo de software.
                </p>
            </header>

            <div className="projects-grid">
                {projects.map(project => (
                    <div className="project-item" key={project.id}>
                        <CardProject
                            title={project.title}
                            image={project.image}
                            description={project.description}
                            githubUrl={project.githubUrl}
                            demoUrl={project.demoUrl}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;