import {Link} from "./index";

export default function Footer() {
    
    return (<footer className="mt-40 mb-4 text-center text-sm font-mono text-gray-400">

        <img src="https://solana.com/branding/horizontal/logo-horizontal-gradient-dark.png"
             className="w-40 mx-auto my-2" alt="Solana logo" loading="lazy"/>
        <small>
            <Link url="https://plutonium.network" title="PLUTONIUM NETWORK" hideIcon={true}/>
            @ <Link url="https://buildingoutloud.solana.com/" title="Solana- Build Out Loud" hideIcon={true}/>
        </small>
    </footer>)
}