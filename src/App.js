import './App.css';
import posts from './myData';
import Articles from './Articles';



function App() {

  return (    
    <div className="App">
      {posts.map((el) => {
        return <Articles key={`article-${el.id}`} title={el.title} intro={el.intro} />;
      })}
    </div>
  );
}

export default App;
