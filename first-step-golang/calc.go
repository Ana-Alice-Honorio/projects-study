import "errors"

func Division(a, b int) (int, error) {
    if b == 0 {
        return 0, errors.New("denominator cannot be zero")
    }

    return (a / b), nil
}