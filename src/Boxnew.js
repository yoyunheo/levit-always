import starempty from './images/starempty.png';
import starfull from './images/starfull.png';
import starhalf from './images/starhalf.png';

function Boxnew(properties) {

    var product = properties.product

    return (
        <div role="button" tabIndex="0" style={{position: 'relative', width: '100%', paddingBottom: '24px', outline: 'none',cursor: 'pointer'}}>
            <div>
                <img src={product.image} style={{objectFit: 'cover', width: '100%', height: '100%', borderRadius: '8px'}}></img>
                <div style={{height: '168px'}}>
                    <div className="LinesEllipsis" style={{fontSize: '16px'}}>
                        {product.name}
                    <wbr></wbr>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', marginTop: '8px'}}>
                        <div style={{color: 'rgb(102, 102, 102)', fontSize: '14px', fontWeight: 'bold',}}>
                            {product.discountPercent} 
                        </div>
                        <div style={{ fontSize: '14px', marginLeft: '2px', color: 'rgb(153, 153, 153)', textDecorationLine: 'line-through'}}>
                            {wonpricedescription(product.originalprice)}
                        </div>
                    </div>

                    <div style={{color: 'rgb(234, 63, 73)', fontSize: '16px', fontWeight: 'bold', marginTop: '0px'}}>
                        {wonpricedescription(product.price)}
                    </div>

                    <div style={{marginTop: '8px', display: 'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
                        <span>
                            <img src={starfull} width="16" height="16"/>
                            <img src={starfull} width="16" height="16"/> 
                            <img src={starfull} width="16" height="16"/> 
                            <img src={starfull} width="16" height="16"/> 
                            <img src={starhalf} width="16" height="16"/>  
                        </span>
                        <div style={{fontSize: '10px', paddingBottom: '4px', paddingLeft: '2px', color: 'rgb(153, 153, 153)', fontWeight: 'bold'}}>({product.reviewCounts})</div> 
                    </div>
                </div>
            </div>   
        </div>
    ); 
  }

export default Boxnew;

function wonpricedescription(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
}
