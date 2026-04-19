public class Main {
    public static void main(String[] args) {
        int x = 10;

// Does not exist
        if (x instanceof int i) {
            System.out.println(i);
        }
    }
}