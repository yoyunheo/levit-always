import starfull from './images/starfull.png';
import starhalf from './images/starhalf.png';

function Review1() {
    return (

        <div>
    <div> 
        <div style={{backgroundColor:' rgb(255, 255, 255)', padding: '0px 16px 12px'}}>
            <div style={{backgroundColor: 'rgb(255, 255, 255)'}}>
                <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row', backgroundColor: 'rgb(250, 250, 250)', paddingTop: '12px', paddingBottom: '12px', paddingLeft: '12px', borderRadius: '8px'}}>
                    <span>
                    <img src={starfull} alt width="26" height="26"/>
                            <img src={starfull} alt width="26" height="26"/> 
                            <img src={starfull} alt width="26" height="26"/> 
                            <img src={starfull} alt width="26" height="26"/> 
                            <img src={starhalf} alt width="26" height="26"/>      
                    </span>
                    <div style={{width: '12px'}}></div>
                    <div style={{fontSize: '20px', fontWeight: 'bold', color: 'rgb(158, 158, 158)'}}>4.5</div>
                </div>
            </div>
        </div>
        <div style= {{height: '1px', backgroundColor: 'rgb(224, 224, 224)', marginLeft: '16px', marginRight: '16px'}}></div>
    </div>
     </div>
    ); 
  }
  
  export default Review1;