import java.util.*;

public class parameters 
{
    public static int calculateSum(int num1, int num2) 
    {
        int sum = num1+num2;
        return sum;
    }

    public static int multi(int num1, int num2) 
    {
        int sum = num1*num2;
        return sum;
    }

    public static void swap(int a, int b) {
        //swap
        int temp=a; //temp is a temporary variable
        a=b; // //a is now equal to b
        b=temp; //b is now equal to temp which is equal to a

        System.out.println("a = "+a);
        System.out.println("b = "+b);
    }

    public static int factorial(int num) {
        int fact=1; //initializing fact as 1
        for(int i=1; i<=num; i++) { //looping from 1 to num
            fact=fact*i; //fact is equal to fact multiplied by i
        }
        return fact; //returning fact
    }

    public static int binCoeff(int n, int r) {
        int n_fact=factorial(n); //as n_fact is a static method, we can call it directly, here a is n
        int r_fact=factorial(r); //as r_fact is a static method, we can call it directly, here b is r
        int nmr_fact=factorial(n-r); //as nmr_fact is a static method, we can call it directly, here a-b is n-r

        int binCoeff=n_fact/(r_fact*nmr_fact);
        return binCoeff;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("a = ");
        int a = sc.nextInt();
        System.out.print("b = ");
        int b = sc.nextInt();
        
        //Finding sum of a and b
        /*int sum = calculateSum(a,b);
        System.out.println("Sum of "+a+" and "+b+" is "+sum);*/

        //Swapping a and b
        //swap(a, b);

        //Finding product of a and b
        /*int product=multi(a,b);
        System.err.println("Product of "+a+" and "+b+" is "+product);*/

        //Finding factorial of b
        /*int factorialOfn=factorial(b);
        System.out.println("Factorial of b = "+b+" is "+factorialOfn);*/

        //Finding factorial of a
        /*int factorialOfn=factorial(a);
        System.out.println("Factorial of a = "+a+" is "+factorialOfn);*/

        //Finding binomial coefficient
        System.err.println(binCoeff(a, b));

    }
}