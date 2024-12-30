// pages/index.tsx

import Header from '@/components/Header';
import type { GetStaticProps } from 'next';
import Head from 'next/head'

const Home = () => {
  return (
    <div className="bg-">
      <Header />
      <h1 className="text-black">Steve's Portfolio</h1>
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
