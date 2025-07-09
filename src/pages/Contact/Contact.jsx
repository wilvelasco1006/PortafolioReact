import React, { useState } from 'react';
import './Contact.css';
import { FaPaperPlane, FaUser, FaEnvelope, FaCommentAlt } from 'react-icons/fa';

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formData = new FormData(e.target);
            const response = await fetch('https://formspree.io/f/xvgrjjry', {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json',
                },
            });

            if (response.ok) {
                setIsSubmitted(true);
                e.target.reset();
            } else {
                alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-container" data-aos="fade-up">
            <header className="contact-header">
                <h1 className="contact-title">Contáctame</h1>
                <p className="contact-subtitle">
                    ¿Tienes un proyecto o idea? ¡Hablemos!
                </p>
            </header>

            {isSubmitted ? (
                <div className="success-message" data-aos="zoom-in">
                    <div className="success-icon">
                        <FaPaperPlane />
                    </div>
                    <h2>¡Mensaje enviado con éxito!</h2>
                    <p>Gracias por contactarme. Te responderé lo antes posible.</p>
                    <button
                        className="btn--green"
                        onClick={() => setIsSubmitted(false)}
                    >
                        Enviar otro mensaje
                    </button>
                </div>
            ) : (
                <form
                    className="contact-form"
                    method="POST"
                    action="https://formspree.io/f/xxxxxxx"
                    onSubmit={handleSubmit}
                    data-aos="fade-up"
                >
                    <div className="form-group">
                        <label htmlFor="name">
                            <FaUser className="input-icon" />
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Tu nombre"
                            required
                            aria-label="Nombre"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">
                            <FaEnvelope className="input-icon" />
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu correo electrónico"
                            required
                            aria-label="Correo electrónico"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">
                            <FaCommentAlt className="input-icon" />
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Escribe tu mensaje..."
                            required
                            aria-label="Mensaje"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btn--green submit-btn"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                        <FaPaperPlane className="btn-icon" />
                    </button>
                </form>
            )}
        </div>
    );
};

export default Contact;