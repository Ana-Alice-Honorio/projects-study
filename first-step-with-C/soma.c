#include <stdio.h>

float SOMA(float a, int b)  
{
   float result;     
   result = a + b;
   return result;
}

int main()
{
    float a;
    int b;
    float s;
    a = 10.3;
    b = 12;
    s = SOMA(a,b);  // Chamada da função SOMA(12.3,10);
    printf("A soma de %f com %d é %f\n", a,b,s); 
    return 0;
}
