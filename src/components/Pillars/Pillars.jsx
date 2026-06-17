import "./Pillars.css";

function Pillars() {
  const pillars = [
    {
      icon: "bi-lightbulb-fill",
      title: "Inspirar",
      text: "Palestras, rodas de conversa e visitas técnicas para expandir horizontes e apresentar novas possibilidades profissionais."
    },
    {
      icon: "bi-book-fill",
      title: "Apoiar",
      text: "Aulas preparatórias e suporte educacional para vestibular e ENEM com apoio de professores e voluntários."
    },
    {
      icon: "bi-person-hearts",
      title: "Acompanhar",
      text: "Mentorias com universitárias e profissionais da área, criando uma rede de apoio segura e contínua."
    },
    {
      icon: "bi-universal-access-circle",
      title: "Incluir",
      text: "Promoção da diversidade de gênero nas áreas de exatas, tecnologia, engenharia e inovação."
    },
    {
      icon: "bi-cpu-fill",
      title: "Capacitar",
      text: "Oficinas práticas de lógica, programação, robótica e ferramentas essenciais para o futuro profissional."
    },
    {
      icon: "bi-rocket-takeoff-fill",
      title: "Transformar",
      text: "Impulsionar a presença feminina nas ciências exatas e contribuir para um futuro mais diverso."
    }
  ];

  return (
    <section id="pilares" className="pillars-section">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-subtitle">Pilares</span>

          <h2 className="section-title">Como o MinaTech gera impacto</h2>

          <p className="section-description mx-auto pillars-description">
            O projeto atua em diferentes frentes para inspirar, apoiar,
            acompanhar e capacitar meninas de escolas públicas.
          </p>
        </div>

        <div className="row g-4">
          {pillars.map((pillar, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="pillar-card">
                <div className="pillar-icon">
                  <i className={`bi ${pillar.icon}`}></i>
                </div>

                <h3>{pillar.title}</h3>

                <p>{pillar.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pillars;