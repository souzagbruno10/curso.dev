import React, { useState } from 'react';
import styles from '../styles/Home.module.css';

function AgendamentoForm() {
  const [formData, setFormData] = useState({
    nome: '',
    data: '',
    hora: '',
    servico: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Agendamento confirmado para ${formData.nome} - ${formData.servico} em ${formData.data} às ${formData.hora}`);
  };

  return (
    <section className={styles.agendamentoSection}>
      <h2>Agende Seu Atendimento</h2>
      <form onSubmit={handleSubmit} className={styles.agendamentoForm}>
        <div className={styles.formGroup}>
          <label htmlFor="nome">Nome da Cliente</label>
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
            <option value="Design de Sobrancelhas e Extensão de Cílios">Design de Sobrancelhas e Extensão de Cílios</option>
            <option value="Henna">Henna</option>
            <option value="Manutenção">Manutenção</option>
          </select>
        </div>
        <button type="submit" className={styles.ctaButton}>Confirmar Agendamento</button>
      </form>
    </section>
  );
}

export default AgendamentoForm;
