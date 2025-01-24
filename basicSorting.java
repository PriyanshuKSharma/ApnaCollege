public class basicSorting{

    public static void bubbleSort(int arr[]) {
        for(int turn=0; turn<arr.length-1; turn++) {
            boolean swapped = false;
            for(int i=0; i<arr.length-1-turn; i++) {
                if(arr[i] > arr[i+1]) {
                    //Swap
                    int temp = arr[i];
                    arr[i] = arr[i+1];
                    arr[i+1] = temp;
                    swapped = true;
                }
            }
            if(!swapped) {
                break;
            }
        }
    }

    public static void selectionSort(int arr[]) {
        for(int i=0; i<arr.length-1; i++) {
            int minPos = i; //minimum position
            for(int j=i+1; j<arr.length; j++) {
                if(arr[minPos] < arr[j]) //if any element is foound less than the minPos swap with it
                // > for increasing order && > for decreasing order
                {
                    minPos = j;
                }
            }
            //Swap
            int temp = arr[minPos];
            arr[minPos] = arr[i];
            arr[i] = temp;
        }
    }

    public static void printArray(int arr[]) {
        for(int i=0; i<arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }



    public static void main(String[] args) {
        int arr[] = {5,4,1,3,2};
        bubbleSort(arr);
        selectionSort(arr);
        printArray(arr);

    }
}