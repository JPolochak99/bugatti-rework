"use client"
import styles from "./sideMenu.module.css";

export default function sideMenu({ isOpen, onClose }: {isOpen: boolean; onClose: () => void }){
    if(!isOpen) return null;

    return(
        <div className={styles.overlay} onClick={onClose}>
      <div className={styles.sideMenu} onClick={(e) => e.stopPropagation()}>
        <div className={styles.closeBtn} onClick={onClose}>
          ✕
        </div>
        <ul>
          <li>Home</li>
          <li>Models</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}