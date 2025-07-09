import React from 'react';
import './Resume.css';

import Button from '../../components/Button';
import {
    FaDownload,
    FaBriefcase,
    FaGraduationCap,
    FaCode,
    FaTools,
    FaSchool,
    FaHammer,
    FaDesktop,
    FaDatabase,
    FaGitAlt,
    FaLaptopCode,
} from 'react-icons/fa';

// URL del PDF de la hoja de vida
const CV_URL = '/HV-feria-Standar.pdf';

const Resume = () => {
    return (
      <div className="resume-container">
        <header className="resume-header" data-aos="fade-down">
          <h1 className="resume-title">Hoja de Vida</h1>
          <Button
            text="Descargar Hoja de Vida"
            className="btn--blue resume-download-btn"
            icon={<FaDownload />}
            onClick={() => window.open(CV_URL, '_blank')}
          />
        </header>

        {/* Experiencia Ocupacional */}
        <section className="resume-section">
          <div className="section-header">
            <div className="section-icon">
              <FaBriefcase />
            </div>
            <h2 className="section-title" data-aos="fade-up">
              Experiencia Ocupacional
            </h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content" >
                <h3 className="timeline-title" data-aos="flip-up">Desarollador</h3>
                <span className="timeline-period" data-aos="flip-down">
                  Febrero 2025 - Actualmente
                </span>
                <p className="timeline-description" data-aos="slide-right">
                  <span className="company">Universidad del Valle.</span>
                  Proyecto "EyeCare". Cargo: Desarrollador. Docente: Fabián
                  Valencia. Tel. +57 602 321 2100. Funciones: Desarrollar un
                  sitio web 3D interactivo relacionado a enfermedades oculares
                  con React, diseño de interfaz con Figma y control de versiones
                  con Git.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <h3 className="timeline-title" data-aos="flip-up">Desarollador</h3>
                <span className="timeline-period" data-aos="flip-down">
                  Agosto 2024 - Diciembre 2024
                </span>
                <p className="timeline-description" data-aos="slide-left">
                  <span className="company">Universidad del Valle.</span>
                  Proyecto "SCSM". Cargo: Desarrollador. Docente: Santiago
                  Zuñiga Shaik. Tel. 3104092534. Funciones: Diseñar e
                  implementar un sistema web en Django para el registro
                  detallado de procesos productivos de una empresa de café
                  (ASOMIPRAM). Crear formularios intuitivos con HTML5 para el
                  correcto diligenciamiento y gestión de base de datos en
                  PostgreSQL.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <h3 className="timeline-title" data-aos="flip-up">Desarollador</h3>
                <span className="timeline-period" data-aos="flip-down">
                  Febrero 2024 - Junio 2024
                </span>
                <p className="timeline-description" data-aos="slide-right">
                  <span className="company">Universidad del Valle.</span>
                  Proyecto "Beatrix-statistics". Cargo: Desarrollador. Docente:
                  Danny Calvo. Tel. 317 6586357. Funciones: Documentar y apoyar
                  en el desarrollo de funcionalidades de un paquete estadístico
                  en Python diseñado para procesar y visualizar datos
                  meteorológicos a partir de archivos csv. Brindar soporte en la
                  implementación de la interfaz gráfica para la presentación de
                  medidas estadísticas y gráficos. Generar persistencia de datos
                  mediante archivos de texto.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <h3 className="timeline-title" data-aos="flip-up">Desarrollador</h3>
                <span className="timeline-period" data-aos="flip-down">Marzo 2023 - Julio 2023</span>
                <p className="timeline-description" data-aos="slide-right">
                  <span className="company">Universidad del Valle.</span>
                  Proyecto "Gastos familiares". Cargo: Programador. Docente: Luz
                  Estela Muñoz. Tel. +57 602 321 2100. Funciones: Documentar y
                  crear funciones en Python para un programa que muestra los
                  gastos familiares de 3 familias durante determinado intervalo
                  de tiempo. Crear una interfaz gráfica hecha en Tkinter y
                  almacenamiento de datos en estructuras de datos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Formación Académica */}
        <section className="resume-section">
          <div className="section-header">
            <div className="section-icon">
              <FaGraduationCap />
            </div>
            <h2 className="section-title" data-aos="zoom-in-up">Formación Académica</h2>
          </div>
          <div className="education-list">
            <div className="education-item" data-aos="fade-up">
              <p className="education-text" data-aos="zoom-in-down">
                Tecnología en Desarrollo de Software. Universidad del Valle.
                Yumbo.
                <span className="education-period" data-aos="zoom-in">2023 — Actualmente</span>
              </p>
            </div>
            <div className="education-item" data-aos="fade-up">
              <p className="education-text" data-aos="zoom-in-down">
                Bachiller Académico. Institución Educativa La Meseta.
                Suárez-Cauca.
                <span className="education-period">2017 — 2022</span>
              </p>
            </div>
          </div>
        </section>

        {/* Formación Complementaria */}
        <section className="resume-section">
          <div className="section-header">
            <div className="section-icon">
              <FaSchool />
            </div>
            <h2 className="section-title" data-aos="zoom-in-up">Formación Complementaria</h2>
          </div>
          <div className="courses-list">
            <div className="course-item" data-aos="fade-up">
              <div className="course-icon">
                <FaCode />
              </div>
              <p className="course-text" data-aos="zoom-in">
                <span className="course-title-inline">
                  Curso de Desarrollo de Software II
                </span>
                Universidad del Valle. 144 horas. Yumbo.
                <span className="current">Actualmente</span>
              </p>
            </div>

            <div className="course-item" data-aos="fade-up">
              <div className="course-icon">
                <FaTools />
              </div>
              <p className="course-text" data-aos="zoom-in">
                <span className="course-title-inline">
                  Curso de Proyecto Integrador I
                </span>
                Universidad del Valle. 192 horas. Yumbo.
                <span className="current">Actualmente</span>
              </p>
            </div>

            <div className="course-item" data-aos="fade-up">
              <div className="course-icon">
                <FaSchool />
              </div>
              <p className="course-text" data-aos="zoom-in">
                <span className="course-title-inline">
                  Certificado de participación Semana de Python en la práctica
                </span>
                Daxus LATAM. 8 horas. Virtual. 2025
              </p>
            </div>

            <div className="course-item" data-aos="fade-up">
              <div className="course-icon">
                <FaHammer />
              </div>
              <p className="course-text" data-aos="zoom-in">
                <span className="course-title-inline">
                  Curso de Desarrollo de Software I
                </span>
                Universidad del Valle. 144 horas. Yumbo. 2024
              </p>
            </div>

            <div className="course-item" data-aos="fade-up">
              <div className="course-icon">
                <FaDesktop />
              </div>
              <p className="course-text" data-aos="zoom-in">
                <span className="course-title-inline">
                  Scrum Foundation Professional Certificate (SFPC)
                </span>
                CertiProf. 1 hora. Virtual. 2024
              </p>
            </div>

            <div className="course-item" data-aos="fade-up">
              <div className="course-icon">
                <FaDatabase />
              </div>
              <p className="course-text" data-aos="zoom-in">
                <span className="course-title-inline">
                  Curso de Bases de Datos
                </span>
                Universidad del Valle. 192 horas. Yumbo. 2024
              </p>
            </div>

            <div className="course-item" data-aos="fade-up">
              <div className="course-icon">
                <FaGitAlt />
              </div>
              <p className="course-text" data-aos="zoom-in">
                <span className="course-title-inline">
                  Curso de Fundamentos de Programación Orientada a Eventos
                </span>
                Universidad del Valle. 144 horas. Yumbo. 2024
              </p>
            </div>

            <div className="course-item" data-aos="fade-up">
              <div className="course-icon">
                <FaLaptopCode />
              </div>
              <p className="course-text" data-aos="zoom-in">
                <span className="course-title-inline">
                  Curso de Fundamentos de Programación Orientada a Objetos
                </span>
                Universidad del Valle. 144 horas. Yumbo. 2024
              </p>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Resume;
