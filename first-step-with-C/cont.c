#include <stdio.h>

#define N 10

int main(void)
{
  
  int
  i, numero,
  positivos = 0, negativos = 0, nulos = 0;

 printf("Entre com %d numeros inteiros.\n", N);

  for (i = 1; i <= N; i = i + 1)
 {
 printf("%3d)  ", i);
  scanf("%d", &numero);
      if (numero > 0)
 {
   printf("O numero %d 'e maior que zero\n", numero);
   positivos = positivos + 1;
 }
else 
  if (numero < 0)
 {
 printf("O numero %d 'e menor que zero\n", numero);
  negativos = negativos + 1;
  }
 else         
 {
 printf("O numero %d 'e igual a zero\n", numero);
  nulos = nulos + 1;
 }
  }

  printf("\n\n");
  printf("Na sequencia de %d numeros temos:\n", N);
  printf("   - Numeros positivos: %d\n", positivos);
  printf("   - Numeros negativos: %d\n", negativos);
  printf("   - Numeros nulos:     %d\n", nulos);
  
  return 0;
  }
