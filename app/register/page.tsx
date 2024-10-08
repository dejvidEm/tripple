"use client";
import React, { useState } from 'react';

const SignUpPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // API volanie na backend
      const response = await fetch('https://tripple.uniquesolutions.sk/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          email,
          password,
        }),
      });

      // Kontrola odpovede
      if (response.ok) {
        const data = await response.json(); // Správne spracovanie JSON odpovede
        setSuccessMessage(data.message); // Prípadne si tu môžeš pridať správy
        setErrorMessage(''); // Resetovanie chybovej správy
      } else {
        const errorData = await response.json(); // Získanie chybových dát
        setErrorMessage(errorData.error || 'Nastala chyba, skúste znova.'); // Zobrazenie chybovej správy
        setSuccessMessage(''); // Resetovanie správy o úspechu
      }
    } catch (error) {
      console.error('Chyba pri volaní API:', error);
      setErrorMessage('Nastala chyba, skúste znova.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Meno a priezvisko:
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Heslo:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Registrovať sa</button>

      {/* Zobrazenie správy o úspechu alebo chybe */}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </form>
  );
};

export default SignUpPage;