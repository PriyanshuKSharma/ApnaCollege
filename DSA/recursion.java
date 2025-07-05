public class recursion {

    public static void printNo(int n) {

        if (n == 0) {
            return; // Base case: if n is 0, do nothing
        }
        System.out.println(n); // Print the current number
        printNo(n - 1); // Recursive call with n-1
    }

    public static void printNo1(int m) {

        if (m == 6) {
            return; // Base case: if n is 6, do nothing
        }
        System.out.println(m); // Print the current number
        printNo1(m + 1); // Recursive call with n+1
    }

    public static int sumNatural(int n) {
        if (n == 0) {
            return 0; // Base case: if n is 0, return 0
        }
        return n + sumNatural(n - 1); // Recursive call to sum up natural numbers
    }

    public static int factorial(int n) {
        if(n==1 || n==0) {
            return 1;
        }

        // int fact_nm1=factorial(n-1); // Recursive call to calculate factorial of (n-1)
        // int fact_n=n*fact_nm1; // Calculate factorial of n using the factorial of (n-1)
        // return fact_n; // Return the factorial of n

        return n*factorial(n - 1); // Directly return the factorial of n using recursion
    }

    public static void fibo(int a, int b, int n) {

        if(n==0) {
            return;
        }
        
        int c = a+b;
        System.out.println(c); // Print the current Fibonacci number
        fibo(b, c, n-1); // Recursive call with the next two Fibonacci numbers
    }

    public static int calcPower(int x, int n) {
        if (n==0) {
            return 1; // Base case: if n is 0, return 1
        }

        if (x==0) {
            return 0; // Base case: if x is 0, return 0
        }

        return x * calcPower(x, n - 1); // Recursive call to calculate power
    }

    public static int calcPower2(int x, int n) {
        if (n==0) {
            return 1; // Base case: if n is 0, return 1
        }

        if (x==0) {
            return 0; // Base case: if x is 0, return 0
        }

        if(n%2==0) {
            return calcPower2(x, n/2) * calcPower2(x, n/2); // If n is even, square x and halve n
        } else {
            return  calcPower2(x, n/2) * calcPower2(x, n/2) * x; // If n is odd, multiply by x and adjust n
        }
    }

    public static void main(String[] args) {

        // Print numbers from n to 1
        // int n = 5; // Example input
        // System.out.println("Printing numbers from " + n + " to 1:");
        // printNo(n); // Call the recursive function

        // Print numbers from m to 5
        // int m = 1; // Example input
        // System.out.println("Printing numbers from " + m + " to 5:");
        // printNo1(m); // Call the recursive function

        // Calculate the sum of first n natural numbers
        // int n=17;
        // System.out.println("Sum of first " + n + " natural numbers is: " + sumNatural(n)); // Call the recursive function

        // Calculate the factorial of n
        // int n=3;
        // System.out.println("Factorial of " + n + " natural numbers is: " + factorial(n));


        // Calculate the power of x raised to n
        // int a=0;
        // int b=1;
        // System.out.println(a);
        // System.out.println(b);

        // int n = 7;
        // fibo(a,b,n-2);

        // Calculate the power of x raised to n
        int x = 2; // Base number
        int n = 5; // Exponent
        System.out.println("Power of " + x + " raised to " + n + " is(normal): " + calcPower(x, n)); // Call the recursive function
        System.out.println("Power of " + x + " raised to " + n + " is(optimized): " + calcPower2(x, n));// Calculate the power of x raised to n using optimized method
    }
    
}