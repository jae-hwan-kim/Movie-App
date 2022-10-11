import React from 'react';
import Button from './Button';
import styles from './App.module.css'

function App() {
  return (
        <div>
            <h1 className={styles.title}>
              Welcome Back!!
            </h1>
            <Button text="i'm button"/>
        </div>
  );
}

export default App;
