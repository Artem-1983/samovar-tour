import React, { Suspense, lazy } from 'react'
import Header from './../Header/Header'
import Footer from './../Footer/Footer'

// Lazy load the Router component
const Routers = lazy(() => import('./../../router/Routers'))

const Layout = () => {
    return (
        <>
            <Header />
            <Suspense fallback={<div className="loading">Loading...</div>}>
                <Routers />
            </Suspense>
            <Footer />
        </>
    )
}

export default Layout
