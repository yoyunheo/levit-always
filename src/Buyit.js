
function Buyit() {
    return (
        <div style={{position: "fixed", paddingBottom: "env(safe-area-inset-bottom)", bottom:0, left:0, right:0, backgroundColor:"#fff", display:"block"}}>
            <div style={{height: '64px', backgroundColor: 'rgb(255, 255, 255)', display: 'flex', flexDirection: 'row', flex: '1 1 0%'}}>
                <button type="button" style={{borderColor: 'rgb(248, 196, 84)', borderStyle: 'solid', display: 'flex', flexDirection: 'column', color: 'rgb(255, 255, 255)', flex: '0.9 1 0%', alignItems: 'center', backgroundColor: 'rgb(248, 196, 84)', justifyContent: 'center', marginTop: '8px', marginBottom: '8px', marginLeft: '8px', borderRadius: '4px'}}>
                    <div style={{fontSize: '16px', fontWeight: 'bold',}}>
                    {wonpricedescription(singlePurchase)}
                    </div>

                    <div style={{fontSize: '16px', fontWeight: 'bold',}}> 혼자 구매하기</div>
                </button>
                <button type="button" style={{borderColor: 'rgb(234, 63, 73)', borderStyle: 'solid', display: 'flex', flexDirection: 'column', color: 'rgb(255, 255, 255)', flex: '0.9 1 0%', alignItems: 'center', backgroundColor: 'rgb(234, 63, 73)', justifyContent: 'center', margin: '8px', borderRadius: '4px'}}>
                    <div style={{fontSize: '16px', fontWeight: 'bold',}}>
                    {wonpricedescription(dualPurchase)}
                    </div>

                    <div style={{fontSize: '16px', fontWeight: 'bold',}}> 2인 팀구매 열기</div>
                </button>
            </div>            
        </div>
    ); 
  }
  
export default Buyit;

var singlePurchase = 18900
var dualPurchase= 5500

  function wonpricedescription(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
} 
