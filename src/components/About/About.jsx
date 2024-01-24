import React from 'react';
import Foto from './cat.jpg';
import './About.css';

const About = () => {
    return (
        <div className='info-container'>
            <h1>ABOUT ME</h1>
            <img src={Foto} alt="Cat" />
            <p>Nombre: Dafne Sánchez</p>
            <p>Email: daaphsanchez@gmail.com</p>
            <p>Descripción: Soy estudiante de Generation en su programa intensivo de JavaFull Stack</p>
        </div>
    );
}

export default About;