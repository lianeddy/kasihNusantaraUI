import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head'
import { Button } from 'semantic-ui-react'

const Click = () => console.log('halo')

const Post = props => (
  <Layout>
    <Head>
    <meta property="og:title" content={props.show.name} />
    <meta property="og:url" content={`https://6-fetching-data.lianeddy.now.sh/p/${props.show.id}/`} />
    <meta property="og:description" content={props.show.name}/>
    <meta property="og:image" content={props.show.image.medium}/>
    </Head>
    <a href={`https://api.whatsapp.com/send?text=https://6-fetching-data.lianeddy.now.sh/p/${props.show.id}/`} target="_blank" rel="noopener noreferrer">WA</a>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
    <img src={props.show.image.medium} />
    <Button onClick={Click}>Click Here</Button>
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log( `Fetched Show: ${show.name}`)

  return { show };
}

export default Post;
