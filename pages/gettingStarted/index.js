import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from 'components/header'

function HomePage() {
    return (
        <main role="main">

            <Head>
                <title>Getting Started</title>
            </Head>

            <Header />

            <h1>iOS Phone</h1>
            <h1>Android Phone</h1>
            <h1>Tablets</h1>
            <h1>Desktops</h1>


        </main>
    )
}

export default HomePage