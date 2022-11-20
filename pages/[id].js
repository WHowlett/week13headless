import Head from 'next/head';
import { getAllIds, getData } from '../lib/data';
import Layout from '../components/layout';


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
    const path2 = await getAllIds();
    return {
        paths:path2,
        fallback: false
    };
}

//Create React Component
export default function Entry({itemData}){
    //console.log(itemData);
    var regex = /(<([^>]+)>)/ig
    ,   content = itemData.post_content
    ,   result = content.replace(regex, "");
    
    content = itemData.post_content
      return(
        <Layout>
          <div className="row text-center">
            <h1>{itemData.post_title}</h1>
          </div>
          <article className="card col-6 m-auto text-primary">
            <div className="card-body">
                <h5 className="card-title">{result}</h5>
            </div>
            
            
          </article>
        </Layout>
      )
    }