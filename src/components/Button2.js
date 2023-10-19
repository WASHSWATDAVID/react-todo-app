// 컴포넌트
function Button2() {
  // 함수
  function test() {
    console.log("1234");
  }

  function hi(text) {
    console.log("text : ", text);
  }

  return (
    // 함수도 파라메터로 전달가능
    <div>
      <Text text={"안녕"} hi={hi} />
      <button onClick={() => test()}>버튼</button>
    </div>
  );
}

//
function Text({ text, hi }) {
  return <h1 onMouseMove={() => hi(text)}>{text}</h1>;
}

export default Button2;
