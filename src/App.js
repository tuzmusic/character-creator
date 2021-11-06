import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';
import styles from './App.module.css';

function App() {
  return (
    <>
      <div className={styles.perspectiveDecoration}/>
      <CharacterEditor/>
      <Footer/>
    </>
  );
}

export default App;
