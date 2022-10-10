import logo from './images/AppIcon.png';
import arrow from './images/arrow.png';

function Header() {
  return (
    <div style={{backgroundColor: 'rgb(255, 255, 255)'}}> 
      <div style={{position: 'absolute', top: "0px", left: "0px", right: "0px", backgroundColor: "rgb(255,255,255)"}}>
        <div style={{padding:"8px 16px"}} >
          <button onClick={ () => { window.location.href = "https://alwayzshop.ilevit.com/app" } } type='button' 
          style={{width: '100%', height: '100%', border: 'none', backgroundColor: 'rgb(255, 255, 255)', padding: '0px', fontSize: '16px', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div style={{display:'flex', flexDirection:'row', backgroundColor:'rgb(255,255,255)', height:'56px'}}>
              <img src={logo} width="56" height="56"/>
              <div style={{display:'flex', flexDirection:'column', marginLeft:"16px", alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                <div style={{fontSize:"15px", fontWeight:"bold", color:"rgb(51,51,51)"}}>조건없이 모든 상품</div>
                <div style={{fontSize:"15px", fontWeight:"bold", color:"rgb(51,51,51)"}}>무료배송!</div>
                <div style={{display: 'flex', flex: '1 1 0%'}}></div>
                <div style={{fontSize:'12px', color:'rgb(189,189,189)', fontWeight:'bold'}}>앱으로 더 많은 상품과 혜택받기</div>
              </div>
            </div>
            <div style={{border: '1.5px solid rgb(234,63,73)', width: '100px', height:'32px', borderRadius:'4px', display:'flex', justifyContent: 'center', alignItems:'center', color:'rgb(234,63,73)',fontSize:'14px',backgroundColor:'rgb(255,255,255)'}}>
              <div style={{marginLeft:'8px',marginRight:'2px'}}>앱으로 보기</div>
              <img src={arrow} width="14" height="14"/>     {}
            </div>    
          </button>
        </div>
        <div style={{height:'0.5px', backgroundColor: 'rgb(224, 224, 224)'}}></div>
      </div>
    </div>
  ); 
}

export default Header;
