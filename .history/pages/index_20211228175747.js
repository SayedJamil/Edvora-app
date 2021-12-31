import Head from 'next/head'
import Mainpage from './MainPage'


export default function Home({ searchResults }) {
  return (
    <div className="bg-[#292929] w-full h-full">
      <Head>
        <title>Edvora</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="/dist/output.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
      </Head>

      <main>
        <Mainpage />
      </main>

      <footer className="">

      </footer>
    </div>
  )
}

export async function getServerSideProps() {
  const searchResults = await fetch('https://links.papareact.com/isz').then(res => res.json());
  return {
    props: {
      searchResults,
    }
  };

}