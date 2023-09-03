import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [resultList, setResultList] = useState(null);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const studentList = [
    "BEGMYRADOVAJANAN",
    '波波',
    '陈思远',
    '储楚',
    '段纯熙',
    '何言涵',
    '胡心泽',
    '黄可心',
    '姜彦宸',
    '蒋惠然',
    '赖振源',
    '李妤涵',
    '李豫喆',
    '梁景程',
    '刘婍',
    '柳宝妮',
    '潘思彤',
    '石贝依',
    '孙南希',
    '孙诗涵',
    '唐一程',
    '童源清',
    '王姜琪',
    '王苏妍',
    '王欣语',
    '王一诺',
    '王子楚',
    '魏雨婷',
    '翁弈杺',
    '吴曼凝',
    '吴莫然',
    '徐艺航',
    '徐意彤',
    '宣毅枫',
    '杨子醇',
    '余子晴',
    '袁毅晨',
    '张城赫',
    '张文悦',
    '周俊言',
    '周铄涵',
    '朱浩铭',
  ];
  const handleSubmit = () => {
    if (!inputValue || inputValue.length === 0) {
      setResultList(studentList);
    }
    const list = [];
    studentList.forEach((student) => {
      if (inputValue.indexOf(student) < 0) {
        list.push(student);
      }
    });
    setResultList(list);
  };
  return (
    <>
      <div style={{ alignItems: 'start' }}>
        <div
          style={{ width: '100%', textAlign: 'left', fontSize: 13 }}
        >{`全部学生名单：${studentList}`}</div>
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
