import "./wasm_exec.js";
import "./wasmTypes.d.ts";


import "../src/helpers/multiply.ts";

const wasmFile = "main.wasm";
import WasmLoading from "./WasmLoading";

import React, { useEffect, useState } from "react";

async function loadWasm(): Promise<void> {
  const goWasm = new window.Go();
  const result = await WebAssembly.instantiateStreaming(
    fetch(wasmFile),
    goWasm.importObject
  );
  goWasm.run(result.instance);
}

export const GoWasmLoader: React.FC<React.PropsWithChildren<object>> = (
  props
) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    loadWasm().then(() => {
      console.log("WebAssembly module loaded");
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <WasmLoading />;
  }

  return <>{props.children}</>;
};
