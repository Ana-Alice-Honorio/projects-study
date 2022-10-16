package main
import "fmt"
func main() {
O tipo mais comum, com uma única condição.

    i := 1
    for i <= 3 {
        fmt.Println(i)
        i = i + 1
    }
Um clássico inicial/condição/final for loop.

    for j := 7; j <= 9; j++ {
        fmt.Println(j)
    }
for sem uma condição será repetido várias vezes até que você dê um break no loop ou return da função de fechamento.

    for {
        fmt.Println("loop")
        break
    }
}
