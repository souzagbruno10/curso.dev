import React, { useState } from 'react';
import { useRouter } from 'next/router'; // Para navegação
import styles from '../styles/Home.module.css';
import { FaWhatsapp, FaInstagram, FaHome } from 'react-icons/fa'; // Ícones de WhatsApp, Instagram e Home

function AgendamentoForm() {
  const router = useRouter(); // Inicializa o roteador

  const [formData, setFormData] = useState({
    nome: '',
    data: '',
    hora: '',
    servico: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Agendamento confirmado para ${formData.nome} - ${formData.servico} em ${formData.data} às ${formData.hora}`
    );
  };

  return (
    <section className={styles.agendamentoSection}>
      {/* Ícone de casinha para voltar ao início */}
      <div className={styles.homeIcon}>
        <FaHome size={24} color="#f294a8" onClick={() => router.push('/')} />
      </div>

      <h2>Agende Seu Atendimento</h2>
      <form onSubmit={handleSubmit} className={styles.agendamentoForm}>
        <div className={styles.formGroup}>
          <label htmlFor="nome"> Nome da Cliente </label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="data">Data</label>
          <input
            type="date"
            id="data"
            name="data"
            value={formData.data}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="hora">Hora</label>
          <input
            type="time"
            id="hora"
            name="hora"
            value={formData.hora}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="servico">Serviço</label>
          <select
            id="servico"
            name="servico"
            value={formData.servico}
            onChange={handleChange}
            required
          >
            <option value="">Escolha um Serviço</option>
            <option value="Design de Sobrancelhas">Design de Sobrancelhas</option>
            <option value="Extensão de Cílios">Extensão de Cílios</option>
            <option value="Henna">Henna</option>
            <option value="Manutenção">Manutenção</option>
          </select>
        </div>
        <button type="submit" className={styles.ctaButton}>
          Confirmar Agendamento
        </button>
      </form>

      {/* Ícones de contato */}
      <div className={styles.contactSection}>
        <p>Entre em contato conosco:</p>
        <div className={styles.socialIcons}>
          <a
            href="https://wa.me/5511977895789"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={30} color="#25D366" />
          </a>
          <a
            href="https://www.instagram.com/studiosairaf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} color="#C13584" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default AgendamentoForm;
