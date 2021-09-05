import {useState} from "react";
import {Account, CreateStreamForm, Curtain} from "../Components";
import StreamsContainer from "../Containers/StreamsContainer";
import {useNetworkContext} from "../Contexts/NetworkContext";
import banner1 from './cards/1.png'
import banner2 from './cards/2.png'

export default function Main() {
    const [loading, setLoading] = useState(false)
    const {selectedWallet} = useNetworkContext()

    return (
        <>
        <div >
        {   
            <div  className="mx-auto grid grid-cols-1 gap-16 max-w-lg xl:grid-cols-2 xl:max-w-5xl">

                <div className="bg-opacity-10 hover:bg-opacity-10 shadow rounded-lg">
                <img src={banner1} alt="Plutonium logo" height="400" width="400" className="mx-auto shadow rounded-lg"/>
                </div>

                <div className="bg-opacity-10 hover:bg-opacity-10 shadow rounded-lg">
                <img src={banner2} alt="Plutonium logo" height="400" width="400" className="mx-auto shadow rounded-lg"/>
                </div>

            </div>
            }
    </div>
    <br/>
        <div className="mx-auto grid grid-cols-1 gap-16 max-w-lg xl:grid-cols-1 xl:max-w-5xl">
           
            <div className="mb-8 p-4">
                <Curtain visible={loading} />
                <div className="p-4 bg-blue-500 bg-opacity-10 hover:bg-opacity-10 shadow rounded-lg">
                <Account wallet={selectedWallet} loading={loading} setLoading={setLoading}/>
                </div>
                <br/>
                <div className="p-4 bg-blue-500 bg-opacity-10 hover:bg-opacity-10 shadow rounded-lg" >
                <CreateStreamForm loading={loading} setLoading={setLoading}/>
                </div>
            </div>
            <StreamsContainer/>
        </div>
        </>
    )
}