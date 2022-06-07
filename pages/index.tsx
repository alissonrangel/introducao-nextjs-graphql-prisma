import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import GqlClient from "../graphql/apollo-client";

import { gql } from "@apollo/client";
import { Link } from '../types/Link';
import { isTypedArray } from 'util/types';

type Props = {
  links: Link[]
}

const Home = ({ links }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Lista de Links
        </h1>

        <p className={styles.description}>
          Total de links: {links.length}
        </p>

        <div className={styles.grid}>
          { links.map((it, index) => 
            <a className={styles.card}>
              <h2>{it.title} &rarr;</h2>
              <p>{it.url}</p>
            </a>
            
          )}
          
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const { data } = await GqlClient.query({
    query: gql`
      query {
        links {
          id
          title
          url
        }
      }
    `
  })
  
  console.log(data.links);
  

  return {
    props: {
      links: data.links
    }
  }
}
