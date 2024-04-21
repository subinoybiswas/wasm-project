package main

import (
	"syscall/js"
)

func myGolangFunction() js.Func {
	return js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		return args[0].Int() + args[1].Int()
	})
}

func main() {
	ch := make(chan struct{}, 0)
	js.Global().Set("myGolangFunction", myGolangFunction())
	ans := js.Global().Call("multiply", 2, 3)
	println(ans.Int())
	<-ch
}
