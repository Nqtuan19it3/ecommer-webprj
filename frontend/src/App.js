// import p1 from './images/p1.jpg';
import { BrowserRouter, Route} from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";

function App() {
    return (
        //react-router-dom 
        //<BrowserRouter> sử dụng các đường dẫn URL thông thường. 
        //khi người dùng truy cập theo một URL trên trình duyệt, một Component tương ứng sẽ được render trên giao diện.
        <BrowserRouter>
        <div className="grid-container">
            <header className="row">
                <div>
                    <a className="brand" href="/">Ten Website</a>
                </div>
                <div>
                    <a href="/cart">Giỏ hàng</a>
                    <a href="/signin">Đăng nhập</a>
                </div>
            </header>
            <main>
                <Route path="/product/:id" component={ProductScreen}></Route>
                <Route path="/" component={HomeScreen} exact></Route>
            </main>
            <footer className="row center">Copyright © 2017-2021 - Trường Đại học Công nghệ Thông tin & Truyền Thông Việt - Hàn, Đại học Đà Nẵng</footer>
        </div>
        </BrowserRouter>
    )
}
export default App;
