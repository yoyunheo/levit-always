import arrowgray from './images/arrowgray.png';

function Review1() {
    return (
        <button type="button" style={{display: 'flex', width: '100%', padding: '16px', marginLeft: '0px', marginRight: '0px', border: 'none', flexDirection: 'row', backgroundColor: 'rgb(255, 255, 255)', alignItems: 'center'}} >
            <div style={{color:' rgb(51, 51, 51)', fontSize: '18px', fontWeight: 'bold'}}>상품후기 17,608건</div>
            <div style={{flex: '1 1 0%'}}></div>
        
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <div style={{color: 'rgb(153, 153, 153)', fontSize: '16px'}}>전체보기</div>
                <img src={arrowgray} alt width="18" height="18"/>
                </div>
        </button>
      
    ); 
  }
  
  export default Review1;