import "./App.css";

function App() {
  return (
    <>
      <button
        onClick={() => {
          alert(`Result from WebAssembly: ${window.myGolangFunction(2, 3)}`);
        }}
      >
        Click here to invoke WebAssembly
      </button>
    </>
  );
}

export default App;
