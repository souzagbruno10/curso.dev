import AgendamentoForm from '../components/AgendamentoForm'; // Importe o formulário de agendamento
import styles from '../styles/Home.module.css'; // Reaproveitar os estilos

export default function AgendamentoPage() {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <header className={styles.header}>
        <h1>Studio Sairaf</h1>
      </header>

      {/* Hero Section */}

      
      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <h2>Agende Seu Atendimento</h2>
          <p>
            Agora é o momento de reservar o seu atendimento e experimentar uma
            transformação única. Escolha o serviço que mais combina com você
            e agende já.
          </p>
        </div>
        <div className={styles.heroImage}>
          <img

          
          src="/giStudio.png"
          alt=""
          width={300}
          height={300}
          className={styles.roundedImage}

            
          />
        </div>
      </section>

      {/* Informações sobre os Serviços */}
      <section className={styles.servicesSection}>
        <h2>Sobre Nossos Serviços</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Design de Sobrancelhas e Extensão de Cílios</h3>
            <p>
              Técnicas personalizadas para valorizar a sua expressão, com design
              de sobrancelhas perfeito e extensão de cílios que realçam sua beleza.
            </p>
            <ul>
              <li>Precisão e cuidado em cada detalhe</li>
              <li>Aplicação de extensões de cílios naturais</li>
              <li>Aparência natural e duradoura</li>
            </ul>
          </div>
          <div className={styles.serviceCard}>
            <h3>Henna para Sobrancelhas</h3>
            <p>
              Aplique henna para dar forma e definição às sobrancelhas, com
              um acabamento duradouro e impecável.
            </p>
            <ul>
              <li>Resultados naturais e duradouros</li>
              <li>Cores que combinam com seu tom de pele</li>
              <li>Design perfeito para cada rosto</li>
            </ul>
          </div>
          <div className={styles.serviceCard}>
            <h3>Manutenção de Sobrancelhas e Cílios</h3>
            <p>
              Mantenha a beleza de suas sobrancelhas e cílios com sessões
              regulares para garantir o melhor resultado.
            </p>
            <ul>
              <li>Cuidados contínuos para realçar sua expressão</li>
              <li>Ajustes nas sobrancelhas e extensões de cílios</li>
              <li>Atendimento personalizado conforme sua necessidade</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Formulário de Agendamento */}
      <section className={styles.agendamentoSection}>
        <AgendamentoForm />
      </section>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <p>© 2025 Studio Sairaf. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
