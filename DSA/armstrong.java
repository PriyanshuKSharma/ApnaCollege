import java.util.*;

public class armstrong {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Input for Armstrong Number: ");
        int n = sc.nextInt();
        int originalNumber = n;

        int numDigits = String.valueOf(n).length();
        int sumofDig = 0;
        
        System.out.println("Length of the number: "+numDigits);

        while (n > 0) {
            int digit = n % 10;
            n = n / 10;

            // Raise digit to the power of numDigits and add to sumofDig
            sumofDig += Math.pow(digit, numDigits);
        }

        if (sumofDig == originalNumber) {
            System.out.println(originalNumber + " is an Armstrong number.");
        } 
        
        else {
            System.out.println(originalNumber + " is not an Armstrong number.");
        }
        
        sc.close();
    }
}
