import starfull from './images/starfull.png';
import starhalf from './images/starhalf.png';
import IsCheapestImage from './images/IsCheapestImage.png';
var price= 5500
var originalprice= 18900



function Contents() {
  return (
    <div>
        <div style={{position: 'relative', width: '100%', height: '0px', paddingBottom: '100%'}}>
            <div style={{position: 'absolute', inset: '0px', display: 'flex', flexDirection: 'row', overflow: 'scroll hidden', scrollSnapType: 'x mandatory'}}>
                <div style={{scrollSnapAlign: 'start', position: 'relative', width: '100%', height: '100%'}}>
                    <img alt="https://alwayz-assets.s3.ap-northeast-2.amazonaws.com/928f7b4d-3801-4b50-862b-7a061069f556_original.jpg" src="https://alwayz-assets.s3.ap-northeast-2.amazonaws.com/928f7b4d-3801-4b50-862b-7a061069f556_original.jpg" style={{objectFit: 'cover', paddingRight: '100%', height: '100%'}}/>
                </div>

                <div style={{scrollSnapAlign: 'start', position: 'relative', width: '100%', height: '100%'}}>
                    <img alt="https://alwayz-assets.s3.ap-northeast-2.amazonaws.com/f5cd7dbe-e73e-42fd-9c04-39775bd94d6d_original.jpg" src="https://alwayz-assets.s3.ap-northeast-2.amazonaws.com/f5cd7dbe-e73e-42fd-9c04-39775bd94d6d_original.jpg" style={{objectFit: 'cover', paddingRight: '100%', height: '100%'}}/>
                </div>

                <div style={{scrollSnapAlign: 'start', position: 'relative', width: '100%', height: '100%'}}>
                    <img alt="https://alwayz-assets.s3.ap-northeast-2.amazonaws.com/9bb6c2d4-e521-4ce5-867f-81b68019daa6_original.jpg" src="https://alwayz-assets.s3.ap-northeast-2.amazonaws.com/9bb6c2d4-e521-4ce5-867f-81b68019daa6_original.jpg" style={{objectFit: 'cover', paddingRight: '100%', height: '100%'}}/>
                </div>

                <div style={{scrollSnapAlign: 'start', position: 'relative', width: '100%', height: '100%'}}>
                    <img alt="https://alwayz-assets.s3.ap-northeast-2.amazonaws.com/15958b71-a49f-47c9-a220-2d5c3cd65822_original.jpg" src="https://alwayz-assets.s3.ap-northeast-2.amazonaws.com/15958b71-a49f-47c9-a220-2d5c3cd65822_original.jpg" style={{objectFit: 'cover', paddingRight: '0%', height: '100%'}}/>
                </div>
            </div>

            <div style={{position: 'absolute', bottom: '12px', right: '16px', paddingLeft: '12px', paddingRight: '12px', color: 'rgb(255, 255, 255)', fontSize: '12px', height: '24px', backgroundColor: 'rgba(0, 0, 0, 0.533)', borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                1/4
            </div>

            <img src={IsCheapestImage} alt="" width="24" height="24" style={{position: 'absolute', left: '12px', top: '12px', width: '64px', height: '64px'}}/>
            
        </div>
        
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '12px', paddingLeft: '16px', paddingRight: '16px', position: 'relative'}}>
                <div style={{ fontSize: '16px', color: 'rgb(102, 102, 102)',  fontWeight: 'bold', marginTop: '0px', marginBottom: '0px' }}>
                    70%
                    <span style={{textDecorationLine: 'line-through', color: 'rgb(153, 153, 153)', fontWeight: 'normal'}}>
                        {wonpricedescription(originalprice)}
                    </span>
                    <br></br>
                    <div style={{fontSize: '20px', fontWeight: 'bold', color: 'rgb(234, 63, 73)'}}>
                        {wonpricedescription(price)}
                    </div>
                </div>
                <button type='button' style={{position: 'absolute', right: '16px', top: '0px', border: 'none', padding: '0px', margin: '0px', backgroundColor: 'rgb(255, 255, 255)', display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
                    <div>
                        <span>
                            <img src={starfull} alt width="20" height="20"/>
                            <img src={starfull} alt width="20" height="20"/> 
                            <img src={starfull} alt width="20" height="20"/> 
                            <img src={starfull} alt width="20" height="20"/> 
                            <img src={starhalf} alt width="20" height="20"/>      
                        </span>
                    </div>
                    <div style= {{ fontSize: '14px', color: 'rgb(102, 102, 102)', fontWeight: 'bold', paddingTop: '2px'}} >
                        (17,572)
                    </div>
                </button>
            </div>
        </div>
        <div style={{fontSize: '18px', marginTop: '8px', marginBottom:'12px', paddingLeft:'16px', paddingRight:'16px'}}>다모농장 해남 햇 꿀고구마 3kg 5kg 특상 한입</div>
        <div style={{height: '1px', backgroundColor: 'rgb(224, 224, 224)', marginLeft:'16px', marginRight:'16px'}}></div>

        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingLeft: '16px'}}>
            <div style={{alignItems: 'center', display: 'flex', flexDirection: 'row', marginTop: '12px'}}>
                <div style={{fontSize: '16px', marginRight: '16px', width: '72px', color: 'rgb(158, 158, 158)',}}>배송비</div>
                <div style={{display: 'flex', flex: '1 1 0%',}}>
                    <div style={{color: 'red', fontWeight: 'bold', fontSize: '16px',}}>모든 상품 무료배송</div>
                </div> 
            </div>
            <div style={{height: '8px',}}></div>
            <div style={{alignItems: 'center', display: 'flex', flexDirection: 'row', marginRight: '16px',}}>
                <div style={{fontSize: '16px', width: '72px', color: 'rgb(158, 158, 158)',}}>배송정보</div>
                <div style={{marginLeft: '16px', color: 'rgb(51, 51, 51)', fontSize: '16px',}}>평균 3일 소요 ·  롯데택배</div>
            </div>
        </div>

        <div style= {{height: '12px'}}></div>
        <div style= {{height: '8px', backgroundColor: 'rgb(245, 245, 245)'}}></div>
        <button type="button" style= {{display: 'flex', width: '100%', padding: '16px', marginLeft: '0px', marginRight: '0px', border: 'none', flexDirection: 'row', backgroundColor: 'rgb(255, 255, 255)', alignItems: 'center'}}>
            <div style={{color: 'rgb(51, 51, 51)', fontSize: '18px', fontWeight: 'bold'}}>열린 팀구매 참여하기</div>
            <div style={{flex: '1 1 0%'}}></div>
        </button>
        <div style={{height: '1px', backgroundColor: 'rgb(224, 224, 224)', marginLeft: '16px', marginRight: '16px'}}></div>
    </div>
  ); 
}

export default Contents;

function wonpricedescription(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
}

