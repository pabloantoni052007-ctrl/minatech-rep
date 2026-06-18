import "./Journey.css";

function Journey() {
  const steps = [
    {
      number: "1ª Etapa",
      title: "Inspiração e Descoberta",
      text: "Palestras, rodas de conversa e atividades em escolas públicas para apresentar as possibilidades das áreas de tecnologia, engenharias e ciências exatas."
    },
    {
      number: "2ª Etapa",
      title: "Oficinas e Aprendizado Prático",
      text: "Oficinas de lógica, programação, robótica e atividades práticas em um ambiente acolhedor e colaborativo."
    },
    {
      number: "3ª Etapa",
      title: "Conexão com o Ecossistema",
      text: "Visitas técnicas, encontros com profissionais, experiências em universidades, laboratórios e empresas parceiras."
    },
    {
      number: "4ª Etapa",
      title: "Mentorias e Rede de Apoio",
      text: "Acompanhamento com mulheres que atuam nas áreas STEM, fortalecendo confiança e desenvolvimento pessoal."
    },
    {
      number: "5ª Etapa",
      title: "Apoio Educacional",
      text: "Incentivo à continuidade dos estudos por meio de orientação acadêmica e preparação para vestibulares e ENEM."
    },
    {
      number: "6ª Etapa",
      title: "Desenvolvimento de Futuro",
      text: "Aproximação com oportunidades acadêmicas e profissionais no ecossistema de tecnologia e inovação."
    }
  ];

  return (
    <section id="jornada" className="journey-section">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-subtitle">Jornada</span>

          <h2 className="section-title">A Jornada MinaTech</h2>

          <p className="section-description mx-auto journey-description">
            Um programa que inspira, apoia e acompanha jovens meninas no
            universo da tecnologia, das engenharias e da inovação.
          </p>
        </div>

        <div className="journey-timeline">
          {steps.map((step, index) => (
            <div className="journey-step" key={index}>
              <div className="journey-number">{step.number}</div>

              <div className="journey-content">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;