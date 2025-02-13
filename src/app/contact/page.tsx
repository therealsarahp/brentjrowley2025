import styles from './contact.module.css';
import Link from "next/link";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "CONTACT",
};

export default function Contact(){
    return(
        <div className={styles.page}>
            <main className={styles.main}>
                <section className={styles.sideHeader}>
                    <div className={styles.sideHeaderContainer}>
                        <h1>
                            CONTACT
                        </h1>
                        <div className={styles.contactList}>
                            <ul>
                                <li>

                                </li>

                            </ul>
                        </div>
                    </div>

                </section>
                <section className={styles.right}>
                    <div className={styles.follow}>
                        <h3>
                            FOLLOW ON SOCIAL
                        </h3>
                        <div >
                            <Link href={'https://www.facebook.com/bjrowleyart'}
                                  className={styles.socialLink}
                                  target={"_blank"}
                            >
                                <p>Facebook</p>
                            </Link>
                            <Link href={'https://www.instagram.com/bjrpaintings/'}
                                  className={styles.socialLink}
                                  target={"_blank"}
                            >
                                <p>Instagram</p>
                            </Link>
                        </div>
                    </div>
                    <div id={"subscribe"}>
                        <h3>
                            SUBSCRIBE TO NEWSLETTER
                        </h3>
                        <div>
                            <iframe
                                className={styles.newsletterForm}
                                src="https://docs.google.com/forms/d/e/1FAIpQLSe75SbxV3kyjfwSWxegHkCZ7z0VxoIJ__9GDpKOqugZAMWXMQ/viewform?embedded=true"
                                frameBorder={0} marginHeight={0} marginWidth={0}>Loading…
                            </iframe>
                        </div>

                    </div>

                </section>
            </main>
        </div>
    )
}