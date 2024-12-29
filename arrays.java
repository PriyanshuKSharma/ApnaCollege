
import java.util.Scanner;

public class arrays {
    void printArray() {
        int marks[] = new int[5];
        marks[0] = 10;
        marks[1] = 20;
        marks[2] = 30;
        marks[3] = 40;
        marks[4] = 50;
        for(int i=0; i<marks.length; i++) {
            System.out.println(marks[i]);
        }
    }

    void printArray1() {
        int marks[] = new int[5];

        Scanner sc = new Scanner(System.in);
        marks[0] = sc.nextInt();
        marks[1] = sc.nextInt();
        //marks[2] = 100;
        marks[2] = sc.nextInt()+1;
        
        for(int i=0; i<marks.length; i++) {
            System.out.println("Marks are: "+marks[i]);
        }

        int percentage = (marks[0]+marks[1]+marks[2])/3;
        System.out.println("Percentage is "+percentage+"%");
        
    }

    public static void update(int marks[]) {
        for(int i=0; i<marks.length; i++) {
            marks[i] = marks[i]+5;
            System.out.println("Updated mark is: "+marks[i]);
        }
    }

    public static int linearSearch(int numbers[], int key) {

        for(int i=0; i<numbers.length; i++) {
            if(numbers[i]==key) {
                return i;
            }
        }

        return -1;
    }

    public static int getLargest(int numbers[]) {
        int largest = numbers[0];
        //int largest = Integer.MIN_VALUE; //minimum value of integer(-infinity)

        int smallest = numbers[0];
        //int smallest = Integer.MAX_VALUE; //maximum value of integer(+infinity)
            

        for(int i=1; i<numbers.length; i++) {
            if(numbers[i]>largest) {
                largest = numbers[i];
            }
            if(numbers[i]<smallest) {
                smallest = numbers[i];
            }
        }
        System.out.println("Smallest element is "+smallest);
        return largest;
    }
    public static void main(String[] args) {
        arrays obj = new arrays();

        //obj.printArray();
        //obj.printArray1();

        //Update the marks
        /*int marks[] = {10, 20, 30, 40, 50};
        update(marks);*/

        //Linear search
        /*int numbers[] = {10, 20, 30, 40, 50};
        int key = 30;

        int index = linearSearch(numbers, key);
        if(index==-1) {
            System.out.println("Element not found");
        } 
        else {
            System.out.println("Element found at index "+index);
        }*/

        //Get largest element
        int numbers[] = {56, 45, 80, 68, 69};
        int largest = getLargest(numbers);
        System.out.println("Largest element is "+largest);


    }
}
