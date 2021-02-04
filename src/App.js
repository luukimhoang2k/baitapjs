import logo from './logo.svg';
import anh1 from './anh1.jpg';
import anh2 from './anh2.jpg';
import anh3 from './anh3.jpg';
import anh4 from './anh4.jpg';
import './App.css';

function App() {
  return (
  <>
        <div className="header_layout">
          <div className="header_layout_left">
              <div className="logo_layout">
                <p className="logo_layout_p">HỘI CHÉM GIÓ VIỆT NAM</p>
              </div>
              <div className="header_title">
                  <h3 className="title_h3">CHƯƠNG TRÌNH</h3>
              </div>
              <div className="header_title1">
                  <h3 className="title_h31">REACT 2021</h3>
              </div>
              <div className="header__title__address">
                  <h4 className="title_h4">Đà Nẵng, 1/2021</h4>
              </div>
          </div>
          <div className="header_layout_right">
              <div className="header__title__image">
                <img src={logo} className="image"></img>
              </div>
          </div>
        </div>
        <div className="body_layout">
            <div className="body-layout_title">
                <div className="title_line"></div>
                <div className="title">
                  <h1 className="title_h1">THAM GIA ĐÀO TẠO</h1>
                </div>
            </div>
            <div className="container_body">
                <div className="list_body">
                  <img className="image_body" src={anh1}></img>
                  <h3>PHAN NGÔ NHẬT VŨ</h3>
                  <p>1+ EXP Dev NodeJS tại ACworks Co.,Ltd.</p>
                </div>
                <div className="list_body">
                  <img className="image_body" src={anh2}></img>
                  <h3>NGUYỄN TRẦN VŨ</h3>
                  <p>1+ EXP Dev ReactJS</p>
                </div>
                <div className="list_body">
                  <img className="image_body" src={anh3}></img>
                  <h3>TRẦN VĂN ANH SƠN</h3>
                  <p>Dev tại ACEXIS Joint Stock</p>
                </div>
                <div className="list_body">
                  <img className="image_body" src={anh4}></img>
                  <h3>TUI NÈ</h3>
                  <p>1+ EXP Full-Stack Dev tại ACEXIS Joint Stock</p>
                </div>
            </div>  
        </div>
  </>
  );
}

export default App;
