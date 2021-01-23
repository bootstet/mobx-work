import Apple from './components/apple'
import './App.less';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header">苹果篮子</header>
        <div>
          <div>
            <div>当前</div>
            <div>2个苹果，418克</div>
          </div>
          <div>
            <div>已吃掉</div>
            <div>9个苹果，2118克</div>
          </div>
        </div>
        <Apple/>
        <button>摘苹果</button>
      </div>
    </div>
  );
}

export default App;
