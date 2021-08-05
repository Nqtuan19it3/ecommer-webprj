// import p1 from './images/p1.jpg';
import data from './data';
function App() {
  return (
    <div className="grid-container">
       <header className="row">
                <div>
                    <a className="brand" href="index.html">Ten Wbsite</a>
                </div>
                <div>
                    <a href="/giohang">Gio hang</a>
                    <a href="/dangnhap">Dang nhap</a>
                </div>
        </header>
        <main>
          <div className="row center">
            {
              data.products.map((product) => 
                (
                  <div key={product._id} className="card">
              <a href={`/product/${product._id}`}><img className="medium" src={product.image} alt={product.name}/></a>
                <div className="card-body">
                <a href={`/product/${product._id}`}> <h2>{product.name}</h2> </a>
                  <div className="rating">
                    <span> <i className="fas fa-star"></i> </span>
                    <span> <i className="fas fa-star"></i> </span>
                    <span> <i className="fas fa-star"></i> </span>
                    <span> <i className="fas fa-star"></i> </span>
                    <span> <i className="fas fa-star"></i> </span>
                  </div>
                    <div className="price"> {product.price} VNĐ</div>
                  </div>
                </div>
                )
                )
            }
            
          </div>
        </main>
    </div>
  );
}

export default App;
