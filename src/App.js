// import './App.css';
// import React, {useState} from 'react';
// import './output.css';

// function App() {

//   const [value, setValue] = useState('');

//   return (
//     <div className = "w-full h-screen flex items-center justify-center bg-gradient-to-br from-white to-white"> {/*calci box*/}
//       <div className = "p-3 rounded-lg bg-gray-300"> {/*calci*/}
//         <form action = "">
//           <div className = "flex justify-center my-3 mb-4 w-full"> {/*Display screen*/}
//             <input type = "text" value = {value} className = "font-bold h-[40px] font-mono bg-white text-right"/>
//           </div>
//           <div className="grid gap grid-cols-4 grid-rows">
//             <input type="button" value="AC" onClick={function(e) {setValue('')}} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
//             <input type="button" value="DE" onClick={e => setValue(value.slice(0, -1))} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
//             <input type="button" value="%" onClick={e => setValue(value + e.target.value)} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
//             <input type='button' value="/" onClick={e => setValue(value+ e.target.value)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
//           </div>
//           <div className="grid gap grid-cols-4 grid-rows">
//             <input type="button" value="7" onClick={e => setValue(value + e.target.value)} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
//             <input type="button" value="8" onClick={e => setValue(value + e.target.value)} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
//             <input type="button" value="9" onClick={e => setValue(value + e.target.value)} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
//             <input type='button' value="*" onClick={e => setValue(value+ e.target.value)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 mx-0.5 rounded"/>
//           </div>
//           <div className="grid gap grid-cols-4 grid-rows">
//             <input type="button" value="4" onClick={e => setValue(value + e.target.value)} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
//             <input type="button" value="5" onClick={e => setValue(value + e.target.value)} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
//             <input type="button" value="6" onClick={e => setValue(value + e.target.value)} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
//             <input type='button' value="-" onClick={e => setValue(value+ e.target.value)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
//           </div>
//           <div className="grid gap grid-cols-4 grid-rows">
//             <input type="button" value="1" onClick={e => setValue(value + e.target.value)} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
//             <input type="button" value="2" onClick={e => setValue(value + e.target.value)} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
//             <input type="button" value="3" onClick={e => setValue(value + e.target.value)} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
//             <input type='button' value="+" onClick={e => setValue(value+ e.target.value)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
//           </div>
//           <div className="grid gap grid-cols-3 grid-rows">
//             <input type="button" value="0" onClick={e => setValue(value + e.target.value)} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
//             <input type="button" value="." onClick={e => setValue(value + e.target.value)} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
//             <input type="button" value="=" onClick={e => setValue(eval(value))} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default App;


import './App.css';
import React, { useState } from 'react';
import './output.css';

function App() {
  const [value, setValue] = useState('');

  const isOperator = (char) => ['+', '-', '*', '/'].includes(char);

  const handleButtonClick = (e) => {
    const buttonValue = e.target.value;

    if (!isOperator(buttonValue) && buttonValue !== '=') {
      setValue(value + buttonValue);
    }
    else if (isOperator(buttonValue)) {
      if (value.length === 0 || isOperator(value[value.length - 1])) {
        return;
      }
      setValue(value + buttonValue);
    }
    else if (buttonValue === '=') {
      try {
        setValue(eval(value).toString());
      } catch (error) {
        setValue('Error');
      }
    }
  };

  const clearInput = () => {
    setValue('');
  };

  const handleBackspace = () => {
    setValue(value.slice(0, -1));
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-white to-white"> {/*calci box*/}
      <div className="p-3 rounded-lg bg-gray-300"> {/*calci*/}
        <form>
          <div className="flex justify-center my-3 mb-4 w-full"> {/*Display screen*/}
            <input type="text" value={value} className="font-extrabold font-mono h-[40px] bg-white text-right" readOnly/>
          </div>

          <div className="grid gap grid-cols-4 grid-rows">
            <input type="button" value="AC" onClick={clearInput} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
            <input type="button" value="DE" onClick={handleBackspace} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
            <input type="button" value="%" onClick={handleButtonClick} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
            <input type="button" value="/" onClick={handleButtonClick} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
          </div>

          <div className="grid gap grid-cols-4 grid-rows">
            <input type="button" value="7" onClick={handleButtonClick} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
            <input type="button" value="8" onClick={handleButtonClick} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
            <input type="button" value="9" onClick={handleButtonClick} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
            <input type="button" value="*" onClick={handleButtonClick} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 mx-0.5 rounded"/>
          </div>

          <div className="grid gap grid-cols-4 grid-rows">
            <input type="button" value="4" onClick={handleButtonClick} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
            <input type="button" value="5" onClick={handleButtonClick} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
            <input type="button" value="6" onClick={handleButtonClick} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
            <input type="button" value="-" onClick={handleButtonClick} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
          </div>

          <div className="grid gap grid-cols-4 grid-rows">
            <input type="button" value="1" onClick={handleButtonClick} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
            <input type="button" value="2" onClick={handleButtonClick} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
            <input type="button" value="3" onClick={handleButtonClick} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
            <input type="button" value="+" onClick={handleButtonClick} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
          </div>

          <div className="grid gap grid-cols-3 grid-rows">
            <input type="button" value="0" onClick={handleButtonClick} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
            <input type="button" value="." onClick={handleButtonClick} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
            <input type="button" value="=" onClick={handleButtonClick} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 my-0.5 mx-0.5 rounded"/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
