import java.util.*;
public class Calculator {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Take two numbers as inputs");
		int a = sc.nextInt();
		int b =sc.nextInt();
		
		System.out.println("Choose your operator");
		char operator = sc.next().charAt(0);
		
		switch(operator) {
		
		case '+': 
			System.out.println(a+b);
			break;
		case '-': 
			System.out.println(a-b);
			break;
		case '*': 
			System.out.println(a*b);
			break;
		case '/': 
			System.out.println(a/b);
			break;
		case '%': 
			System.out.println(a%b);
			break;
		default:
			System.out.println("Operator Error");
			
		}

	}

}
