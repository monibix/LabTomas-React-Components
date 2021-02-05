import {Navbar} from '../components/Navbar/Navbar';
import {Hero} from '../components/Hero/Hero';
import {Body} from '../components/Body/Body';
import {Footer} from '../components/Footer/Footer';

export function Main({valor}) {
    return (
        <div>
            <Navbar navbar={valor}/>
            <Hero hero={valor}/>
            <Body body={valor}/>
            <Footer footer={valor}/>
        </div>
    )
}