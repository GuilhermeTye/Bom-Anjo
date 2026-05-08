import "./App.css";

import logoBomAnjo from "./assets/logo-bom-anjo.png";
import coslab from "./assets/coslab.jpeg";
import fcerro from "./assets/fcerro.jpeg";
import kamila from "./assets/kamila.jpeg";
import mottim from "./assets/mottim.jpeg";
import otica from "./assets/otica.jpeg";
import pedrinho from "./assets/pedrinho.jpeg";

const whatsappNumber = "5541984127168";

function abrirWhatsApp(mensagem) {
  const texto = encodeURIComponent(mensagem);
  window.open(`https://wa.me/${whatsappNumber}?text=${texto}`, "_blank");
}

export default function App() {
  const planos = [
    {
      nome: "Plano A+",
      destaque: true,
      selo: "Diamante",
      preco: "R$ 110,00",
      dia: "R$ 3,66 por dia",
      descricao: "Plano mais completo, com cobertura familiar e assistência premium.",
      beneficios: [
        "Titular, cônjuge, filhos, pai e mãe, sogro e sogra",
        "Urna sextavada com visor, verniz brilho e alça-varão",
        "Bíblia ou crucifixo na tampa",
        "Assepsia e tanatopraxia padrão",
        "Flores especiais, véu orvalhado renda especial luxo",
        "Coroa de flores naturais se disponível",
        "Faixa de homenagem personalizada",
        "Velório com paramentação conforme religião",
        "Livro de presença e kit café",
        "Translado e liberação em Cerro Azul, Doutor Ulysses, Curitiba e região metropolitana",
        "Velório e sepultamento em Cerro Azul e Doutor Ulysses",
        "Terno masculino completo ou tailleur feminino completo",
      ],
    },
    {
      nome: "Plano A",
      selo: "Ouro",
      preco: "R$ 65,00",
      dia: "R$ 2,16 por dia",
      descricao: "Plano familiar com excelente equilíbrio entre cobertura e valor.",
      beneficios: [
        "Titular, cônjuge, filhos, pai e mãe, sogro e sogra",
        "Urna sextavada com visor, verniz brilho e alça-varão",
        "Bíblia ou crucifixo na tampa",
        "Inclui assepsia",
        "Flores especiais",
        "Véu orvalhado renda especial luxo",
        "Coroa de flores especiais",
        "Faixa de homenagem personalizada",
        "Velório com paramentação conforme religião",
        "Livro de presença e kit café",
        "Translado e liberação em Cerro Azul, Doutor Ulysses, Curitiba e região metropolitana",
      ],
    },
    {
      nome: "Plano B",
      selo: "Prata",
      preco: "R$ 55,00",
      dia: "R$ 1,83 por dia",
      descricao: "Plano acessível para proteger sua família com segurança.",
      beneficios: [
        "Titular, cônjuge, filhos, pai e mãe, sogro e sogra",
        "Urna sextavada com visor, verniz brilho e alça-varão",
        "Inclui assepsia",
        "Flores permanentes",
        "Véu orvalhado renda larga",
        "Coroa de flores permanentes",
        "Faixa de homenagem personalizada",
        "Velório com paramentação conforme religião",
        "Livro de presença e kit café",
        "Translado e liberação em Cerro Azul, Doutor Ulysses, Curitiba e região metropolitana",
      ],
    },
    {
      nome: "Plano C",
      selo: "Bronze",
      preco: "R$ 45,00",
      dia: "R$ 1,50 por dia",
      descricao: "Plano de entrada para quem busca proteção familiar essencial.",
      beneficios: [
        "Titular, cônjuge, filhos, pai e mãe, sogro e sogra",
        "Urna sextavada com visor, verniz brilho e alça-parreira",
        "Inclui assepsia",
        "Flores permanentes",
        "Véu orvalhado renda larga",
        "Coroa de flores permanentes",
        "Faixa de homenagem personalizada",
        "Velório com paramentação conforme religião",
        "Livro de presença e kit café",
        "Translado e liberação em Cerro Azul, Doutor Ulysses, Curitiba e região metropolitana",
      ],
    },
  ];

  const parceiros = [
    { nome: "Coslab", imagem: coslab, categoria: "Laboratório" },
    { nome: "Farmácia Cerro Azul", imagem: fcerro, categoria: "Farmácia" },
    { nome: "Dra. Kamila Souza", imagem: kamila, categoria: "Clínica Médica" },
    { nome: "Mottim Gás", imagem: mottim, categoria: "Gás" },
    { nome: "Centro Ótico Tropical", imagem: otica, categoria: "Ótica" },
    { nome: "Dr. Pedro Almeida", imagem: pedrinho, categoria: "Dentista" },
  ];

  return (
    <div className="site">
      <header className="header">
        <a href="#inicio" className="brand">
          <img src={logoBomAnjo} alt="Bom Anjo Assistência Funerária" />
          <div>
            
          </div>
        </a>

        <nav className="nav">
          <a href="#inicio">Início</a>
          <a href="#planos">Planos</a>
          <a href="#clube">Clube</a>
          <a href="#diferenciais">Benefícios</a>
          <a href="#contato">Contato</a>
        </nav>

        <button
          className="headerButton"
          onClick={() =>
            abrirWhatsApp("Olá, vim pelo site da Bom Anjo e gostaria de atendimento.")
          }
        >
          Atendimento
        </button>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="goldFrame"></div>

          <div className="heroText">
            <span className="tag">Desde 2001 • Plano Funeral Familiar</span>

            <h1>Proteção, amparo e tranquilidade para sua família.</h1>

            <p>
              Planos funerários familiares com cobertura completa, atendimento
              humanizado e benefícios exclusivos associados Bom Anjo.
            </p>

            <div className="heroActions">
              <button
                onClick={() =>
                  abrirWhatsApp(
                    "Olá, vim pelo site da Bom Anjo e gostaria de conhecer os planos funerários familiares."
                  )
                }
              >
                Conhecer planos
              </button>

              <a href="#planos">Ver valores</a>
            </div>
          </div>

          <div className="heroCard">
            <img src={logoBomAnjo} alt="Bom Anjo" />
            <h3>Planos 2026</h3>
            <p>A partir de apenas</p>
            <strong>R$ 45,00</strong>
            <span></span>

            <button
              onClick={() =>
                abrirWhatsApp("Olá, quero saber mais sobre os planos da Bom Anjo.")
              }
            >
              Falar no WhatsApp
            </button>
          </div>
        </section>

        <section id="planos" className="plansSection">
          <span className="tag">Planos de Assistência Funeral Familiar</span>

          <h2>Escolha o plano ideal para proteger quem você ama</h2>

          <div className="plans">
            {planos.map((plano) => (
              <div
                className={plano.destaque ? "plan featured" : "plan"}
                key={plano.nome}
              >
                <div className="planTop">
                  <span>{plano.selo}</span>
                  <h3>{plano.nome}</h3>
                </div>

                <div className="price">
                  <strong>{plano.preco}</strong>
                  <small>mensais</small>
                  <p>{plano.dia}</p>
                </div>

                <p className="planDesc">{plano.descricao}</p>

                <ul>
                  {plano.beneficios.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <button
                  onClick={() =>
                    abrirWhatsApp(
                      `Olá, tenho interesse no ${plano.nome} da Bom Anjo. Pode me passar mais informações?`
                    )
                  }
                >
                  Tenho interesse
                </button>
              </div>
            ))}
          </div>
        </section>

        <section id="clube" className="clubSection">
          <span className="tag">Benefício exclusivo</span>

          <h2>Clube de Descontos Bom Anjo</h2>

          <p className="clubText">
            Sendo associado Bom Anjo, você participa de um grupo especial de
            descontos com empresas parceiras da nossa cidade.
          </p>

          <div className="clubGrid">
            {parceiros.map((parceiro) => (
              <div className="clubCard" key={parceiro.nome}>
                <img src={parceiro.imagem} alt={parceiro.nome} />

                <div>
                  <span>{parceiro.categoria}</span>
                  <h3>{parceiro.nome}</h3>
                  <p>Desconto especial para  Bom Anjo.</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() =>
              abrirWhatsApp(
                "Olá, sou planista Bom Anjo e gostaria de saber mais sobre o Clube de Descontos."
              )
            }
          >
            Saber mais sobre o clube
          </button>
        </section>

        <section id="diferenciais" className="benefitsSection">
          <span className="tag">Incluso nos planos</span>

          <h2>Assistência completa para momentos delicados</h2>

          <div className="benefitsGrid">
            <div>
              <h3>Urna mortuária</h3>
              <p>Urna sextavada com visor, verniz brilho e acabamento conforme o plano escolhido.</p>
            </div>

            <div>
              <h3>Translado</h3>
              <p>Cobertura para Cerro Azul, Doutor Ulysses, Curitiba e região metropolitana.</p>
            </div>

            <div>
              <h3>Flores</h3>
              <p>Ornamentação, coroa de flores e faixa de homenagem personalizada.</p>
            </div>

            <div>
              <h3>Velório</h3>
              <p>Paramentação conforme religião, livro de presença e kit café.</p>
            </div>

            <div>
              <h3>Cobertura familiar</h3>
              <p>Titular, cônjuge, filhos, pai e mãe, sogro e sogra.</p>
            </div>

            <div>
              <h3>Atendimento humanizado</h3>
              <p>Equipe preparada para orientar sua família com respeito e discrição.</p>
            </div>
          </div>
        </section>

        <section id="contato" className="contact">
          <img src={logoBomAnjo} alt="Bom Anjo" />

          <h2>Fale com a Bom Anjo</h2>

          <p>Cuidado, respeito e amparo para sua família.</p>

          <button
            onClick={() =>
              abrirWhatsApp("Olá, vim pelo site da Bom Anjo e gostaria de atendimento.")
            }
          >
            Atendimento pelo WhatsApp
          </button>
        </section>
      </main>

      <footer>
        © 2026 Bom Anjo Assistência Funerária. Todos os direitos reservados.
      </footer>

      <button
        className="floatWhats"
        onClick={() =>
          abrirWhatsApp("Olá, vim pelo site da Bom Anjo e gostaria de atendimento.")
        }
      >
        WhatsApp
      </button>
    </div>
  );
}