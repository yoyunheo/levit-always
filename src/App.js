
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import Contents from './Contents';
import Team1 from './Team1';
import Review1 from './Review1';
import Starscore from './Starscore';
import Reviewbag from './Reviewbag';
import DescriptoionHead from './DescriptoionHead';
import DescriptionP from './DescriptionP';
import ProudoctQ from './ProudoctQ';
import ProductA from './ProductA';
import Delivery from './Delivery';
import RecommendH from './RecommendH';
import Recommend from './Recommend';
import Recommendnew from './Recommendnew';
import Buyit from './Buyit';
import Office from './Office';

const App = () => {
	return (
        <div>
            <BrowserRouter>
				<Routes>
					<Route path="/" element={
                        <div>
                            <div style={{height:'72px'}}></div>
                            <Header/>
                            <Contents/>
                            <Team1/>
                            <div style={{height:'8px', backgroundColor: 'rgb(245, 245, 245)'}}></div>
                            <Review1/>
                            <Starscore/>
                            <div style={{height: '1px',backgroundColor: 'rgb(224, 224, 224)', marginLeft: '16px',marginRight: '16px'}}></div>
                            <Reviewbag/>
                            <div style={{height:'8px', backgroundColor: 'rgb(245, 245, 245)'}}></div> 
                            <DescriptoionHead/>
                            <DescriptionP/>
                            {/* <div>상품상세 설명</div> */}
                            <div style={{height:'1px', backgroundColor: 'rgb(224, 224, 224)'}}></div>
                            <Link to="/questions">
                            <ProudoctQ/>
                            </Link>
                            {/* <Route path="/" element={<ProductA/>}></Route> */}
                            {/* <div>상품 문의</div> */}
                            <div style={{height:'1px', backgroundColor: 'rgb(224, 224, 224)'}}></div>
                            <Delivery/>
                            {/* <div>배송 반품 정책</div> */}
                            <div style={{height:'8px', backgroundColor: 'rgb(245, 245, 245)'}}></div>
                            <RecommendH/>
                            {/* <div>다른 고객님이 함께 보는 상품 헤더</div> */}
                            <Recommend/>
                            {/* <div>다른 고객님이 함께 보는 상품</div> */}
                            <div style={{height:'8px', backgroundColor: 'rgb(245, 245, 245)'}}></div>
                            <Recommendnew/>
                            {/* <div>올웨이즈 추천상품 영역</div> */}
                            <div style={{height:'19px', backgroundColor: 'rgb(245, 245, 245)'}}></div>
                            <Buyit/>
                            {/* <div>하단 구매하기 버튼들</div> */}
                            {/* <div>헤더 영역</div> */}
                            <Office/>
                            {/* <div>회사 설명</div> */}
                        </div>
                    }>
                    </Route>
                    <Route path="/questions" element={
                        <ProductA/>
                    }>
                    </Route>
                    <Route path="*" element={
                        <div>
                            <h1>404: not found</h1>
                        </div>
                    }>
                    </Route>
				</Routes>
			</BrowserRouter>
        </div>
    );
};

export default App;