import ButtonPrimary from "../Components/ButtonPrimary";

export default function NotConnected(props: { action: () => * }) {
    return<> 
     <br/> <br/>
    { <div className="text-white text-5xl p-4 mx-auto max-w-3xl font-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            Easy, Secure And Non-custodial <br/> Progressive Crypto Payments
            </div>}
            <br/>
            <div className="text-white text-xl p-4 mx-auto max-w-3xl  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            A DeFi primitive that represents a progressively released payment. It's a powerful concept that serves as a building block for various payment-related solutions.
            </div>
            <br/> <br/>
    <div className="max-w-md mx-auto">
        {/* <iframe width="100%" height={270} src="https://www.youtube-nocookie.com/embed/urlid"
                title="Plutonium Network Demo" frameBorder="0"
                allowFullScreen>&nbsp;</iframe> */}
        <ButtonPrimary className="font-bold text-2xl my-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                       type="button"
                       onClick={props.action}>
            Connect
        </ButtonPrimary>
    </div>;
    </>
}
