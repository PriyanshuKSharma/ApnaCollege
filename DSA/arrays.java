
import java.util.Scanner;

class arrays {
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

    public static int binarySearch(int arr[], int key) {
        int start = 0, end = arr.length-1;
        while(start<=end) { //start should be less than or equal to end
            int mid = (start + end)/2;
            if(arr[mid]==key) {
                return mid; //found
            } 
            else if(arr[mid]<key) {
                start = mid+1; //search in right half
            } 
            else {
                end = mid-1; //search in left half
            }
        }

        return -1;
    }

    public static int[] reverseArray(int arr[]) {
        int start = 0, end = arr.length-1;
        while(start<end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
        return arr;

    }

    public static void pairsinArray(int arr[]) {
        for(int i=0; i<arr.length; i++) {
            int curr = arr[i]; //2, 4, 6, 8, 10
            for(int j=i+1; j<arr.length; j++) {
                    System.out.print("("+curr+","+arr[j]+") ");
            }
            System.out.println();
        }

    }

    public static void printSubArray(int arr[]) {
        for(int i=0; i<arr.length; i++) {
            for(int j=i; j<arr.length; j++) {
                for(int k=i; k<=j; k++) {
                    System.out.print(arr[k]+" ");
                }
                System.out.println();
            }
        }

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
        /*int numbers[] = {56, 45, 80, 68, 69};
        int largest = getLargest(numbers);
        System.out.println("Largest element is "+largest);*/

        //Binary search
        /*int arr[] = {2, 4, 6, 8, 10, 12, 14, 16, 18, 20};
        int key = 12;
        System.out.println("Element found at index: "+binarySearch(arr, key));*/

        //Reverse an array
        /*int arr[] = {1, 2, 3, 4, 5};
        //Print the original array
        for(int i=0; i<arr.length; i++) {
            System.out.print(arr[i]);
        }
        System.out.println();
        int reversedArray[] = reverseArray(arr); //reversedArray will have the reversed array
        //Print the reversed array
        for(int i=0; i<reversedArray.length; i++) {
            System.out.print(reversedArray[i]);
        }*/

        //Pairs in an array
        /*int arr[] = {2, 4, 6, 8, 10};
        pairsinArray(arr);*/

        //Print subarray
        /*int arr[] = {2, 4, 6, 8, 10};
        printSubArray(arr);*/

    }
}

class arrays2 {
    
    //using kandane's algorithm
    public static void maxSubarraySum(int arr[]) {
        int maxSum = Integer.MIN_VALUE;
        int sum = 0;
        for(int i = 0; i < arr.length; i++) {
            for(int j = i; j < arr.length; j++) {
                for(int k = i; k <= j; k++) {
                    sum += arr[k];
                }
                maxSum = Math.max(maxSum, sum);
            }
        }
        System.out.println("Maximum sum of subarray is: "+maxSum);
    }

    //using Brute force approach
    public static void maxSubarraySum1(int arr[]) {
        int maxSum = Integer.MIN_VALUE;
        for(int i=0; i<arr.length; i++) {
            for(int j=i; j<arr.length; j++) {
                int sum = 0;
                for(int k=i; k<=j; k++) {
                    sum = sum + arr[k];
                }
                maxSum = Math.max(maxSum, sum);
            }
        }
        System.out.println("Maximum sum of subarray is: "+maxSum);
    }

    public static void main(String[] args) {
        //Maximum sum of subarray
        //int numbers[] = {1,-2,6,-1,3};

        //Using kandanes algorithm
        int numbers[] = {2,4,6,8,10};
        //maxSubarraySum(numbers);

        //Using Brute Force
        maxSubarraySum1(numbers);
    }
}