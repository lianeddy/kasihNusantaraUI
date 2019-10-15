import Header from './Header';
import Head from 'next/head'

export default function Layout(props) {
  return (
    <div>
        <Head>
          <title>Kasih Nusantara</title>
          {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" /> */}
          <meta property="og:title" content={props.metaTitle ? props.metaTitle : "Kasih Nusantara Dummy"} />
          <meta property="og:url" content={props.metaUrl ? props.metaUrl : "Kasih Nusantara Dummy"} />
          <meta property="og:description" content={props.metaDescription ? props.metaDescription : "Kasih Nusantara Dummy"}/>
          <meta property="og:image" content={props.metaImage ? props.metaImage : "Kasih Nusantara Dummy"}/>
        </Head>
        <Header />
        <div>
          {props.children}
        </div>
    </div>
  )
}
