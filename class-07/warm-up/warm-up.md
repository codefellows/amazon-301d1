# Warm-Up Exercise
This code sample is written in Java. Read through the code and determine the output for this function.

```
import java.util.*;

public class Count {
    public static void main(String[] args) {
        List<Integer> numbers = new ArrayList<>();
        for (int i = 0; i < 20; i++) {
            int randomNumber = (int) Math.floor(50 * Math.random());
            numbers.add(randomNumber);
        }
        System.out.println(numbers);

        HashMap<String, Integer> tally = new HashMap<>();
        tally.put("even", 0);
        tally.put("odd", 0);

        for (int i = 0; i < numbers.size(); i++) {
            String key;
            int value = numbers.get(i);
            if (value % 2 == 0) {
                key = "even";
            } else {
                key = "odd";
            }

            int votesSoFar = tally.get(key);
            tally.put(key, votesSoFar + 1);
        }

        System.out.println("Total even: " + tally.get("even"));
        System.out.println("Total odd: " + tally.get("odd"));
    }
}
```
