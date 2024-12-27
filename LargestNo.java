import java.util.*;
public class LargestNo {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Enter 3 numbers: ");
		int A = sc.nextInt();
		int B = sc.nextInt();
		int C = sc.nextInt();
		
		if((A>=B) && (B>=C)) {
			System.out.println("A is the greatest");
		}
		
		else if(B>=C) {
			System.out.println("B is the greatest");
		}
		
		else {
			System.out.println("C is the greatest");
		}

	}

}
