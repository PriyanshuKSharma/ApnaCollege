public class patterns2 {

    public static void hollow_rectangle(int totRows, int totCols) {

        //outer loop for rows
        for(int i=1; i<=totRows; i++) {

            //inner loop for columns
            for(int j=1; j<=totCols; j++) {

                //if i is 1 or i is totRows or j is 1 or j is totCols(outer boundary)(cell - (i,j))
                if(i==1 || i==totRows || j==1 || j==totCols) {
                    //boundary cells
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }
    public static void main(String[] args) {
        //hollow_rectangle(5, 6);
    }
    
}
