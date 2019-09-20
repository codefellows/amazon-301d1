/* eslint-disable no-undef */

/* ------------------------------------------------------------------------------------------------
CHALLENGE Temperature

Write a function named lowestWeeklyAverage that accepts a two-dimensional array of daily temperatures grouped week-by-week.

Calculate the average temperature for each week and return the value of the lowest weekly average temperature.

For example, in the data set below, the lowest weekly average is 46, which is the average of the temperatures in week 2. All other weeks have average temperatures that are greater than 46.
------------------------------------------------------------------------------------------------ */

let lowestWeeklyTemperatureData = [
  [33, 64, 58, 65, 71, 57, 60],
  [40, 45, 33, 53, 44, 59, 48],
  [55, 54, 60, 53, 59, 57, 61],
  [65, 56, 55, 52, 55, 62, 57],
];

const lowestWeeklyAverage = (weather) => {

  // Your code here

};


/* ------------------------------------------------------------------------------------------------
CHALLENGE Sort

Write a function named sortPeopleBetter that takes in an array of Person objects, each of which has firstName, lastName, and age properties, and sorts those people by their last names.

If two people share the same last name, alphabetize on their first name.

If two people have the same full name, the younger one should come first. Do not worry about capitalization.
------------------------------------------------------------------------------------------------ */

const sortPeopleBetter = (arr) => {

  //your code here

};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named mapTwoToThe that produces the same output as your forLoopTwoToThe function from challenge 1 and your forEachTwoToThe function from challenge 2, but uses map instead of a for loop or forEach.
------------------------------------------------------------------------------------------------ */

const mapTwoToThe = (arr) => {


  //your code here

};


/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge Temperature', () => {
  test('It should return the lowest weekly average temperature within the data set', () => {
    expect(lowestWeeklyAverage(weeklyTemperatures)).toStrictEqual(57);
    expect(lowestWeeklyAverage(lowestWeeklyTemperatureData)).toStrictEqual(46);
  });
});

describe('Testing challenge Sort People', () => {
  test('It should sort people with more strict ordering', () => {
    const family = [
      new Person('Casey', 'Codefellows', 55),
      new Person('Casey', 'Codefellows', 37),
      new Person('Charlie', 'Codefellows', 21),
      new Person('Charles', 'Codefellows', 29),
      new Person('Carol', 'Codefellow', 88),
    ];
    expect(sortPeopleBetter(family)).toStrictEqual([
      new Person('Carol', 'Codefellow', 88),
      new Person('Casey', 'Codefellows', 37),
      new Person('Casey', 'Codefellows', 55),
      new Person('Charles', 'Codefellows', 29),
      new Person('Charlie', 'Codefellows', 21),
    ]);
    expect(sortPeopleBetter([{ firstName: 'andrew', lastName: 'apple' }, { firstName: 'andre', lastName: 'apple' }]))
      .toStrictEqual([{ firstName: 'andre', lastName: 'apple' }, { firstName: 'andrew', lastName: 'apple' }]);
  });
});

describe('Testing challenge power map', () => {
  test('It should return two raised to the power of the integer', () => {
    expect(mapTwoToThe([0, 4, 5])).toStrictEqual([1, 16, 32]);
    expect(mapTwoToThe([0, 4, 5]).length).toStrictEqual(3);
  });
});
