"use client"

import React, { useState, useEffect } from 'react';
import styles from './play.module.css';

export default function HomeScreen() {
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      setGameOver(true);
    }
  }, [timeLeft]);

  return (
    <div>
      <div className={styles.body}>
        <div className={styles.flex}>
          <div className={styles.box}>
            <div className={styles.boxName}>Word Scramble</div>
            <div className={styles.zras}></div>
            <div className={styles.pnaxenios}>map ashigln</div>
            <div className={styles.hint}>map ashigln</div>
            {gameOver ? (
              <div className={styles.message}>Your time has ended!</div>
            ) : (
              <div className={styles.time}>Time Left: {timeLeft}s</div>
            )}
            <input className={styles.input} placeholder="Enter a valid word" />
            <div className={styles.flex}>
              <button className={styles.refresh}>Refresh Word</button>
              <button className={styles.check}>Check Word</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
