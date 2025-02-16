import java.util.Scanner;
class Darray {

    void basicImplementation(int arr[][]) {
        for(int i=0; i<arr.length; i++) {
            for(int j=0; j<arr[i].length; j++) {
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }
    }

    void inputUser(int n) {
        int matrix[][]=new int[4][6];
        for(int i=0; i<matrix.length; i++) {
            for(int j=0; j<matrix[i].length; j++) {
                Scanner sc = new Scanner(System.in);
                System.out.print("Enter element at position ["+i+"]["+j+"]: ");
                matrix[i][j] = sc.nextInt();
                System.out.println();   
            }
        }
    }

    public static boolean search(int matrix[][], int key) {
        for(int i=0; i<matrix.length; i++) {
            for(int j=0; j<matrix[0].length; j++) {
                if(matrix[i][j] == key) {
                    System.out.println("Found at cell ("+i+","+j+")");
                    return true;
                }
            }
        }
        System.out.println("Element not found");
        return false;
    }

    public static void printSpiral(int matrix[][]) {
        int startRow = 0;
        int startCol = 0;
        int endRow = matrix.length-1;
        int endCol = matrix[0].length-1;

        while(startRow <= endRow && startCol <= endCol) {
            //top
            for(int j=startCol; j<=endCol; j++) {
                System.out.print(matrix[startRow][j] + " ");
            }
            //right
            for(int i=startRow+1; i<=endRow; i++) {
                System.out.print(matrix[i][endCol] + " ");
            }
            //bottom
            for(int j=endCol-1; j>=startCol; j--) {
                if(startRow == endRow) {
                    break;
                }
                System.out.print(matrix[endRow][j] + " ");
            }
            //left
            for(int i=endRow-1; i>=startRow+1; i--) {
                if(startCol == endCol) {
                    break;
                }
                System.out.print(matrix[i][startCol] + " ");
            }

            startRow++;
            startCol++;
            endRow--;
            endCol--;
        }
        System.out.println();
    }

    public static void diagonalSum(int matrix[][]) {
        int sum = 0;
        for(int i=0; i<matrix.length; i++) {
            //pd
            sum += matrix[i][i];
            //sd
            if(i != matrix.length-1-i) {
                sum += matrix[i][matrix.length-1-i];
            }
        }
        System.out.println("Sum of diagonal elements is: "+sum);
   }
    public static void main(String[] args) {
        /*int arr[][] = {
            {1, 2, 3, 5},
            {4, 5, 6, 6},
            {7, 8, 9, 0}
        };*/

        //Darray d = new Darray();
        //d.basicImplementation(arr);
        //d.inputUser(4);

        int matrix[][] = {
            {1, 2, 3, 4},
            {5, 6, 7, 8},
            {9, 10, 11, 12},
            {13, 14, 15, 16}
        };  
        //search(matrix, 10);
        printSpiral(matrix);

            
    }
}
