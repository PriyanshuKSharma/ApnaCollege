import java.util.*;
public class IncomeTax {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Enter your salary: ");
		int income = sc.nextInt();
		int tax;
		System.out.println("Income before tax deduction: "+income);
		
		if(income < 500000) {
			tax=0;
		}
		
		else if(income>=500000 && income<=1000000) {
			tax=(int)(income*0.2);
			income-=tax;
		}
		
		else {
			tax=(int)(income*0.3);
			income-=tax;
		}
		
		System.out.println("Tax applied: "+tax);
		System.out.println("Income after tax deduction: "+income);
		

	}

}
