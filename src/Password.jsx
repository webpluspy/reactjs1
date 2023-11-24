import React, { useState, useEffect, useRef, useCallback } from 'react';

const generateRandomPassword = (length) => {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
};

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const lengthRef = useRef(8); // Default password length
  const generatePassword = useCallback(() => {
    setPassword(generateRandomPassword(lengthRef.current));
  }, []);

  // useEffect to generate password when the component mounts
  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  return (
    <div>
      <h1>Random Password Generator</h1>
      <div>
        <label>Password Length: </label>
        <input
          type="number"
          value={lengthRef.current}
          onChange={(e) => (lengthRef.current = parseInt(e.target.value, 10))}
        />
      </div>
      <div>
        <button onClick={generatePassword}>Generate Password</button>
      </div>
      <div>
        <strong>Password: </strong>
        {password}
      </div>
    </div>
  );
};

export default PasswordGenerator;
