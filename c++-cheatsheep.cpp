#include <iostream>
using namespace std;

int array[] = {3, 6, 9};
int variable = 5;
char string = "variable string";
const int CONSTANT = 69;

int main() {
  cout << "hello\n";
  cout << variable << "\n";
  cout << string << "\n";
  fprintf("%d \n", CONSTANT);
   for (int i = 0; i < 3; i++) {
    cout << array[i] << "\n";
   }
  return 0;
}

main();
