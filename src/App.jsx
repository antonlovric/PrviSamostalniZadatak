import './App.css';
import Kartica from './komponente/Kartica';

function App() {
  return (
    <div className='pretinac-kartica'>
      <Kartica
        naslov='Košarka'
        srednjiDio='Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae harum atque nulla officia totam eos exercitationem sunt quidem culpa?'
        ikona={<span className='material-symbols-outlined'>sports_basketball</span>}
      />
      <Kartica
        naslov='Trčanje'
        srednjiDio='Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae harum atque nulla officia totam eos exercitationem sunt quidem culpa?'
        ikona={<span className='material-symbols-outlined'>sprint</span>}
      />
      <Kartica
        naslov='Nogomet'
        srednjiDio='Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae harum atque nulla officia totam eos exercitationem sunt quidem culpa?'
        ikona={<span className='material-symbols-outlined'>sports_soccer</span>}
      />
    </div>
  );
}

export default App;
