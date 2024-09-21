
import Addy from "./addo";  //IMPORT ADDY FROM ADDO.TSX
///////THIS IS JuST SOME FLUFFFF
function MackerelHeader() {
    return (
        <div style={{ justifyContent: 'flex-start' }}>
            <h2>EVERYONE'S GOT TO EAT</h2>
            <h6>MACKEREL PIZZA IS COMING SOON</h6>
            <img src="https://i.redd.it/8lcxmwra2gb81.png" style={{ width: '400px', filter: 'drop-shadow(0 0 15px #660f00)' }} />
            <br></br>
            <h2>ONLY ₽33.50 </h2>
            <h5>(prices does not include shipping)</h5>
            <Addy />
        </div>
    );
}




export default MackerelHeader;
