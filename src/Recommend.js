
import Box from './Box'

var product = [
    {
        "name": "[산들다온] 22년도 무안 햇양파",
        "price": 4458,
        "originalprice": 12000,
        "image": "https://alwayz-assets.s3.ap-northeast-2.amazonaws.com/51c80d4b-148d-4483-838b-850dedec30f0_original.jpg",
        "discountPercent": "63%",
        "reviewCounts": 1163,
    },
    {
        "name": "늘해랑 해남 햇 꿀고구마 3kg 5kg",
        "price": 5500,
        "originalprice": 9900,
        "image": "https://alwayz-assets.s3.ap-northeast-2.amazonaws.com/458e82bd-20dd-4c84-8251-d71480c90470_original.jpg",
        "discountPercent": "45%",
        "reviewCounts": 899,
    },
    {
        "name": "초특가 우리 농산물 100% 김치 7종 모은전",
        "price": 9415,
        "originalprice": 15300,
        "image": "https://alwayz-assets.s3.ap-northeast-2.amazonaws.com/93083d11-c0c9-4d29-9f1d-f53a1389d36d_original.jpg",
        "discountPercent": "39%",
        "reviewCounts": 103
    },
    {
        "name": "포슬포슬한 20222년 햇감자 3kg 5kg",
        "price": 69000,
        "originalprice": 99000,
        "image": "https://alwayz-assets.s3.ap-northeast-2.amazonaws.com/435aac68-612f-4b46-a3aa-f4576973363e_original.jpg",
        "discountPercent": "31%",
        "reviewCounts": 491
    },
    {
        "name": "열무김치 100% 국내산",
        "price": 9400,
        "originalprice": 17700,
        "image": "https://alwayz-assets.s3.ap-northeast-2.amazonaws.com/2632d629-17dd-493d-8b6d-a6942ef0a822_original.jpg",
        "discountPercent": "47%",
        "reviewCounts": 2562,
        "score": 3.4
    },
    {
        "name": "열무김치 100% 국내산",
        "price": 9400,
        "originalprice": 17700,
        "image": "https://alwayz-assets.s3.ap-northeast-2.amazonaws.com/2632d629-17dd-493d-8b6d-a6942ef0a822_original.jpg",
        "discountPercent": "47%",
        "reviewCounts": 2562,
        "score": 3.4
    }
]

function Recommend() {
    return (
        <div>
            <div style={{paddingRight: '16px', marginTop: '4px', display: 'flex', flexDirection: 'row', overflow: 'scroll hidden', scrollSnapType: 'x mandatory'}}>
                {
                    product.map(aProduct => <Box product={aProduct}/>)
                }
            </div>
        </div>
      
    ); 
}
  
  export default Recommend;