import Image from 'next/image';
import React from 'react';
import styles from './Styles.module.scss'

const ImgCard = ({ src, title }) => {
  return (
    <div className={styles.img_card}>
      <Image src={src} width='309px' height='212px' alt='' />
      <h5 className={styles.title}>{title ? title.toUpperCase() : 'MAMA SEWING'}</h5>
    </div>
  );
};

export default ImgCard;
