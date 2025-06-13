import java.util.*;

public class bits {
    
    void andGet() {
        Scanner sc = new Scanner(System.in);
		
		System.out.println("Take two numbers as inputs");
		int og = sc.nextInt();
		int pos =sc.nextInt();


        // Check if the bit at position 'pos' in 'n' is ON or OFF
        int bitMask = 1 << pos; // Create a bitmask with a 1 at the specified position

        if((bitMask & og)==0) {
            System.out.println("Bit is OFF"); // Check if the bit at position 'pos' in 'n' is OFF ->  it is 0
        } else {
            System.out.println("Bit is ON"); // Check if the bit at position 'pos' in 'n' is ON -> it is 1
        }
    }

    void orGet() {

        Scanner sc = new Scanner(System.in);
		
		System.out.println("Take two numbers as inputs");
		int og = sc.nextInt();
		int pos =sc.nextInt();


        
        int bitMask = 1 << pos;

        int newNum = bitMask | og;
        System.out.println(newNum);

    }

    void clearBit() {
        Scanner sc = new Scanner(System.in);
		
		System.out.println("Take two numbers as inputs");
		int og = sc.nextInt();
		int pos =sc.nextInt();


        // Step 1: Bit Mask
        int bitMask = 1 << pos; 

        // Step 2: find NOT of BM
        int notNum = ~(bitMask);

        
        // Step 3: AND with NOT
        int newNum = notNum & og;
        System.out.println(newNum);

    }

    void updateBit() {
        Scanner sc = new Scanner(System.in);
		
		System.out.println("Take two numbers as inputs");
		int og = sc.nextInt();
		int pos =sc.nextInt();

        System.out.println("operation to be performed: 1 for set, 0 for clear");
        int oprn = sc.nextInt();


        // Step 1: Bit Mask
        int bitMask = 1 << pos;

        // Check if the operation is to set or clear the bit
        if(oprn == 1) { // Set the bit at position 'pos'
            // Step 2: OR with BM
            int newNum = bitMask | og;
            System.out.println(newNum);
        } else {
            // Clear the bit at position 'pos'
            // Step 2: find NOT of BM
            int notNum = ~(bitMask);

        
            // Step 3: AND with NOT
            int newNum = notNum & og;
            System.out.println(newNum);

    }
    }
    public static void main(String args[]){
        bits bm = new bits();
        // bm.andGet();
        // bm.orGet();
        // bm.clearBit();
        bm.updateBit();
        
    }
    
    
}
