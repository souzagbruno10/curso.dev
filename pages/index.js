import React from 'react';
import Image from 'next/image'; // Importação do componente Image
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <header className={styles.header}>
        <h1>Studio Sairaf</h1>
      </header>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <h2>Realçando Sua Beleza Natural</h2>
          <p>
            Especialistas em design de sobrancelhas, estamos aqui para valorizar
            sua expressão e confiança. Descubra um atendimento personalizado e
            uma experiência única.
          </p>
          <button className={styles.ctaButton}>Saiba Mais</button>
        </div>
        <div className={styles.heroImage}>
        <Image 
      src="/giStudio.png"  // Caminho correto da imagem
      alt="Imagem do Studio Sairaf, mostrando o ambiente interno"
      width={350}
      height={350}
      className={styles.roundedImage} 
      priority
    />
  </div>
  <div className={styles.imageDescription}>
    <span className={styles.arrow}>→</span> 
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <h2>Nossos Serviços</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Design de Sobrancelhas</h3>
            <p>
              Transformamos suas sobrancelhas com técnicas precisas e
              personalizadas para realçar sua beleza.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Henna</h3>
            <p>
              Aplique henna para sobrancelhas perfeitas, duradouras e cheias de
              vida.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Manutenção</h3>
            <p>
              Cuidamos da manutenção regular para manter suas sobrancelhas
              impecáveis.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <p>© 2025 Studio Sairaf. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;
