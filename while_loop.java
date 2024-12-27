import java.util.Scanner;

public class while_loop {
	void print100x() {
		int counter=0;
		while(counter<100) {
			System.out.println("Hello World");
			counter++;
		}
		
		System.out.print("Printed 100x");
	}
	
	
	void print_no() {
		int counter=2;
		while(counter>1 & counter<10) {
			System.out.print(counter);
			counter++;
		}
		
		System.out.print("\nPrinted no. b/w 1 & 10");
	}
	
	void print_range() {
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Counter init: ");
		int counter=sc.nextInt();
		
		System.out.println("Enter range: ");
		int n=sc.nextInt();
		
		while(counter<n) {
			System.out.print(counter);
			counter++;
		}
		
		System.out.print("\nPrinted no. b/w counter & n");
	}
	
	void natural_1st() {
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter range for natural numbers: ");
		int n=sc.nextInt();
		int i=1;
		
		
		int Sum =0;
		
		while(i<=n) {
			Sum+=i;
			i++;
		}
		System.out.print("The sum of first n natural number is: "+Sum);
		
	}
	
	public static void main(String[] args) {
		while_loop  wl= new while_loop();
		//wl.print100x();
		//wl.print_no();
		//wl.print_range();
		wl.natural_1st();
		
	}

}
