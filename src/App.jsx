import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [resultList, setResultList] = useState(null);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const studentList = [
    { "name": "波波", "alias": "BEGMYRADOVAJANAN" },
    { "name": "陈思远", "alias": "思远" },
    { "name": "储楚", "alias": "储楚" },
    { "name": "段纯熙", "alias": "纯熙" },
    { "name": "何言涵", "alias": "言涵" },
    { "name": "胡心泽", "alias": "心泽" },
    { "name": "黄可心", "alias": "可心" },
    { "name": "姜彦宸", "alias": "彦宸" },
    { "name": "蒋惠然", "alias": "惠然" },
    { "name": "赖振源", "alias": "振源" },
    { "name": "李妤涵", "alias": "妤涵" },
    { "name": "李豫喆", "alias": "豫喆" },
    { "name": "梁景程", "alias": "景程" },
    { "name": "刘婍", "alias": "刘婍" },
    { "name": "柳宝妮", "alias": "宝妮" },
    { "name": "潘思彤", "alias": "思彤" },
    { "name": "石贝依", "alias": "贝依" },
    { "name": "孙南希", "alias": "南希" },
    { "name": "孙诗涵", "alias": "诗涵" },
    { "name": "唐一程", "alias": "一程" },
    { "name": "童源清", "alias": "源清" },
    { "name": "王姜琪", "alias": "姜琪" },
    { "name": "王苏妍", "alias": "苏妍" },
    { "name": "王欣语", "alias": "欣语" },
    { "name": "王一诺", "alias": "一诺" },
    { "name": "王子楚", "alias": "子楚" },
    { "name": "魏雨婷", "alias": "雨婷" },
    { "name": "翁弈杺", "alias": "弈杺" },
    { "name": "吴曼凝", "alias": "曼凝" },
    { "name": "吴莫然", "alias": "莫然" },
    { "name": "徐艺航", "alias": "艺航" },
    { "name": "徐意彤", "alias": "意彤" },
    { "name": "宣毅枫", "alias": "毅枫" },
    { "name": "杨子醇", "alias": "子醇" },
    { "name": "余子晴", "alias": "子晴" },
    { "name": "袁毅晨", "alias": "毅晨" },
    { "name": "张城赫", "alias": "城赫" },
    { "name": "张文悦", "alias": "文悦" },
    { "name": "周俊言", "alias": "俊言" },
    { "name": "周铄涵", "alias": "铄涵" },
    { "name": "朱浩铭", "alias": "浩铭" },
  ];
  const handleSubmit = () => {
    if (!inputValue || inputValue.length === 0) {
      setResultList(studentList);
    }
    const list = [];
    studentList.forEach((student) => {
      if (inputValue.indexOf(student.name) < 0 && inputValue.indexOf(student.alias) < 0) {
        list.push(student.name);
      }
    });
    setResultList(list);
  };
  return (
    <>
      <div style={{ alignItems: 'start' }}>
        <div
          style={{ width: '100%', textAlign: 'left', fontSize: 13 }}
        >{`全部学生名单：${studentList.map(student => student.name)}`}</div>
        <div style={{ height: '20vh', marginTop: 10 }}>
          <textarea
            type="text"
            placeholder="请输入"
            value={inputValue}
            onChange={handleInputChange}
            style={{
              height: '100%',
              width: '95%',
              padding: 8,
            }}
          />
          <button
            style={{ marginTop: 10, width: '100%', backgroundColor: 'red', color: "white" }}
            onClick={handleSubmit}
          >
            开始查找
          </button>
          {resultList && (
            <div
              style={{ marginTop: 20, width: '100%', textAlign: 'left' }}
            >{`${
              resultList.length === studentList.length
                ? '所有学生都'
                : resultList
            } 不在输入框中`}</div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
