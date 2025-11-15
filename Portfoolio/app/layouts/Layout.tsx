import type { ReactNode } from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const Layout = ({children}: {children: ReactNode}) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header name="Rico Rimm" title="FrontEnd Developer" logo="/logo.svg">
                <Navigation />
            </Header>

            <main className="pt-32">
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