import './Navbar.css'
export function Navbar ({navbar}) {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={navbar.navbar.logo.src} alt={navbar.navbar.logo.alt}/>
            </div>
            <div className="title">
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
                return <li key={idx}><a href={item.to}>{item.label}</a></li>
            })}
        </ul>
    )
}