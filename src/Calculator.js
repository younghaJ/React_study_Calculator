import React, { useRef, useState } from "react";

const Calculator = () => {

    let [num, setnum] = useState("\n");
    let [xcount, setXcount] = useState(0);
  
    let [record, setRecord] = useState([]);
    let [recordId, setRecordId] = useState(0);
  
    const numInput = useRef();
  
    // 페이징 처리 
  
    // 페이지 안에 나올 갯수
    const limit = 10;
    // 현재 페이지
    const [page, setPage] = useState(1);
    // 현재 페이지에 나오는 컨텐츠
    const offset = (page - 1) * limit;
  
    function Pagination() {
      let total=record.length;
      const numPages = Math.ceil(total / limit);
  
      return (
        <>
          {/* 이전 페이지 */}
          
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            &lt;
          </button>
          {/* 페이지 목록 */}
          {Array(numPages)
            .fill()
            .map((_, i) => (
              <button
                key={i + 1}
                onClick={() => setPage(i + 1)}
                aria-current={page === i + 1 ? "page" : null}
              >
                {i + 1}
                
              </button>
            ))}
            {/* 다음 페이지 */}
          <button onClick={() => setPage(page + 1)} disabled={page === numPages}>
            &gt;
          </button>
        </>
      );
    }
  
    function Btn({ text }) {
      return <button style={{
        width: "70px",
        height: "50px",
        backgroundColor: "#7bafd4",
        color: "white",
        padding: "10px 20px",
        margin: "10px",
        border: 0,
        // borderWidth: "3px",
        // borderColor: "Highlight",
        borderRadius: 10,
        fontSize: "20px",
      }} onClick={() => { setXcount(0); setnum(num + text) }}>{text}</button>;
    }
  
    function BtnX(props) {
      return <button style={{
        width: "70px",
        height: "50px",
        backgroundColor: "#7b83d4",
        color: "white",
        padding: "10px 20px",
        margin: "10px",
        border: 0,
        // borderWidth: "3px",
        // borderColor: "black",
        borderRadius: 10,
        fontSize: "20px"
      }} onClick={() => {
              let str=num;
              //반복문에서 setstate 사용 안됨
              if(xcount===1){
                str = str.substring(0,str.length-1);
              }
              setnum(str + props.text); 
              setXcount(1);
          }}>{props.show}</button>;
    }
  
    function BtnCancle({ text }) {
      return <button style={{
        width: "70px",
        height: "50px",
        backgroundColor: "#7b83d4",
        color: "white",
        padding: "10px 20px",
        margin: "10px",
        border: 0,
        borderRadius: 10,
        fontSize: "20px"
      }} onClick = {() => {setnum("")}}>{text}</button>;
    }
  
    function BtnBackSpace({ text }) {
      return <button style={{
        width: "70px",
        height: "50px",
        backgroundColor: "#7b83d4",
        color: "white",
        padding: "10px 20px",
        margin: "10px",
        border: 0,
        borderRadius: 10,
        fontSize: "20px"
      }} onClick = {() => {setnum(num.slice(0,-1))}}>{text}</button>;
    }
  
    function BtnPow({ text }) {
      return <button style={{
        width: "70px",
        height: "50px",
        backgroundColor: "#7b83d4",
        color: "white",
        padding: "10px 20px",
        margin: "10px",
        border: 0,
        borderRadius: 10,
        fontSize: "20px"
      }} onClick = {() => {setnum(String(Math.pow([eval(num)],[2])))}}>{text}</button>;
    }
  
    function BtnSqrt({ text }) {
      return <button style={{
        width: "70px",
        height: "50px",
        backgroundColor: "#7b83d4",
        color: "white",
        padding: "10px 20px",
        margin: "10px",
        border: 0,
        borderRadius: 10,
        fontSize: "20px"
      }} onClick = {() => {setnum(String(Math.sqrt(eval(num))))}}>{text}</button>;
    }
  
    function BtnInverse({ text }) {
      return <button style={{
        width: "70px",
        height: "50px",
        backgroundColor: "#7b83d4",
        color: "white",
        padding: "10px 20px",
        margin: "10px",
        border: 0,
        borderRadius: 10,
        fontSize: "20px"
      }} onClick = {() => {setnum(String(eval(1/num)))}}>{text}</button>;
    }
  
    function BtnResult({ text }) {
      return <button style={{
        width: "200px",
        height: "50px",
        backgroundColor: "#d47baf",
        color: "white",
        padding: "10px 20px",
        margin: "5px",
        border: 0,
        borderRadius: 10,
        fontSize: "30px"
      }} onClick = {() => {
            var a = String(Calculate(num)); 
            setnum(a);
            const newResult = {
              id : recordId,
              num,
              a
            };
            setRecordId(recordId+1);
            console.log(newResult);
            // setRecord(record + num + "=" + Calculate(num) + "\n");
            setRecord([newResult, ...record]);
            console.log(record)}}>
              {text}
      </button>;
    }
  
    function BtnClearRecord({ text }) {
      return <button style={{
        width: "200px",
        height: "50px",
        backgroundColor: "#d47baf",
        color: "white",
        padding: "10px 20px",
        margin: "5px",
        border: 0,
        borderRadius: 10,
        fontSize: "30px"
      }} onClick = {() => {setRecord([])}}>{text}</button>;
    }
  
    function Calculate(num) {
      return eval(num);
    }
  
    function RecordOnClick(num) {
      setnum(num);
      console.log("Record" + num);
      
      numInput.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      });
    };
  
  
  
    return (
      <div className="App">
        <h1><strong>계산기</strong></h1>
        <hr />
        {/* <h2 ref={h2Ref}>{ num }</h2> */}
        <h2 ref={numInput}>{ num }</h2>
        <br/>
        <BtnInverse text="1/x"/>
        <BtnPow text="x²"/>
        <BtnSqrt text="√x"/>
        <BtnBackSpace text="🔙"/>
        <br/>
        <Btn text="7"/>
        <Btn text="8"/>
        <Btn text="9"/>
        <BtnX text="/" show="➗"/>
        <br/>
        <Btn text="4"/>
        <Btn text="5"/>
        <Btn text="6"/>
        <BtnX text="*" show="✖️"/>
        <br/>
        <Btn text="1"/>
        <Btn text="2"/>
        <Btn text="3"/>
        <BtnX text="-" show="➖"/>
        <br/>
        <BtnCancle text="C"/>
        <Btn text="0"/>
        <Btn text="."/>
        <BtnX text="+" show="➕"/>
        <br/>
        <BtnClearRecord text="CA"/>
        <BtnResult text="="/>
        <hr/>
        {/* state는 렌더링이 되지만 배열 등 이런 요소들은 직접 렌더링 할 수 없기때문에 map을 이용해야 한다. */}
        {/* <h3>{ record }</h3> */}
        <h2>계산 기록</h2>
        
        {/* return 안에서는 if else 안된다. 삼항연산자를 쓴다. */}
        <div>
          {record.slice(offset, offset + limit).map((result) => (
            <div key={result.id} ><h3 onClick={() => {
                  RecordOnClick(result.num);
            }}>{result.num} = {result.a}</h3></div>
          ))}
        </div>
        
        <footer><Pagination></Pagination></footer>
      </div>
    );
  }

  export default Calculator;