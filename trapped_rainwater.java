public class trapped_rainwater {

    void trapped_rainwater() {
        int height[] = { 4, 2, 0, 6, 3, 2, 5 };
        int n = height.length;
        int leftMax[] = new int[n];
        int rightMax[] = new int[n];
        leftMax[0] = height[0];
        for (int i = 1; i < n; i++) {
            leftMax[i] = Math.max(height[i], leftMax[i - 1]);
        }
        rightMax[n - 1] = height[n - 1];
        for (int i = n - 2; i >= 0; i--) {
            rightMax[i] = Math.max(height[i], rightMax[i + 1]);
        }
        int trappedWater = 0;
        for (int i = 0; i < n; i++) {
            int waterLevel = Math.min(leftMax[i], rightMax[i]);
            trappedWater += waterLevel - height[i];
        }
        System.out.println(trappedWater);
    }
    public static void main(String[] args) {
        trapped_rainwater tr = new trapped_rainwater();
        tr.trapped_rainwater();   
    }
}
