import Head from "next/head"
import Link from "next/link"

// Step 2: This component is rendered from the server (Server-Side Rendering) SSR
export default function Video({ video }) {
  if (!video) return (
    <div>
      <p>Video not found</p>
      <Link href="/browse">Back</Link>
      </div>
  );

  return (
    <>
      <Head>
        <title>{video.desc}</title>
      </Head>
      <h1>{video.link}</h1>
      <p>{video.desc}</p>
      <Link href="/browse">Back</Link>
    </>
  )
}

// STEP 1: This function will be executed at the server before loading the page.
export async function getServerSideProps({ params }) {
  console.debug('params', params)
  const res = await fetch(`http://localhost:3000/api/browse/videos/${params.id}`)
  const video = await res.json()
  console.debug('blog 1', video)
  return { props: { video } }
}