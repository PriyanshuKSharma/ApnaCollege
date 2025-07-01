public class sorting {

    void printArray(int[] arr) {
    for(int i = 0; i < arr.length; i++) {
        System.out.print(arr[i] + " ");
    }

    System.out.println();

    }
    // Bubble Sort
    // The algorithm repeatedly steps through the list, compares adjacent elements,
    // and swaps them if they are in the wrong order. The pass through the list is
    // repeated until the list is sorted.
    // Time Complexity: O(n^2) in the worst case, O(n) in the best case.
    // Space Complexity: O(1) since it sorts in place.
    // Stable sort: Yes, it maintains the relative order of equal elements.
    void bubbleSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    System.out.println("Sorted array:");
    printArray(arr);
    }

    // Selection Sort
    // The algorithm divides the input array into two parts: a sorted part and an unsorted 
    // part. It repeatedly selects the smallest (or largest) element from the unsorted part
    // and moves it to the end of the sorted part.
    // Time Complexity: O(n^2) in the worst case, O(n^2) in the best case.
    // Space Complexity: O(1) since it sorts in place.
    // Stable sort: No, it does not maintain the relative order of equal elements.
    // Example: For the array {7, 8, 3, 1, 2}, the sorted array will be {1, 2, 3, 7, 8}.
    // Usage: Call selectionSort(arr) where arr is the array to be sorted.
    void selectionSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            // Swap arr[i] and arr[minIndex]
            int temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
        System.out.println("Sorted array:");
        printArray(arr);
    }
    

    // Insertion Sort
    // The algorithm works by building a sorted array one element at a time.
    // It takes each element from the input and finds the appropriate position
    // in the sorted part of the array, shifting elements as necessary.
    // Time Complexity: O(n^2) in the worst case, O(n) in the best case.
    // Space Complexity: O(1) since it sorts in place.
    // Stable sort: Yes, it maintains the relative order of equal elements.
    // Example: For the array {7, 8, 3, 1, 2}, the sorted array will be {1, 2, 3, 7, 8}.
    // Usage: Call insertionSort(arr) where arr is the array to be sorted.
    void insertionSort(int[] arr) {
        int n = arr.length;
        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;

            // Move elements of arr[0..i-1], that are greater than key,
            // to one position ahead of their current position
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
        System.out.println("Sorted array:");
        printArray(arr);
        
    }

    public static void main(String[] args) {
        sorting s = new sorting();
        int[] arr = {7,8,3,1,2};
        // s.bubbleSort(arr);
        s.selectionSort(arr);
        // s.insertionSort(arr);
        
        
    }
}
