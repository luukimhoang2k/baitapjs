import logo from './logo.svg';
import anh1 from './anh1.jpg';
import anh2 from './anh2.jpg';
import anh3 from './anh3.jpg';
import anh4 from './anh4.jpg';
import './App.css';

const a={
    data:[
        {title:'Buổi 1',}
    ]
}

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
            <div className="body-layout_title">
                <div className="title_line"></div>
                <div className="title">
                  <h1 className="title_h1">CHƯƠNG TRÌNH ĐÀO TẠO</h1>
                </div>
            </div>
        </div>
        <div className="footer_layout">
            <div className="footer_layout_div1">
                <h3>PHẦN CƠ BẢN</h3>
                <p>(không giới hạn số người tham dự)</p>
            </div>
            <div className="footer_layout1_container">
               
               <div className="footer_layout1_div2">
                   <p>Buổi 1</p>
               </div>
               <div className="footer_layout1_div3">
                   <ul>
                       <li><span>Ghi danh</span></li>
                       <li><span>Giới thiệu về ReactJS (reactjs.org)</span></li>
                       <li><span>Cài đặt môi trường cần thiết cho khóa học</span></li>
                       <li><span>Tạo React App đầu tiên (Hello world!)</span></li>
                       <li><span >Tạo React App giới thiệu bản thân (sử dụng html/css)</span></li>
                   </ul>
               </div>
           </div>
           <div className="footer_layout1_container">
               
               <div className="footer_layout1_div2">
                   <p>Buổi 2</p>
               </div>
               <div className="footer_layout1_div3">
                   <ul>
                       <li><span>JSX là gì ?</span></li>
                       <li><span>Biểu thức trong JSX</span></li>
                       <li><span>Render Element</span></li>
                       <li><span>Cập nhật React App của bạn (sử dụng Object, Array, Biểu thức)</span></li>
                   </ul>
                </div>
            </div>
           <div className="footer_layout1_container">
               
               <div className="footer_layout1_div2">
                   <p>Buổi 3</p>
               </div>
               <div className="footer_layout1_div3">
                   <ul>
                       <li><span>Component và Props (Cách phân chia cấu trúc)</span></li>
                       <li><span>Composing Component</span></li>
                       <li><span>Extracting Components</span></li>
                       <li><span>Cập nhật React App của bạn (Phân chia theo Component và Props)</span></li>
                   </ul>
               </div>
           </div>
           <div className="footer_layout1_container">
               
               <div className="footer_layout1_div2">
                   <p>Buổi 5 - Buổi 6</p>
               </div>
               <div className="footer_layout1_div3">
                   <ul>
                       <li><span>State and Lifecycle</span></li>
                       <li><span>Định nghĩa state trong Class và Function</span></li>
                       <li><span>setState</span></li>
                       <li><span>Lifecycle</span></li>
                       <li><span >Điều kiện render - Rerender</span></li>
                       <li><span>Cập nhật React App của bạn (Hiển thị yêu thích và ghét với 1 button switch mode hiển thị)</span></li>
                   </ul>
               </div>
           </div>
           <div className="footer_layout1_container">
               
               <div className="footer_layout1_div2">
                   <p>Buổi 7 - Buổi 8</p>
               </div>
               <div className="footer_layout1_div3">
                   <ul>
                       <li><span>Xử lý sự kiện và Form</span></li>
                       <li><span>Lấy dữ liệu của Form</span></li>
                       <li><span>Refs</span></li>
                       <li><span>Tạo React App todo list (hiển thị danh sách công việc, thêm, sửa, xóa)</span></li>
                   </ul>
               </div>
           </div>
           <div className="footer_layout1_container">
               
               <div className="footer_layout1_div2">
                   <p>Buổi 9</p>
               </div>
               <div className="footer_layout1_div3">
                   <ul>
                       <li><span>API và fetch ở React</span></li>
                       <li><span>Sử dụng với API mặc định và với các API đã được chuẩn bị</span></li>
                   </ul>
               </div>
           </div>
           <div className="footer_layout1_container">
               
               <div className="footer_layout2_div3">
                   <p>Buổi 10 - Buổi 11</p>
               </div>
               <div className="footer_layout2_div4">
                   <ul>
                       <li><span>react-router-dom</span></li>
                       <li><span>Cài đặt và thiết lập react-router-dom và React App</span></li>
                       <li><span>Bài tập cuối khóa (Quản lý các biểu mẫu khảo sát khách hàng)</span></li>
                   </ul >
               </div>
           </div>
             
        </div>
  </>
  );
}

export default App;