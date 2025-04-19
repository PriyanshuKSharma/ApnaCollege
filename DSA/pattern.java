import java.util.Scanner;

public class pattern {

	void simple() {
		System.out.println("****");
		System.out.println("***");
		System.out.println("**");
		System.out.println("*");
	}

	void star() {
		for(int line=1; line<=4; line++) {
			for(int star=1; star<=line; star++) {
				System.out.print("*");
			}
			System.out.println();
		}
	}

	void inverted() {
		for (int line = 1; line <= 4; line++) {
			for (int star = 4; star >= line; star--) {
				System.out.print("*");
			}
			System.out.println();
		}
	}

	void halfPyramid() {
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Enter a number: ");
		int n = sc.nextInt();
		for (int line = 1; line <= n; line++) {
			for (int num = 1; num <= line; num++) {
				System.out.print(num);
			}
			System.out.println();
		}
	}

	void charPyramid() {
		Scanner sc = new Scanner(System.in);
		char ch = 'A';

		System.out.print("Enter a number: ");
		int n = sc.nextInt();
		for (int line = 1; line <= n; line++) {
			for (int chars = 1; chars <= line; chars++) {
				System.out.print(ch);
				ch++;
			}
			System.out.println();
		}
	}
	

	public static void main(String[] args) {
		pattern pat = new pattern();
		//pat.simple();
		//pat.star();
		//pat.inverted();
		//pat.halfPyramid();
		pat.charPyramid();
	}

}
