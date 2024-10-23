export function Nav() {
    const navLinks = ['https://www.google.com', 'https://www.youtube.com', 'https://www.github.com']
    return (
        <div className="nav">
            <ul>
                {navLinks.map((link, index) => (
                    <li key={index}><a href={link}>{link}</a></li>
                ))}
            </ul>
        </div>
    );
}