// Package imports
import Head from "next/head";

// Component imports
import PageLayout from "../components/Layouts/PageLayout";

// Style imports
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Billie Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/CS-E/billie-dashboard">Billie the bot!</a>
        </h1>
      </main>
        
    </div>
  )
}

const IndexLayout = PageLayout(Home);
export default IndexLayout;