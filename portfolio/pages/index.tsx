// pages/index.tsx

import Header from '@/components/Header';
import type { GetStaticProps } from 'next';
import Head from 'next/head'
import Hero from '@/components/Hero';

const Home = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen">
      <Head >
        <title className="text-black">Steve's Portfolio</title>
      </Head>

      <Header />

      {/*Hero */}
      <section id="hero">
        <Hero />
      </section>


      {/*About */}

      {/*Experience */}

      {/*Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // Static props logic
  return {
    props: {
      // props here
    },
  }
}

export default Home;
