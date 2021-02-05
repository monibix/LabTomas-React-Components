import './Hero.css'
export function Hero({hero}) {
    console.log('HERO', hero)
    return (
        <div className="hero">
            <div className="title">
                <h1>{hero.hero.title}</h1>
                <h2>{hero.hero.subtitle}</h2>
            </div>
            <div className="hero-image">
                <img src={hero.hero.img.src} alt={hero.hero.img.alt}/>
            </div>
        </div>
    )
}