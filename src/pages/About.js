import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { Icon } from '@iconify/react';
import hardSkillsIcons from '../data/hardSkillsIcons';
import image from '../assets/Background-Photoroom.webp';

import Header from '../components/Header';
import SocialMedia from '../components/SocialMedia';

import '../styles/pages/about.scss';


export default class About extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }
  render() {
    return (
      <div className="all-about">
        <Header />
        <section className="about">
          <div className="about-header-text-skills" style={{zIndex: 2}}>
            
            <div className="about-text-skills">
            <section className="about-text">
                <p className="about-text-p about-text-p-1">Olá, </p>
                
                <p className="about-text-p about-text-p-2">meu nome é <span>Diogenes Yuri</span></p>
                
                <p className="about-text-p about-text-p-3">Sou desenvolvedor <span>Jr</span> e estudante de <span>Engenharia de Software</span> na <span>Anhanguera</span> !</p>
                
                <p className="about-text-p about-text-p-3">Possuo experiência em <span>JavaScript</span>, <span>C#</span>, <span>Node.js</span>, <span>MongoDB</span> e um pouco de <span>Sass/CSS</span>, estou constantemente estudando para aprimorar minha habilidade em criar interfaces de usuário elegantes e funcionais. Sempre fazendo cursos e buscando inovar em outras tecnologias como java e oracle cloud.</p>
                
                <p className="about-text-p about-text-p-5">Busco aprimorar mais meus conhecimentos, estou estudando atealmente <span>React</span>, bem como <span>Flutter</span> e <span>Firebase</span> para aprender o Full-Stack.</p>
                
                <p className="about-text-p about-text-p-5">Sinto que estou pronto para encarar novos desafios e contribuir para o crescimento da comunidade.</p>

                <p className="about-text-p about-text-p-6"><span>Veja abaixo algumas skill que tenho e estudo atualmente.</span></p>
              </section>
              <div className="about-image" style={{zIndex: 2}} >
            <img className="about-img" src={image} alt="profile" /> 
          </div>
              <section className="about-skills">
                <p className="about-skills-p">SKILLS</p>
                <div className="about-skill">
                {hardSkillsIcons.map((icon, index) => (
                    <div key={index} className="about-div-icon" style={{zIndex: 2}}>
                      <Icon icon={icon.icon} className={icon.className} />
                    <p className='about-icon-text'>{icon.title}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
            
          </div>
          
          <SocialMedia />
        </section>
        
      </div>
      
    )
  }
}