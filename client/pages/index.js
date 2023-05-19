import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Common.module.css'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>ACAP Assets CMS</title>
        <meta name="description" content="CMS for managing common ACAP assets and files." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Welcome to the ACAP Assets CMS app.
          </p>
        </div>

        <div className={styles.center}>
          <div className={styles.logoContainer}>
            <div className={styles.thirteen}>
              <Image
                src="images/icons/icon-cms.png"
                alt="13"
                width={64}
                height={64}
                priority
              />
            </div>
            <h1>
              ACAP Assets CMS
            </h1>

            <div>

            </div>
          </div>
        </div>

        <div className={styles.grid}>
          <Link
            href="/cms"
            className={styles.card}
          >
            <h2>
              CMS
            </h2>
            <p>
              Content Management System (CMS) for common ACAP assets and files.
            </p>
          </Link>

          <Link
            href="/cards/gallery/?category=puppies"
            className={styles.card}
          >
            <h2>
              Assets Cards
            </h2>
            <p>
              View Assets Cards by category here.
            </p>
          </Link>
        </div>
      </main>
    </div>
  )
}
