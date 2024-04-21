import "./wasm_exec.js";
import "./wasmTypes.d.ts";
const wasmFile = "main.wasm";
import React, { createContext, useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GoWasmContext = createContext<any>(null);

async function loadWasm(): Promise<void> {
  const goWasm = new window.Go();
  const result = await WebAssembly.instantiateStreaming(
    fetch(wasmFile),
    goWasm.importObject
  );
  goWasm.run(result.instance);
}

export const GoWasmProvider: React.FC<React.PropsWithChildren<object>> = (
  props
) => {
  const [isLoading, setIsLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   const [goAdder, setGoAdder] = useState<any>(null);

  useEffect(() => {
    loadWasm().then(() => {
      //   setGoAdder(window.myGolangFunction);
      console.log("WebAssembly module loaded");
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <GoWasmContext.Provider value={isLoading}>
      {props.children}
    </GoWasmContext.Provider>
  );
};
