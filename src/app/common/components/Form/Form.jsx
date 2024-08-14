'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import styles from './styles.module.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    posta: '',
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/thank-you');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className={styles.input}
        placeholder="Isim"
        required
      />
      <input
        type="email"
        id="posta"
        name="posta"
        value={formData.posta}
        onChange={handleChange}
        className={styles.input}
        placeholder="E-posta"
        required
      />

      <button type="submit" className={styles.submit}>
      Emir
      </button>
    </form>
  );
};

export default Form;
