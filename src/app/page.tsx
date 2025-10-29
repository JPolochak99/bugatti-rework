"use client";
import styles from "./page.module.css";
import CarModelViewer from "../../components/carModel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import SideMenu from "../../components/menu/sideMenu";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'



library.add(fas, far, fab)

import React, { useState, useEffect } from "react";



import { useRef } from 'react';





export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <div className={styles.landingPageContainer}>


          <div className={styles.navBar}>

            <div className={styles.menuContainer} onClick={() => setMenuOpen(true)}>
              <FontAwesomeIcon icon={["fas", "bars"]} />
              <h4>Menu</h4>
            </div>

            <div className={styles.bugattiTextContainer}>
              <h1>BUGATTI</h1>
            </div>

            <div className={styles.profileConatiner}>
              <FontAwesomeIcon icon={["far", "user"]} />
            </div>

          </div>

          <SideMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

          <div className={styles.discoverMoreContainer}>
            <div className={styles.discoverMoreModel}>
              <h1>Brouillard</h1>
            </div>

            <div className={styles.discoverMoreBtn}>
              <a>Discover More</a>
            </div>
          </div>

          <video className={styles.brouillardVideo} autoPlay muted loop>
            <source src="/brouillard.mp4"></source>
          </video>

        </div>


        <div className={styles.popularCarContainer}>
          <div className={`${styles.popularCarCard} ${styles.divoCard}`}>
            <div className={styles.cardBg}>
              <img src="/divo.jpg"></img>
            </div>

            <div className={styles.nameIconContainer}>
              <div className={styles.cardTitle}>
                <h1>Divo</h1>
              </div>
              <div className={styles.cardIcon}>
                icon
              </div>
            </div>
          </div>

          <div className={`${styles.popularCarCard} ${styles.chironCard}`}>
            <div className={styles.cardBg}>
              <img src="/chiron.jpg"></img>
            </div>

            <div className={styles.nameIconContainer}>
              <div className={styles.cardTitle}>
                <h1>Chiron</h1>
              </div>
              <div className={styles.cardIcon}>
                icon
              </div>
            </div>
          </div>

          <div className={`${styles.popularCarCard} ${styles.veyronCard}`}>
            <div className={styles.cardBg}>
              <img src="/veyron.jpg"></img>
            </div>

            <div className={styles.nameIconContainer}>
              <div className={styles.cardTitle}>
                <h1>Veyron</h1>
              </div>
              <div className={styles.cardIcon}>
                icon
              </div>
            </div>
          </div>

        </div>

        <div className={styles.motto}>
          <h1>If Comparable, It Is No Longer BUGATTI</h1>
        </div>

      <div className={styles.moreCarsContainer}>    
        <div className={styles.row}>
          <div className={`${styles.moreCarsCard} ${styles.tourbillon}`}>
            <div className={styles.cardVideo}>
              <video src="/tourbillon.mp4" autoPlay muted loop playsInline></video>
            </div>

            <div className={styles.moreCardsTextContainer}>
              <div className={styles.cardTitle}>
                <h1>Tourbillon</h1>
              </div>

              <div className={styles.cardDetails}>
                <h1>Details</h1>
              </div>
            </div>
          </div>

          <div className={`${styles.moreCarsCard} ${styles.bolide}`}>
            <div className={styles.cardVideo}>
              <video src="/bolide.mp4" autoPlay muted loop playsInline></video>
            </div>

            <div className={styles.moreCardsTextContainer}>
              <div className={styles.cardTitle}>
                <h1>Bolide</h1>
              </div>

              <div className={styles.cardDetails}>
                <h1>Details</h1>
                <FontAwesomeIcon icon={["fas", "arrow-right"]} />
              </div>
            </div>
          </div>
        </div>


        <div className={styles.row}>
          <div className={`${styles.moreCarsCard} ${styles.mistral}`}>
            <div className={styles.cardVideo}>
              <video src="/mistral.mp4" autoPlay muted loop playsInline></video>
            </div>

            <div className={styles.moreCardsTextContainer}>
              <div className={styles.cardTitle}>
                <h1>Mistral</h1>
              </div>

              <div className={styles.cardDetails}>
                <h1>Details</h1>
              </div>
            </div>
          </div>

          <div className={`${styles.moreCarsCard} ${styles.centodieci}`}>
            <div className={styles.cardVideo}>
              <video src="/bolide.mp4" autoPlay muted loop playsInline></video>
            </div>

            <div className={styles.moreCardsTextContainer}>
              <div className={styles.cardTitle}>
                <h1>Centodieci</h1>
              </div>

              <div className={styles.cardDetails}>
                <h1>Details</h1>
              </div>
            </div>
          </div>
        </div>


        <div className={styles.row}>
          <div className={`${styles.moreCarsCard} ${styles.brouillard}`}>
            <div className={styles.cardVideo}>
            <video src="/brouillard2.mp4" autoPlay muted loop playsInline></video>
            </div>

            <div className={styles.moreCardsTextContainer}>
              <div className={styles.cardTitle}>
                <h1>Brouillard</h1>
              </div>

              <div className={styles.cardDetails}>
                <h1>Details</h1>
              </div>
            </div>
          </div>

          <div className={`${styles.moreCarsCard} ${styles.lavoiturenoire}`}>
            <div className={styles.cardVideo}>
              <video src="/lavoiturenoire.mp4" autoPlay muted loop playsInline></video>
            </div>

            <div className={styles.moreCardsTextContainer}>
              <div className={styles.cardTitle}>
                <h1>La Voiture Noire</h1>
              </div>

              <div className={styles.cardDetails}>
                <h1>Details</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <footer className={styles.footer}>
        <div className={styles.footerCols}>
          <div>
            <h1>HYPER SPORTS CARS</h1>
            <h2>Brouillard</h2>
            <h2>Divo</h2>
            <h2>Chiron</h2>
            <h2>Veyron</h2>
            <h2>Tourbillion</h2>
            <h2>Bolide</h2>
            <h2>Mistral</h2>
            <h2>Centodieci</h2>
            <h2>La Voiture Noire</h2>
          </div>
          <div>
            <h1>LA MARQUE</h1>
            <h2>Discover Bugatti</h2>
            <h2>Careers</h2>
            <h2>Newsroom</h2>
            <h2>Class Icons</h2>
            <h2>Historic Models</h2>
            <h2>Racing Legends</h2>
            <h2>Les Partrons</h2>
            <h2>La Maison Pur Sang</h2>
            <h2>La Voiture Sur Mesure</h2>
            <h2>Dealer Finder</h2>
            <h2>Contact</h2>
          </div>
          <div>
            <h1>LIFESTYLE</h1>
            <h2>Art of Living</h2>
            <h2>Apparel & Accessories</h2>
            <h2>Watches & Jewellery</h2>
            <h2>Collectibles & Model Cars</h2>
            <h2>Store</h2>
          </div>
          <div>
            <h1>CUSTOMER SERVICE</h1>
            <h2>Individual Service and Contact</h2>
            <h2>Maintenance</h2>
            <h2>Server Partner Network</h2>
            <h2>Passeport Tranquillite</h2>
            <h2>Warranty</h2>
            <h2>Roadside Assistance</h2>
            <h2>Genuince Parts</h2>
            <h2>BUGATTI Accessories</h2>
          </div>

          

          
        </div>
        <div className={styles.sasContainer}>
            <div>
              <h1>2025 BUGATTI AUTOMOBILES S.A.S.</h1>
            </div>
        </div>

        <div className={styles.policyContainer}>
            <div className={styles.policies}>
              <h2>Legal Notice</h2>
              <h2>Priavte Policy</h2>
              <h2>Cookie Policy</h2>
              <h2>Privacy Settings</h2>
              <h2>Compliance & Whistleblower</h2>
              <h2>Fuel Consumption</h2>
              <h2>Modern Slavery Statement</h2>
            </div>
          </div>

          <div className={styles.footerIconContainer}>
            <div className={styles.footerIcons}>
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
              <FontAwesomeIcon icon={["fab", "instagram"]} />
              <FontAwesomeIcon icon={["fab", "twitter"]} />
              <FontAwesomeIcon icon={["fab", "youtube"]} />
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </div>
          </div>


          
      
      </footer>

      </main>
      
    </div>
  );
}
