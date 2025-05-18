import "./App.css";

import Header from "./components/Header/Header.jsx";

import me from "./assets/eu.jpg";
import login from "./assets/loginfirebase.png";
import primeflix from "./assets/primeflix.png";
import rpg from "./assets/rpg.png";

function App() {
  return (
    <div>
      <Header />
      <section className="main_container">
        <div className="main">
          <p className="appresentation">Olá, eu me chamo</p>
          <p className="name">Diogo Uoma</p>
          <p className="stacks">Bacharel em Engenharia de Software.</p>
        </div>
      </section>

      <section className="about_container">
        <h1>Sobre</h1>
        <div className="about_content">
          <img src={me} alt="Foto minha" />
          <div className="about_text">
            <br />
            <p>Olá, boas vindas! Me chamo Diogo e adoro criar sistemas web.</p>
            <br />
            <p>
              Sou graduado em Engenharia de Software. Sempre fui apaixonado por
              resoluções de problemas e o que despertou a minha curiosidade na
              área de desenvolvimento, e desde então sou focado em seguir minha
              carreira como desenvolvedor.
            </p>
            <br />
            <p>
              Atualmente possuo conhecimento em desenvolvimento tanto frontend
              quanto backend, e utilizo tecnologias como o Java, Spring Boot,
              Html, Css, Javascript, React, Node e Express, e possuo
              conhecimento em banco de dados também utilizando SQL, Mongodb e
              PostgreSQL. Além de sempre estar estudando e ampliando meus
              conhecimentos.
            </p>
          </div>
        </div>
      </section>

      <section className="projects_container">
        <h1>Alguns dos meus projetos</h1>
        <div className="projects_content">
          <div className="project">
            <img src={login} />
            <p>Login com firebase</p>
            <a href="https://github.com/DiogoUoma/loginFirebase">github</a>
            <a href="https://login-firebase-sigma.vercel.app">site</a>
          </div>

          <div className="project">
            <img src={primeflix} />
            <p>Primeflix</p>
            <a href="https://github.com/DiogoUoma/primeflix">github</a>
            <a href="https://primeflix-azure.vercel.app">site</a>
          </div>

          <div className="project">
            <img src={rpg} />
            <p>RPG</p>
            <a href="https://github.com/DiogoUoma/rpg">github</a>
            <a href="https://rpg-vert-five.vercel.app">site</a>
          </div>
        </div>
      </section>

      <section className="contact_container">
        <h1>Contato</h1>
        <div className="contacts">
          <div className="contact_item">
            <span>Email: </span>
            <a href="mailto:diogouoma3105@gmail.com">diogouoma3105@gmail.com</a>
          </div>
          <div className="contact_item">
            <span>Whatsapp: </span>
            <a
              href="https://wa.me/5544999073105"
              target="_blank"
              rel="noopener noreferrer"
            >
              (44)999073105
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
