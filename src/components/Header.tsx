import React from 'react';
import styles from'./Header.module.css';
import volley from '../../src/image/volleyball.svg';
export function Header() {
  return (
    <header className={styles.header}>
        <img src={volley}/>
        <strong>Ignite Worlds</strong> 
    </header>
  );
}
