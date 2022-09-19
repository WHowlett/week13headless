import Head from 'next/head';
import { getAllIds, getData } from '../lib/data';


//Create getStaticProps()
export async function getStaticProps( { params } ) {
    const itemData = await getData(params.id);
    return {
        props: {
            itemData
        }
    };
}



//Create getStaticPath() to report to next all possible dynamic URLS
export async function getStaticPaths() {
    const paths = getAllIds();
    return {
        paths,
        fallback: false
    };
}

//Create React Component
export default function Entry({ itemData }) {
    <article className="card col-6">
        <div className="card-body">
          <h5 className="card-title">{itemData.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{itemData.who}</h6>
          <p className="card-text">{itemData.birthdate}</p>
          <p className="card-text">{itemData.birthplace}</p>
        </div>
      </article>
}