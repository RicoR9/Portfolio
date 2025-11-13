import type { ReactNode } from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const Layout = ({children}: {children: ReactNode}) => {
    return (
        <div className="flex flex-col">
        <div className="bg-neutral-900 shadow-sm">
        <Header name="Rico Rimm" title="FrontEnd Developer">
            <Navigation />
        </Header>
        </div>

        <main>
            {children}
        </main>

        <Footer
        year={2025}
        est="Estonia"
        author="Rico Rimm"
        />
        </div>
    )
}

export default Layout;