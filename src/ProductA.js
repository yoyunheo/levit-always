import React from 'react';
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import './App.css'
const ProductA = () => {
    let [searchParams, setSearchParams] = useSearchParams();

    const productId  = useParams().productId;

    var qna = [
        {
            "q": "11일날 주문했는데  아직도 못받았어요. ",
            "a": "안녕하세요 고객님 올웨이즈입니다 \
            먼저 이용에 불편을 드려 죄송합니다 \
            현재 고객님의 상품은 배송완료로 확인됩니다 \
            아직도 상품을 받지 못한 상황이시라면 올웨이즈 카카오 채널을 통해 문의주시기 바랍니다"
        },
        {
            "q": "고구마가 하나같이 심이 너무 많이 있고 심 뿌리도 길고 부러져서 온 것도 있고 하얗게 뭔가 피었고 썪것들도 있어요. 축축하고 껍질도 부분부분 벗겨졌는데 이런걸 보내시면 어떡하나요? ",
            "a": "안녕하게요 고객님\
            먼저 불편을 드려 죄송합니다\
            상품 수령 후 파손, 변질 등의 이상이 있는 경우 사진촬영을 하신 후 사진과 함께 카카오 채널로 문의주시면 도와드리도록 하겠습니다"
        }
    ]
    

    var array = ["a", "b", "c"]
    var dictionay = {"size": "l", "color": "yellow"}

    return qna.map(aQnA => 
        (
            <> 
                <div className='elementQ'>Q. {aQnA.q}</div>
                <hr/>
                <div className='elementA'>A. {aQnA.a}</div>
                <hr/>
            </>
        )
    ) 

}

export default ProductA;
            
// const Product = () => {
//     let [searchParams, setSearchParams] = useSearchParams();

//     const productId  = useParams().productId;

//     const size = searchParams.get("size");
//     const colors = searchParams.get("colors");
    
//     return (
//         <>
//             <h3>{productId}번 상품 페이지 입니다.</h3>
//             <h4> 사이즈는 {size} 입니다.</h4>
//             <h4> 컬러는 {colors} 입니다.</h4>
//         </>
//     );
// }

// 
