import "./App.css";

const highlights = [
  {
    title: "Mobile & Web",
    description:
      "Creo app fluide, veloci e curate. Dal prototipo al rilascio, con attenzione maniacale ai dettagli.",
  },
  {
    title: "Cybersecurity mindset",
    description:
      "Penso alla sicurezza fin dall'inizio: autenticazioni robuste, superfici d'attacco minimizzate, log sensati.",
  },
  {
    title: "IoT & automazioni",
    description:
      "Integro sensori, MQTT e microcontrollori per rendere i prodotti più intelligenti e vivi.",
  },
];

const services = [
  {
    title: "App mobile cross-platform",
    detail:
      "Flutter, Dart, UI moderne, performance native. Per startup e team che vogliono muoversi velocemente.",
  },
  {
    title: "Frontend web",
    detail:
      "Interfacce reattive in React, micro-interazioni che raccontano il brand, accessibilità al centro.",
  },
  {
    title: "Sistemi IoT",
    detail:
      "ESP32, Arduino e MQTT per collegare hardware e cloud senza attriti.",
  },
  {
    title: "Security review",
    detail:
      "Analisi di endpoint, flow di autenticazione e best practice di difesa applicativa.",
  },
];

const projects = [
  {
    name: "URL Security Scanner",
    type: "Python · Threat Analysis",
    story:
      "Uno scanner che valuta reputazione, segnali di phishing e indicatori comportamentali in pochi secondi.",
  },
  {
    name: "FALCON",
    type: "Security · Hash Cracking",
    story:
      "Motore modulare per test di robustezza delle password con ottimizzazioni su nodi distribuiti.",
  },
  {
    name: "Pulse Home",
    type: "IoT · MQTT · UX",
    story:
      "Dashboard domestica che unifica sensori e automazioni in una regia unica, semplice da usare.",
  },
];

const process = [
  {
    step: "01",
    title: "Ascolto",
    text: "Mi prendo il tempo per capire obiettivi, vincoli e il tono giusto da comunicare.",
  },
  {
    step: "02",
    title: "Design + Prototipo",
    text: "Traccio flussi chiari, poi prototipi che si possono già toccare e testare.",
  },
  {
    step: "03",
    title: "Build",
    text: "Codice pulito, componenti riutilizzabili e attenzione costante alle performance.",
  },
  {
    step: "04",
    title: "Iterazione",
    text: "Misuro, raccolgo feedback e rifinisco fino a quando l'esperienza è naturale.",
  },
];

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <nav className="nav">
          <div className="logo">CH</div>
          <div className="nav-links">
            <a href="#chi-sono">Chi sono</a>
            <a href="#cosa-faccio">Cosa faccio</a>
            <a href="#progetti">Progetti</a>
            <a href="#contatti" className="nav-cta">
              Contattami
            </a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Ciao, sono Christian 👋</p>
            <h1>
              Creo esperienze digitali che sembrano semplici, ma sono costruite con
              precisione.
            </h1>
            <p className="lead">
              Sono uno sviluppatore mobile & web con base in Italia. Lavoro tra Flutter,
              React, cybersecurity e IoT: un mix che mi permette di progettare prodotti
              eleganti, solidi e pronti a crescere.
            </p>
            <div className="hero-actions">
              <button className="primary">Parliamo del tuo progetto</button>
              <button className="ghost">Guarda i miei lavori</button>
            </div>
            <div className="hero-tags">
              <span>Flutter • Dart</span>
              <span>React • TypeScript</span>
              <span>IoT • MQTT</span>
              <span>Cybersecurity</span>
            </div>
          </div>
          <div className="hero-card">
            <div className="pulse" />
            <div className="hero-card-content">
              <p className="hero-card-title">Focus attuale</p>
              <h3>Mobile UX + Integrazione IoT</h3>
              <p>
                Sto sviluppando interfacce mobile che dialogano con dispositivi reali.
                L'obiettivo: far sentire l'utente sempre “a casa”, anche quando gestisce
                tecnologia complessa.
              </p>
              <div className="hero-card-stats">
                <div>
                  <strong>+40</strong>
                  <span>Prototipi consegnati</span>
                </div>
                <div>
                  <strong>3x</strong>
                  <span>Riduzione tempi di release</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="highlights" id="chi-sono">
        <div className="section-heading">
          <p className="eyebrow">La mia impronta</p>
          <h2>Un profilo tecnico, ma con un'anima creativa.</h2>
          <p>
            Mi piace tradurre idee complesse in esperienze fluide. Ogni progetto è un
            dialogo: tra brand e persone, tra tecnologia e semplicità.
          </p>
        </div>
        <div className="highlight-grid">
          {highlights.map((item) => (
            <article key={item.title} className="highlight-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="glow" />
            </article>
          ))}
        </div>
      </section>

      <section className="services" id="cosa-faccio">
        <div className="section-heading">
          <p className="eyebrow">Cosa faccio</p>
          <h2>Prodotti su misura, con un tocco umano.</h2>
          <p>
            Non consegno solo codice, ma strumenti che aiutano team e clienti a lavorare
            meglio e più serenamente.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.detail}</p>
              <button className="text-link">Scopri di più →</button>
            </div>
          ))}
        </div>
      </section>

      <section className="projects" id="progetti">
        <div className="section-heading">
          <p className="eyebrow">Progetti</p>
          <h2>Storie di prodotto che partono da un problema reale.</h2>
          <p>
            Ogni progetto nasce da una domanda precisa. Qui trovi tre esperienze che
            raccontano il mio modo di lavorare.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.name} className="project-card">
              <div className="project-meta">
                <span>{project.type}</span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.story}</p>
              <button className="ghost small">Case study</button>
            </article>
          ))}
        </div>
      </section>

      <section className="process">
        <div className="section-heading">
          <p className="eyebrow">Metodo</p>
          <h2>Un percorso chiaro, senza sorprese.</h2>
        </div>
        <div className="process-grid">
          {process.map((item) => (
            <div key={item.step} className="process-card">
              <span className="step">{item.step}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta" id="contatti">
        <div>
          <h2>Hai un'idea che merita attenzione?</h2>
          <p>
            Raccontamela. Possiamo costruire qualcosa di bello, solido e pronto per il
            futuro.
          </p>
        </div>
        <div className="cta-actions">
          <button className="primary">Scrivimi</button>
          <button className="ghost">Scarica il mio CV</button>
        </div>
      </section>

      <footer className="footer">
        <div>
          <strong>Christian</strong>
          <p>Mobile & Web Developer</p>
        </div>
        <div className="footer-links">
          <a href="mailto:contact@chrxstxqn.dev">Email</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/Chrxstxqn" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
