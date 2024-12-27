import java.util.*;
public class fibonacci {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.print("Input for nth term for Fibonacci: ");
		int n = sc.nextInt();
		
		int first = 0;
		int second = 1;
		int third = 0;
		
		System.out.print("Fibonacci Series: ");
		for(int i=2; i<=n; i++) {
			third = first + second;
			first=second;
			second=third;
			
			System.out.print(third);
		}
		

	}

}
