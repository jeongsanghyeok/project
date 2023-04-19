import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = '제이솔루션 어서오세요.';
  let [글제목, b] = useState(['반갑습니다.','어서오세요.', '가자! 인제왔어요']);
  
  let [logo] = useState('JASoL');

  let[따봉, 따봉변경] = useState(0);
  let[글수정, 글수정변경] = useState("글수정");
  
  

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{ logo }</h4>
      </div>

      <button onClick={()=> {
        let copy = [...글제목];
        copy[0] ='여자코트 추천';
        b(copy);
      }}>글수정1232</button>

      <button onClick={()=> {
        let copy = [...글제목];
        let newAarry = copy.sort();
        b(newAarry);
      }}>가나다라순정렬</button>

      <div className="list">
        <h4>{ 글제목[0] } <span onClick={()=> { 따봉변경(따봉+1) }}>👍</span>{따봉}</h4>
        <p>멋있는 홈페이지</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>멋있는 홈페이지</p>
      </div>

      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>멋있는 홈페이지</p>
      </div>
      
      <Modal></Modal>
     
    </div>
  );
}

function Modal(){
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  
  )
}

export default App;
