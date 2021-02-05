export function Footer({footer}) {
    return (
        <div className="footer">
            <div className="contact">
                <p>{footer.footer.contact.email}</p>
                <p>{footer.footer.contact.phone}</p>
                <p>{footer.footer.contact.address.country}</p>
                <p>{footer.footer.contact.address.street}</p>
                <p>{footer.footer.contact.address.state}</p>
            </div>
            <div className="links">
                <Links links={footer.footer.links} />
            </div>
        </div>
    )
}

function Links ({links}) {
    return (
        <div>
            {
                links.map((item, idx) => {
                    return <a key={idx} href={item.to}>{item.label}</a>
                })
            }
        </div>
    )
}