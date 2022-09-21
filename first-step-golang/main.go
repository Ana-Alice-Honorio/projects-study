import (
	"calc/calc"
	"fmt"
)

func main() {
	var num1 int = 4
	num2 := 0
	result, err := calc.Division(num1, num2)

	if err != nil {
			fmt.Println("Error:", err)
			return
	}
	fmt.Println(result)
}