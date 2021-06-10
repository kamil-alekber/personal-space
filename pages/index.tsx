import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function StartPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Start Page</title>
      </Head>
      <h2>Start Page</h2>
      <section>
        <h3>Current agenda:</h3>
        <ul>
          <li>Looking for a job opening</li>
          <li>Building a strong body</li>
        </ul>
      </section>

      <section>
        <h3>Things I want to study:</h3>
        <ul>
          <li>
            <img src="" alt="" />
            With the high demand on digital currency I intend on studying this
            new fascinating technology with all of its main derivatives:
            blockchain, smart contract and dapp
          </li>
          <li>
            <img src="" alt="" />
            Rust: a new language for the future with IoT
          </li>
        </ul>
      </section>

      <section>
        <h3>Unfulfilled possibilities</h3>
        <ul>
          <li>Piano (need self-discipline)</li>
          <li>Drawing anime-characters</li>
        </ul>
      </section>
      <hr />
      <footer>
        E-mail: <a href="mailto:kamil.alekber@gmail.com">Kamil Alekber</a>
      </footer>
    </div>
  )
}
