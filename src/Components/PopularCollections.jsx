import React from 'react'
import styles from './PopularCollections.module.css'

const images = [
  { src: "/images/image1.jpeg", size: "large" },
  { src: "/images/image2.jpeg", size: "tall" },
  { src: "/images/image3.jpeg", size: "wide" },
  { src: "/images/image4.jpeg", size: "small" },
  { src: "/images/image5.jpeg", size: "small" },
  { src: "/images/image6.jpeg", size: "tall" },
  { src: "/images/image7.jpeg", size: "wide" },
  { src: "/images/image8.jpeg", size: "small" },
  { src: "/images/image9.jpeg", size: "large" },
  { src: "/images/image10.jpeg", size: "small" }
]

const PopularCollections = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Popular Collections</h2>
      <div className={styles.imageGrid}>
        {images.map((img, idx) => (
          <div key={idx} className={`${styles.imageCard} ${styles[img.size]}`}>
            <img src={img.src} alt={`Collection ${idx + 1}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PopularCollections