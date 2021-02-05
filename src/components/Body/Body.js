import './Body.css'

export function Body({body}) {
    return (
        <div className="body">
            <div className="utils-section">
                <h2>{body.body.utilsSection.sectionTitle}</h2>
                <UtilsList utilsList={body.body.utilsSection.cards} />
            </div>
            <div className="developers-section">
                <h2>{body.body.developersSection.desctionDescription}</h2>
                <DevelopersSection devSect={body.body.developersSection.developers}/>
            </div>
        </div>
    )
}

function UtilsList({utilsList}) {
    return (
        <div className="utils-card"> 
            <div className="utilsList-title">
                { utilsList.map((item, idx) => {
                    return <h4 key={idx}>{item.utilName}</h4>
                })
                }
            </div>
            <div className="utilsList-description">
                {
                    utilsList.map((item, idx)=>{
                        return <p key={idx}>{item.utilDescription}</p>
                    })
                }
            </div>
            <div className="utilsList-img">
                {
                    utilsList.map((item, idx)=>{
                        return <img key={idx} src={item.utilImg.src} alt={item.utilImg.alt}/>
                    })
                }
            </div>
        </div>
    )
}

function DevelopersSection({devSect}) {
    return (
        <div> 
            <div className="devSect-title">
                { 
                    devSect.map((item, idx) => {
                    return <h4 key={idx}>{item.name}</h4>
                })
                }
            </div>
            <div className="devSect-description">
                {
                    devSect.map((item, idx)=>{
                        return <p key={idx}>{item.description}</p>
                    })
                }
            </div>
            <div className="devSect-img">
                {
                    devSect.map((item, idx)=>{
                        return <img key={idx} src={item.developerImg.src} alt={item.developerImg.alt}/>
                    })
                }
            </div>
        </div>
    )
}