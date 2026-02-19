function Footer({year, est, author}) {
    return (
        <footer className="text-center py-4">
            <p>{year} | {est} | {author}</p>
        </footer>
    )
}
export default Footer;