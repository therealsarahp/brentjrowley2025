import styles from './footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.main}>
            <div className={styles.credit}>
                <span>Designed and Hand Coded by</span>
                <a href="https://wildiriswebdesign.com" target="_blank" rel="noopener">&nbsp;Wild Iris Web</a>
                <span className={styles.copyright}>
            Copyright 2024 - Present</span>
            </div>
        </footer>

    )
}