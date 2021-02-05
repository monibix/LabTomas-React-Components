export function Hero({hero}) {
    console.log('HERO', hero)
    return (
        <div className="hero">
            <p>HEROOO</p>
            <h1>{hero.hero.title}</h1>
            <h2>{hero.hero.subtitle}</h2>
            <img src={hero.hero.img.src} alt={hero.hero.img.alt}/>
        </div>
    )
}