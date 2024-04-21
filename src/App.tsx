import { useContext } from "react";
import { GoWasmContext } from "../LoadWasm/index";
import "./App.css";


function App() {
  // const { goAdder } = useContext(GoWasmContext);

  return (
    <>
      <button
        onClick={() => {
          alert(`Result from WebAssembly: ${window.myGolangFunction(2, 3)}`);
          // alert(`Result from GoWasmContext: ${goAdder(2, 3)}`);
        }}
      >
        Click here to invoke WebAssembly
      </button>
    </>
  );
}

export default App;
