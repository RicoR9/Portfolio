import type { ReactNode } from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const Layout = ({children}: {children: ReactNode}) => {
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            <Header
                name="Rico Rimm"
                logo="/logo.svg"
                title="Portfolio"
            >
                <Navigation />
            </Header>

            <main className="flex-1 pt-32 relative">
                <img src="/logo.svg" alt="Logo" className="absolute left-1/2 -translate-x-1/2 md:left-60 md:translate-x-0 top-80 w-64 h-64 md:w-96 md:h-96 opacity-80 -z-20"/>
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
