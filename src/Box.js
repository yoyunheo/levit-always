import starempty from './images/starempty.png';
import starfull from './images/starfull.png';
import starhalf from './images/starhalf.png';

function Box(properties) {

    var product = properties.product

    return (<>
    <div onClick={ () => { window.location.href = "https://alwayzweb.ilevit.com/items/" + product.itemId }} >
        <div role="button" tabIndex="0" style={{position: 'relative', width: '198.4px', paddingLeft: '16px', paddingRight: '16px', paddingBottom: '12px', outline: 'none'}}>
            <img src={product.image} style={{objectFit: 'cover', width: '198.4px', height: '198.4px', borderRadius: '8px'}}></img>

            <div style={{display: 'flex', flexDirection: 'row', paddingTop: '4px', paddingBottom: '4px'}}>
                <div style={{display: 'flex', height: '20px', alignSelf: 'center', backgroundColor: 'rgb(236, 146, 150)', borderRadius: '4px', alignItems: 'center', justifyContent: 'center', paddingRight: '8px', paddingLeft: '8px'}}>
                   <div style={{color: 'rgb(255, 255, 255)', fontSize: '10px', fontWeight: 'bold'}}>2인팀구매</div>
                </div>
                <div style={{width: '4px'}}></div>
            </div>

            <div className="LinesEllipsis" style={{fontSize: '14px'}}> {product.name} </div>
            <wbr></wbr>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: '6px'}}>
                <div style={{color: 'rgb(102, 102, 102)', fontSize: '14px', fontWeight: 'bold'}}> {product.discountPercent} </div>
                <div style={{fontSize: '14px', marginLeft: '2px', color: 'rgb(153, 153, 153)', textDecorationLine: 'line-through'}}> {wonpricedescription(product.originalprice)}</div>
            </div>

            <div style={{fontSize: '20px', fontWeight: 'bold', color: 'rgb(234, 63, 73)'}}> {wonpricedescription(product.price)}</div>

            <div style={{marginTop: '6px', display: 'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
                <span>
                    <img src={starfull} width="14" height="14"/>
                    <img src={starfull} width="14" height="14"/> 
                    <img src={starfull} width="14" height="14"/> 
                    <img src={starfull} width="14" height="14"/> 
                    <img src={starhalf} width="14" height="14"/>  
                </span>
                <div style={{fontSize: '10px', paddingBottom: '4px', paddingLeft: '2px', color: 'rgb(153, 153, 153)', fontWeight: 'bold'}}>({product.reviewCounts})</div>  {/**/}   
            </div>
        </div>
        </div>
    </>); 
  }


function wonpricedescription(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
}

export default Box;

// 0~0.5 -> 반빈빈빈빈
// 0.5~1 -> 다빈빈빈빈
// //...
// 3.5~4.0 -> 다다다다빈
// 4.0~4.5 -> 다다다다반
// 4.5~5.0 -> 다다다다다

// 4.5 <= X
// 4.0 <= X < 4.5
//        X < 4.0
