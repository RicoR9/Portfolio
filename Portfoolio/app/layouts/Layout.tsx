import type { ReactNode } from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const Layout = ({children}: {children: ReactNode}) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header
                name="Rico Rimm"
                logo="/logo.svg"
                title="Portfolio"
            >
                <Navigation />
            </Header>

            <main className="flex-1 pt-32">
                <img src="/logo.svg" alt="Logo" className="absolute left-60 top-80 w-96 h-96 opacity-80 -z-20"/>
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