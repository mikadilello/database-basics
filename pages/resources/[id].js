import { getResourceIds, getResourceData } from '../../lib/resources';
// import Layout from '../../components/layout';

export async function getStaticPaths() {
  const paths = await getResourceIds();
  console.log(paths);
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const itemData = await getResourceData(params.id);
  console.log(itemData);
  return {
    props: {
      itemData
    }
  };
}

export default function Entry({ itemData }) {
  console.log(itemData);
  return (
    
      <article className="card col-6">
        <div className="card-body">
          <h2 className="card-title">{itemData.data.name}</h2>
          <h4 className="card-subtitle mb-2 text-muted">{itemData.data.phone}</h4>
          <p className="card-text">{itemData.data.birthdate}</p>
          <a href={'mailto:' + itemData.data.email} className="card-link">{itemData.data.email}</a>
        </div>
      </article>
    
  );
}