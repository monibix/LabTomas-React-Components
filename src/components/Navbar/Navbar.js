export function Navbar ({navbar}) {
    return (
        <div className="navbar">
            <div>
                <img src={navbar.navbar.logo.src} alt={navbar.navbar.logo.alt}/>
            </div>
            <div>
                {navbar.navbar.title}
            </div>
            <div className="links">
                <NavList links={navbar.navbar.links}/>
            </div>
        </div>
    )
}

function NavList({links}) {
    console.log('Navlist', links)
    return (
        <ul>
            {            
                links.map((item, idx) => {
                return <li key={idx}>{item.label}</li>
            })}
        </ul>
    )
}