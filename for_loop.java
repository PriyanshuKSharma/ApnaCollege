import java.util.*;

public class for_loop {
	void sq_pattern() {
		for(int line=1; line<=4; line++) {
			System.out.println("****");
		}
	}
	
	void reverse() {
		Scanner sc = new Scanner(System.in);
		System.out.print("Input the number: ");
		int n = sc.nextInt();
		
		System.out.print("Reversed number: ");
		while(n>0) {
			int lastDigit = n%10;
			System.out.print(lastDigit+" ");
			n/=10;
		}
	}
	
	void reverse2() {
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Input the number: ");
		int n = sc.nextInt();
		
		//variable to store reversed number 
		int rev=0;
		
		while(n>0) {
			int lastDigit = n%10;
			rev = (rev*10) + lastDigit;
			n/=10;
		}
		
		System.out.print("Reversed number: "+rev);
		
	}

	void prime() {
		Scanner sc = new Scanner(System.in);
		System.out.print("Input the number: ");
		int n = sc.nextInt();

		boolean isPrime = true;

		if(n==2) {
			System.out.println("Prime");
		}
		else {
			for(int i=2; i<=Math.sqrt(n); i++) {
				if(n%i==0) {
					isPrime = false;
				}
			}

			if(isPrime==true) {
				System.out.println("Prime");
			}
			else {
				System.out.println("Not Prime");
			}
		}
	}
	
	public static void main(String[] args) {
		for_loop fl = new for_loop();
		
		//fl.sq_pattern();
		//fl.reverse();
		//fl.reverse2();
		fl.prime();
	}
}
