import java.util.*;
public class ternary {

	void oddeven() {
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Enter a number: ");
		int num = sc.nextInt();
		
		//ternary operator
		String type = ((num%2) == 0) ? "even" : "odd";
		System.out.println(type);
		
	}
	
	void marks() {
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Enter your marks: ");
		int marks = sc.nextInt();
		
		//ternary operator
		String type = (marks>=33) ? "passed" : "failed";
		System.out.println("Student has "+type);
	}
	
	public static void main(String[] args) {
		ternary ter = new ternary();
		//ter.oddeven();
		ter.marks();
	}

}
