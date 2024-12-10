import './App.css';
import React, {useState} from 'react';
import './output.css';

function App() {

  const [value, setValue] = useState('');

  return (
    <div className = "w-full h-screen flex items-center justify-center bg-gradient-to-br from-white to-white"> {/*calci box*/}
      <div className = "p-3 rounded-lg bg-gray-300"> {/*calci*/}
        <form action = "">
          <div className = "flex justify-center my-3 mb-4 w-full"> {/*Display screen*/}
            <input type = "text" value = {value} className = "font-bold h-[40px] font-mono bg-white text-right"/>
          </div>
          <div className="grid gap grid-cols-4 grid-rows">
            <input type="button" value="AC" onClick={function(e) {setValue('')}} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
            <input type="button" value="DE" onClick={e => setValue(value.slice(0, -1))} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
            <input type="button" value="%" onClick={e => setValue(value + e.target.value)} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
            <input type='button' value="/" onClick={e => setValue(value+ e.target.value)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
          </div>
          <div className="grid gap grid-cols-4 grid-rows">
            <input type="button" value="7" onClick={e => setValue(value + e.target.value)} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
            <input type="button" value="8" onClick={e => setValue(value + e.target.value)} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
            <input type="button" value="9" onClick={e => setValue(value + e.target.value)} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
            <input type='button' value="*" onClick={e => setValue(value+ e.target.value)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 mx-0.5 rounded"/>
          </div>
          <div className="grid gap grid-cols-4 grid-rows">
            <input type="button" value="4" onClick={e => setValue(value + e.target.value)} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
            <input type="button" value="5" onClick={e => setValue(value + e.target.value)} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
            <input type="button" value="6" onClick={e => setValue(value + e.target.value)} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
            <input type='button' value="-" onClick={e => setValue(value+ e.target.value)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
          </div>
          <div className="grid gap grid-cols-4 grid-rows">
            <input type="button" value="1" onClick={e => setValue(value + e.target.value)} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
            <input type="button" value="2" onClick={e => setValue(value + e.target.value)} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
            <input type="button" value="3" onClick={e => setValue(value + e.target.value)} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
            <input type='button' value="+" onClick={e => setValue(value+ e.target.value)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
          </div>
          <div className="grid gap grid-cols-3 grid-rows">
            <input type="button" value="0" onClick={e => setValue(value + e.target.value)} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
            <input type="button" value="." onClick={e => setValue(value + e.target.value)} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
            <input type="button" value="=" onClick={e => setValue(eval(value))} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
