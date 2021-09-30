import Head from 'next/head';
import Link from 'next/link';
import { getSortedList } from '../lib/resources';

export async function getStaticProps() {
  const allData = await getSortedList();
  return {
    props: {
      allData
    }
  }
  
}
export default function Home({ allData }) {
  return (
      <Home>
        <h1>List of Names</h1>
        <div className="list-group">
          {allData ? allData.map(({ id, name }) => (
            <Link key={id} href={`/${id}`}>
              <a className="list-group-item list-group-item-action">{name}</a>
            </Link>
          )) :null }
        </div>
      </Home>
  );
}