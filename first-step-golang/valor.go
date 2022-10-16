package main
import "fmt"
func main() {
var declara 1 ou mais variáveis.

    var a string = "inicial"
    fmt.Println(a)
Você pode declarar várias variáveis uma só vez.

    var b, c int = 1, 2
    fmt.Println(b, c)
Go irá inferir o tipo de variáveis inicializadas.

    var d = true
    fmt.Println(d)
Variáveis declaradas sem a inicialização correspondente são valor zero. Por exemplo, o valor zero para um int é 0.

    var e int
    fmt.Println(e)
A sintaxe := é uma abreviação para declarar e inicializar uma variável, e.x. para var f string = "curto" nesse caso.

    f := "curto"
    fmt.Println(f)
}
