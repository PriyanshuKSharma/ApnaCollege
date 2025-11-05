# DSA - Data Structures and Algorithms

## What is DSA?

**DSA** (Data Structures and Algorithms) is the foundation of computer science and programming. It involves organizing data efficiently (Data Structures) and solving problems step-by-step (Algorithms) to optimize performance and resource usage.

DSA is **essential** for technical interviews, competitive programming, and building efficient software systems.

---

## 1. Introduction to DSA and Problem Solving
### Data Structures
*   **Definition**: Ways to organize and store data in memory for efficient access and modification.
*   **Types**: Linear (Arrays, Linked Lists, Stacks, Queues) and Non-linear (Trees, Graphs, Hash Tables).
*   **Purpose**: Choose the right data structure based on the problem requirements and operations needed.

### Algorithms
*   **Definition**: Step-by-step procedures to solve computational problems.
*   **Categories**: Searching, Sorting, Recursion, Dynamic Programming, Greedy, Graph algorithms.
*   **Analysis**: Time complexity (how fast) and Space complexity (how much memory).

### Problem Solving Approach
*   **Understand**: Read and analyze the problem statement.
*   **Plan**: Choose appropriate data structures and algorithms.
*   **Implement**: Write clean, efficient code.
*   **Test**: Verify with different test cases.
*   **Optimize**: Improve time and space complexity.

---

## 2. Java Fundamentals for DSA

### Basic Java Concepts
*   **Data Types**: `int`, `char`, `boolean`, `float`, `double`, `String`
*   **Control Structures**: `if-else`, `for`, `while`, `do-while`
*   **Operators**: Arithmetic, Logical, Bitwise, Ternary
*   **Input/Output**: `Scanner` class for user input, `System.out.println()` for output

### Key Files in Repository
| File | Concepts Covered |
| :--- | :--------------- |
| `datatype.java` | Primitive data types and their usage |
| `Operators.java` | Arithmetic, logical, and bitwise operations |
| `ternary.java` | Conditional operator for concise if-else |
| `for_loop.java`, `while_loop.java`, `do_while.java` | Loop constructs |
| `Calculator.java` | Basic arithmetic operations |
| `LeapYear.java` | Conditional logic implementation |
| `IncomeTax.java` | Complex conditional calculations |

---

## 3. Arrays and String Manipulation

### Arrays (`arrays.java`)
Arrays are collections of elements of the same data type stored in contiguous memory locations.

#### Key Operations Implemented:
```java
// Array Declaration and Initialization
int marks[] = new int[5];
marks[0] = 10; marks[1] = 20; // Manual assignment

// Array Traversal
for(int i=0; i<marks.length; i++) {
    System.out.println(marks[i]);
}

// Linear Search - O(n)
public static int linearSearch(int numbers[], int key) {
    for(int i=0; i<numbers.length; i++) {
        if(numbers[i]==key) {
            return i; // Return index if found
        }
    }
    return -1; // Not found
}

// Binary Search - O(log n) - Array must be sorted
public static int binarySearch(int arr[], int key) {
    int start = 0, end = arr.length-1;
    while(start<=end) {
        int mid = (start + end)/2;
        if(arr[mid]==key) return mid;
        else if(arr[mid]<key) start = mid+1;
        else end = mid-1;
    }
    return -1;
}

// Array Reversal - O(n)
public static int[] reverseArray(int arr[]) {
    int start = 0, end = arr.length-1;
    while(start<end) {
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++; end--;
    }
    return arr;
}
```

#### Advanced Array Problems:
*   **Pairs Generation**: Generate all possible pairs from array elements
*   **Subarray Generation**: Print all possible subarrays
*   **Maximum Subarray Sum**: Using Kadane's algorithm for optimal solution
*   **Find Largest/Smallest**: Single pass algorithm to find extremes

### 2D Arrays (`2Darray.java`)
Two-dimensional arrays represent matrices and tables.

#### Key Operations:
```java
// 2D Array Declaration
int matrix[][] = {
    {1, 2, 3, 4},
    {5, 6, 7, 8},
    {9, 10, 11, 12}
};

// Matrix Traversal
for(int i=0; i<matrix.length; i++) {
    for(int j=0; j<matrix[i].length; j++) {
        System.out.print(matrix[i][j] + " ");
    }
    System.out.println();
}

// Spiral Matrix Traversal
public static void printSpiral(int matrix[][]) {
    int startRow = 0, startCol = 0;
    int endRow = matrix.length-1, endCol = matrix[0].length-1;
    
    while(startRow <= endRow && startCol <= endCol) {
        // Top row: left to right
        for(int j=startCol; j<=endCol; j++) {
            System.out.print(matrix[startRow][j] + " ");
        }
        // Right column: top to bottom
        for(int i=startRow+1; i<=endRow; i++) {
            System.out.print(matrix[i][endCol] + " ");
        }
        // Bottom row: right to left
        for(int j=endCol-1; j>=startCol; j--) {
            if(startRow == endRow) break;
            System.out.print(matrix[endRow][j] + " ");
        }
        // Left column: bottom to top
        for(int i=endRow-1; i>=startRow+1; i--) {
            if(startCol == endCol) break;
            System.out.print(matrix[i][startCol] + " ");
        }
        startRow++; startCol++; endRow--; endCol--;
    }
}

// Diagonal Sum Calculation
public static void diagonalSum(int matrix[][]) {
    int sum = 0;
    for(int i=0; i<matrix.length; i++) {
        sum += matrix[i][i]; // Primary diagonal
        if(i != matrix.length-1-i) {
            sum += matrix[i][matrix.length-1-i]; // Secondary diagonal
        }
    }
    System.out.println("Diagonal sum: " + sum);
}
```

### Strings (`Strings.java`)
Strings are sequences of characters used for text processing.

#### Key String Operations:
```java
// String Traversal
public static void printLetters(String str) {
    for(int i=0; i<str.length(); i++) {
        System.out.print(str.charAt(i) + " ");
    }
}

// Palindrome Check - O(n)
public static boolean isPalindrome(String str) {
    for(int i=0; i<str.length()/2; i++) {
        if(str.charAt(i) != str.charAt(str.length()-1-i)) {
            return false;
        }
    }
    return true;
}

// Shortest Path Calculation (Direction-based)
public static float getShortestPath(String path) {
    int x=0, y=0;
    for(int i=0; i<path.length(); i++) {
        char dir = path.charAt(i);
        if(dir=='S') y--;
        else if(dir=='N') y++;
        else if(dir=='E') x++;
        else if(dir=='W') x--;
    }
    return (float)Math.sqrt(x*x + y*y);
}
```

### StringBuilder (`stringBuilder.java`)
For efficient string manipulation when multiple modifications are needed.

---

## 4. Sorting Algorithms (`basicSorting.java`)

### Bubble Sort - O(n²)
Repeatedly swaps adjacent elements if they're in wrong order.
```java
public static void bubbleSort(int arr[]) {
    for(int turn=0; turn<arr.length-1; turn++) {
        boolean swapped = false;
        for(int i=0; i<arr.length-1-turn; i++) {
            if(arr[i] > arr[i+1]) {
                // Swap elements
                int temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
        if(!swapped) break; // Optimization: early termination
    }
}
```

### Selection Sort - O(n²)
Finds minimum element and places it at the beginning.
```java
public static void selectionSort(int arr[]) {
    for(int i=0; i<arr.length-1; i++) {
        int minPos = i;
        for(int j=i+1; j<arr.length; j++) {
            if(arr[minPos] > arr[j]) {
                minPos = j;
            }
        }
        // Swap minimum element with current position
        int temp = arr[minPos];
        arr[minPos] = arr[i];
        arr[i] = temp;
    }
}
```

### Insertion Sort - O(n²)
Builds sorted array one element at a time by inserting elements in correct position.
```java
public static void insertionSort(int arr[]) {
    for(int i=1; i<arr.length; i++) {
        int curr = arr[i];
        int prev = i-1;
        // Find correct position for current element
        while(prev >= 0 && arr[prev] > curr) {
            arr[prev+1] = arr[prev];
            prev--;
        }
        arr[prev+1] = curr; // Insert element
    }
}
```

### Counting Sort - O(n+k)
Non-comparison based sorting for integers with limited range.
```java
public static void countingSort(int arr[]) {
    int largest = Integer.MIN_VALUE;
    for(int i=0; i<arr.length; i++) {
        largest = Math.max(largest, arr[i]);
    }
    
    int count[] = new int[largest+1];
    for(int i=0; i<arr.length; i++) {
        count[arr[i]]++;
    }
    
    // Reconstruct sorted array
    int j=0;
    for(int i=0; i<count.length; i++) {
        while(count[i] > 0) {
            arr[j] = i;
            j++;
            count[i]--;
        }
    }
}
```

---

## 5. Recursion (`recursion.java`)

Recursion is a programming technique where a function calls itself to solve smaller subproblems.

### Basic Recursion Concepts:
```java
// Print numbers from n to 1
public static void printNo(int n) {
    if (n == 0) return; // Base case
    System.out.println(n);
    printNo(n - 1); // Recursive call
}

// Sum of first n natural numbers
public static int sumNatural(int n) {
    if (n == 0) return 0; // Base case
    return n + sumNatural(n - 1); // Recursive relation
}

// Factorial calculation - O(n)
public static int factorial(int n) {
    if(n == 1 || n == 0) return 1; // Base case
    return n * factorial(n - 1); // Recursive call
}

// Fibonacci sequence generation
public static void fibo(int a, int b, int n) {
    if(n == 0) return;
    int c = a + b;
    System.out.println(c);
    fibo(b, c, n-1);
}

// Power calculation - O(n)
public static int calcPower(int x, int n) {
    if (n == 0) return 1;
    if (x == 0) return 0;
    return x * calcPower(x, n - 1);
}

// Optimized power calculation - O(log n)
public static int calcPower2(int x, int n) {
    if (n == 0) return 1;
    if (x == 0) return 0;
    
    if(n % 2 == 0) {
        return calcPower2(x, n/2) * calcPower2(x, n/2);
    } else {
        return calcPower2(x, n/2) * calcPower2(x, n/2) * x;
    }
}
```

---

## 6. Advanced Array Problems

### Trapped Rainwater (`trapped_rainwater.java`)
Calculate how much water can be trapped after raining.

```java
public void trapped_rainwater() {
    int height[] = {4, 2, 0, 6, 3, 2, 5};
    int n = height.length;
    
    // Calculate left maximum for each position
    int leftMax[] = new int[n];
    leftMax[0] = height[0];
    for (int i = 1; i < n; i++) {
        leftMax[i] = Math.max(height[i], leftMax[i - 1]);
    }
    
    // Calculate right maximum for each position
    int rightMax[] = new int[n];
    rightMax[n - 1] = height[n - 1];
    for (int i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(height[i], rightMax[i + 1]);
    }
    
    // Calculate trapped water
    int trappedWater = 0;
    for (int i = 0; i < n; i++) {
        int waterLevel = Math.min(leftMax[i], rightMax[i]);
        trappedWater += waterLevel - height[i];
    }
    
    System.out.println("Trapped water: " + trappedWater);
}
```

**Algorithm Explanation:**
1. For each position, find the maximum height to its left and right
2. Water level at any position = min(leftMax, rightMax)
3. Water trapped = waterLevel - currentHeight (if positive)
4. Time Complexity: O(n), Space Complexity: O(n)

---

## 7. Pattern Programming (`pattern.java`, `patterns2.java`)

Pattern programming helps develop logical thinking and loop control.

### Common Patterns:
*   **Rectangle Pattern**: Nested loops for rows and columns
*   **Triangle Patterns**: Right-angled, inverted, number triangles
*   **Diamond Pattern**: Combination of increasing and decreasing triangles
*   **Hollow Patterns**: Print only borders, fill inside with spaces

---

## 8. Mathematical Algorithms

### Number Theory Problems:
| File | Problem | Concept |
| :--- | :------ | :------ |
| `fibonacci.java` | Fibonacci sequence | Recursive relations |
| `armstrong.java` | Armstrong number check | Digit manipulation |
| `LargestNo.java` | Find largest among numbers | Comparison logic |
| `bits.java` | Bit manipulation operations | Binary operations |

---

## 9. Time and Space Complexity Analysis

### Big O Notation:
*   **O(1)**: Constant time - Array access, arithmetic operations
*   **O(log n)**: Logarithmic - Binary search, optimized power calculation
*   **O(n)**: Linear - Array traversal, linear search
*   **O(n log n)**: Linearithmic - Merge sort, heap sort
*   **O(n²)**: Quadratic - Bubble sort, selection sort, insertion sort
*   **O(2ⁿ)**: Exponential - Recursive fibonacci (unoptimized)

### Space Complexity:
*   **In-place algorithms**: O(1) extra space
*   **Recursive algorithms**: O(recursion depth) for call stack
*   **Dynamic programming**: O(n) or O(n²) for memoization tables

---

## 10. Problem Solving Strategies

### Approach for DSA Problems:
1. **Read carefully**: Understand input/output format and constraints
2. **Identify pattern**: Is it searching, sorting, recursion, or optimization?
3. **Choose data structure**: Array, string, or need advanced structures?
4. **Plan algorithm**: Brute force first, then optimize
5. **Code implementation**: Write clean, readable code
6. **Test thoroughly**: Edge cases, boundary conditions
7. **Analyze complexity**: Time and space requirements

### Common Problem Types:
*   **Array manipulation**: Searching, sorting, subarray problems
*   **String processing**: Pattern matching, palindromes, transformations
*   **Mathematical**: Number theory, combinatorics, geometry
*   **Recursion**: Tree-like problems, divide and conquer
*   **Optimization**: Dynamic programming, greedy algorithms

---

## 🎯 Interview Preparation Tips

### Must-Know Concepts:
- [ ] Array operations and algorithms
- [ ] String manipulation techniques
- [ ] Basic sorting algorithms
- [ ] Recursion and its applications
- [ ] Time/space complexity analysis
- [ ] Problem-solving approach

### Practice Strategy:
1. **Master basics**: Arrays, strings, basic algorithms
2. **Solve daily**: 2-3 problems from different categories
3. **Time yourself**: Practice under interview conditions
4. **Explain solutions**: Verbalize your thought process
5. **Optimize**: Always look for better solutions

### Common Interview Questions:
*   Reverse an array/string
*   Find maximum/minimum in array
*   Check if string is palindrome
*   Implement sorting algorithms
*   Calculate factorial using recursion
*   Solve two-pointer problems
*   Array manipulation problems

---

**Last Updated**: 2024  
**Language**: Java  
**Difficulty Level**: Beginner to Intermediate  
**Files Covered**: 25+ Java implementations

> 💡 **Success Tip**: Practice consistently and focus on understanding the logic behind each algorithm. Don't just memorize code - understand the problem-solving approach and be able to explain your solution clearly.