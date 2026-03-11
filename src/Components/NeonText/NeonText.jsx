// app/components/NeonText.jsx

import React from 'react';
import styles from './NeonText.module.css';

const NeonText = ({ children }) => {
  return <p className={styles.neonText}>{children}</p>;
};

export default NeonText;
