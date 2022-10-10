import Boxnew from './Boxnew'

const product = [
    {
        "name": "(행사)삼성전자 삼성 외장하드 J3 Portable USB3.0 2TB 외장 HDD",
        "price": 102000,
        "originalprice": 115000,
        "image": "https://alwayz-assets.s3.ap-northeast-2.amazonaws.com/6d51f40c-7fe8-4a36-a509-8706eddcc91b_original.jpg",
        "discountPercent": "12%",
        "reviewCounts": 0
    }, 
    {
        "name": "혼술각 오늘 잡은 첫고기로 만든 떡갈비 2인분 560g  아이안주 아빠간식 캠핑",
        "price": 8500,
        "originalprice": 30000,
        "image": "https://alwayz-assets.s3.ap-northeast-2.amazonaws.com/e4d837f6-613b-4379-a613-633a882e3e35_original.jpg",
        "discountPercent": "72%",
        "reviewCounts": 120
    },
    {
        "name": "360회전 물음표 후크 1p",
        "price": 900,
        "originalprice": 9900,
        "image": "https://alwayz-assets.s3.ap-northeast-2.amazonaws.com/8a6770a0-2202-4c42-b4ff-e8bdefd70238_original.jpg",
        "discountPercent": "91%",
        "reviewCounts": 251
    }, 
    {
        "name": "산지직송 국내산  햇양파 1kg 3kg",
        "price": 4300,
        "originalprice": 5900,
        "image": "https://alwayz-assets.s3.ap-northeast-2.amazonaws.com/04672656-2ac3-4e1f-b02a-d6a6096ade30_original.jpg",
        "discountPercent": "28%",
        "reviewCounts": 6922
    },
    {
        "name": "[건달마토] 건강하고 달콤한 스테비아 방울토마토 1kg (500g*2팩)",
        "price": 12500,
        "originalprice": 5900,
        "image": "https://alwayz-assets.s3.ap-northeast-2.amazonaws.com/5fe7d92e-4a5f-4bee-8a78-5983874e51ed_original.jpg",
        "discountPercent": "22%",
        "reviewCounts": 7261
    },
    {
        "name": "[대륙붕수산] 안면도 산지직송 수율80~ 90% 내외 급냉 숫꽃게 1kg (소소사이즈) ",
        "price": 13000,
        "originalprice": 23000,
        "image": "https://alwayz-assets.s3.ap-northeast-2.amazonaws.com/ed1edb19-be84-4cd0-a77d-590ff1bd013d_original.jpg",
        "discountPercent": "44%",
        "reviewCounts": 2118
    }
]

function Recommendnew() {
    return (
        <div>
         <button type="button" style={{display: 'flex', width: '100%', padding: '16px', marginLeft: '0px', marginRight: '0px', border: 'none', flexDirection: 'row', backgroundColor: 'rgb(255, 255, 255)', alignItems: 'center'}} >
            <div style={{color:' rgb(51, 51, 51)', fontSize: '18px', fontWeight: 'bold'}}>🎁 올웨이즈 추천 상품</div>
            <div style={{flex: '1 1 0%'}}></div>
         </button>
        <div style={{columnCount: '2', columnGap: '12px', paddingLeft: '12px', paddingRight: '12px'}}>
            {
            product.map(a => <Boxnew product={a}/>)
            }
        </div>
        </div>
    ); 
  }
  
  export default Recommendnew;