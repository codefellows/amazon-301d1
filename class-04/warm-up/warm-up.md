# Warm-Up Exercise
Read through this code as if you are the interpreter. Find all of the mistakes in this code and write down the correct syntax for each mistake.

## index.html

```
<html>
  <head>
    <title>Click tracker
  </head>
  <body>
    <div id="click">
      <p>Click me</p>
    </div>
  </body>
</html>
```

## app.js

```
$(.click).on('change', 'div', function() => {
  var counter = '0';
  $(p).on('click', counter++);
})
```
