#include <stdio.h>
#include <string.h>

const int NUMBER = 69;
const char CONSTANT = "constant";
char variable[] = "variable";
double array[] = {1, 1, 2, 3, 5, 8, 13};

int main() {
  printf("%d \n", NUMBER);
  printf("%d \n", CONSTANT);
  printf("%s \n", variable);
  for (i = 0; i < 6; i++ ) {
    printf("%d \n", array[i]);
  }
  return 0;
}

main();
