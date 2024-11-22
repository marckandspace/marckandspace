import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2024 Music Tourism PH. All Rights Reserved.</p>
      <div>
        <a href="https://facebook.com/musictourismph" target="_blank">Facebook</a> | 
        <a href="https://instagram.com/musictourismph" target="_blank">Instagram</a>
      </div>
    </footer>
  );
}
