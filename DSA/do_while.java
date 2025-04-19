import java.util.*;
public class do_while {
	
	void trial() {
		int counter=1;
		
		do {
			System.out.println("Hello World");
			counter++;
		}while(counter<=10);
	}
	
	void break1() {
		
		Scanner sc = new Scanner(System.in);
		
		do{
			System.out.print("Enter the number: ");
			int n = sc.nextInt();

			if(n%10==0) {
				break;
			}

			System.out.println(n);

		}while(true);
	}

	void continue1() {
		
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Enter the number: ");
		do{
			
			int n = sc.nextInt();

			if(n%10==0) {
				continue;
			}

			System.out.println(n);

		}while(true);
	}


	public static void main(String[] args) {
		do_while dwl = new do_while();
		
		//dwl.trial();
		//dwl.break1();
		dwl.continue1();


	}

}
