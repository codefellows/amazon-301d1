# Warm-Up Exercise
This code sample is written in C#. Read through the code and determine the output for the function.

```
public static string Value(string value, int position)
{
    string[] myArray = new string[5];

    if (position >= myArray.Length)
    {
        return "Not a valid index";
    }

    for (int i = 0; i < myArray.Length; i++)
    {
        if (i == position)
        {
            myArray[position] = value;
        }
    }
    return $"Your value of {value} was accepted";
}

Value("sample string", 5);
Value("another string", 2);
```