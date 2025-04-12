import java.util.*;

public class Strings{

  public static void printLetters(String str) {
		for(int i=0; i<str.length(); i++) {
			System.out.print(str.charAt(i)+ " ");
		}
		
		System.out.println();
	}

  public static boolean isPalindrome(String str) {
    for(int i=0; i<str.length(); i++) {
      int n = str.length();
      if(str.charAt(i) != str.charAt(n-1-i)) {

        //not a Palindrome
        return false;
      }

      
    }
    return true;
  }

  public static float getshortestPath(String path){
    int x=0;
    int y=0;

    for(int i=0; i<path.length(); i++) {
      char dir = path.charAt(i);

      //South
      if(dir=='S') {
        y--;
      }

      //North
      if(dir=='N'){
        y++;
      }

      //East
      if(dir=='E'){
        x++;
      }

      //West
      if(dir=='W'){
        x--;
      }

    }

    int X2 = x*x;
    int Y2 = y*y;
    return (float)Math.sqrt(X2+Y2);
  }
  public static void main(String args[]) {
    
    // char arr[] = {'a', 'b', 'c', 'd'};
    // String str = "abcd";
    // String str2 = new String("xyz");

    //Strings are IMMUTABLE
    

    // Scanner sc = new Scanner(System.in);
    // String name;
    //name=sc.next(); //for single string value input

    // name=sc.nextLine();
    // System.out.println(name.length());


    //Concatenation
    // String firstName = "Priyanshu K";
    // String lastName = "Sharma";
    // String fullName = firstName+ " "+ lastName;

    // printLetters(fullName);

    // String str="racecar";
    // System.out.println(isPalindrome(str));

    String path="WNEENESENNN";
    System.out.println(getshortestPath(path));
  }
}