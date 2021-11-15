// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// matches valid phone numbers
test('Test if it is a valid phone number: (858)-276-8222.', () => {
    expect(functions.isPhoneNumber('(858)-276-8222')).toBe(true);
});

test('Test if it is a valid phone number: (858)-276-8555.', () => {
    expect(functions.isPhoneNumber('(858)-276-8555')).toBe(true);
});

test('Test if it is a invalid phone number: (858)-276-82222.', () => {
    expect(functions.isPhoneNumber('(858)-27682222')).toBe(false);
});

test('Test if it is a invalid phone number: (8583)-3276-8222.', () => {
    expect(functions.isPhoneNumber('(8583)-32768222')).toBe(false);
});

// matches valid emails
test('Test if it is a valid email: abcaaa@gmail.com.', () => {
    expect(functions.isEmail('abcaaa@gmail.com')).toBe(true);
});


test('Test if it is a valid email: xiz064@ucsd.edu.', () => {
    expect(functions.isEmail('xiz064@ucsd.edu')).toBe(true);
});

test('Test if it is a invalid email: google.com.', () => {
    expect(functions.isEmail('google.com')).toBe(false);
});

test('Test if it is a invalid email: xiz064.', () => {
    expect(functions.isEmail('xiz064')).toBe(false);
});

/**
 * The password's first character must be a letter, it must contain at least * 4 characters and no more than 15 characters and no characters other than * * letters, numbers and the underscore may be used
 */
test('Test if it is a valid strong password: abcd123', () => {
    expect(functions.isStrongPassword('abcd123')).toBe(true);
});

test('Test if it is a valid strong password: abcd123456789', () => {
    expect(functions.isStrongPassword('abcd123456789')).toBe(true);
});

test('Test if it is a invalid strong password: 1abcd123', () => {
    expect(functions.isStrongPassword('1abcd123')).toBe(false);
});

test('Test if it is a invalid strong password: abc@@d123', () => {
    expect(functions.isStrongPassword('abc@@d123')).toBe(false);
});

// 	This regular expressions matches dates of the form XX / XX / YYYY where 
// XX can be 1 or 2 digits long and YYYY is always 4 digits long.
test('Test if it is a valid date: 12/27/2000', () => {
    expect(functions.isDate('12/27/2000')).toBe(true);
});

test('Test if it is a valid date: 1/3/2000', () => {
    expect(functions.isDate('1/3/1998')).toBe(true);
});

test('Test if it is a invalid date 1/3/20', () => {
    expect(functions.isDate('1/3/20')).toBe(false);
});

test('Test if it is a invalid date 111/3/2000', () => {
    expect(functions.isDate('111/3/2000')).toBe(false);
});

// Matches valid 3 or 6 character hex codes used for HTML or CSS.
test('Test if it is a valid hex color FF5733', () => {
    expect(functions.isHexColor('FF5733')).toBe(true);
});

test('Test if it is a valid hex color FFF', () => {
    expect(functions.isHexColor('FFF')).toBe(true);
});

test('Test if it is a invalid hex color 2000', () => {
    expect(functions.isHexColor('2000')).toBe(false);
});

test('Test if it is a invalid hex color abcc', () => {
    expect(functions.isHexColor('abcc')).toBe(false);
});