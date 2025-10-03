"use client";
import styles from "./page.module.css";
import CarModelViewer from "../../components/carModel";

import React, { useState, useEffect } from "react";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.carModelContainer}>
          <div className={styles.carModel}>
            <CarModelViewer />
          </div>
        </div>
      


      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
