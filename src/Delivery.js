import arrowgray from './images/arrowgray.png';

function Delivery() {
    return (
        <button type="button" style={{display: 'flex', width: '100%', padding: '16px', marginLeft: '0px', marginRight: '0px', border: 'none', flexDirection: 'row', backgroundColor: 'rgb(255, 255, 255)', alignItems: 'center'}} >
            <div style={{color:' rgb(51, 51, 51)', fontSize: '18px', fontWeight: 'bold'}}>배송/교환/반품 정책</div>
            <div style={{flex: '1 1 0%'}}></div>
        
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <div style={{color: 'rgb(153, 153, 153)', fontSize: '16px'}}></div>
                <img src={arrowgray} alt width="18" height="18"/>
                </div>
        </button>
      
    ); 
  }
  
  export default Delivery;