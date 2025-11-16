const assert = require('assert');
const add = require('./index');

function runTests() {
  console.log('Running tests for add-some-number...');

  // Test Case 1: Positive numbers
  try {
    assert.strictEqual(add(1, 2), 3, 'Test Case 1 Failed: 1 + 2 should be 3');
    console.log('✔ Test Case 1 Passed: 1 + 2 = 3');
  } catch (error) {
    console.error(`✖ ${error.message}`);
  }

  // Test Case 2: Negative numbers
  try {
    assert.strictEqual(add(-1, -2), -3, 'Test Case 2 Failed: -1 + -2 should be -3');
    console.log('✔ Test Case 2 Passed: -1 + -2 = -3');
  } catch (error) {
    console.error(`✖ ${error.message}`);
  }

  // Test Case 3: Zero
  try {
    assert.strictEqual(add(0, 5), 5, 'Test Case 3 Failed: 0 + 5 should be 5');
    assert.strictEqual(add(5, 0), 5, 'Test Case 3 Failed: 5 + 0 should be 5');
    assert.strictEqual(add(0, 0), 0, 'Test Case 3 Failed: 0 + 0 should be 0');
    console.log('✔ Test Case 3 Passed: addition with zero');
  } catch (error) {
    console.error(`✖ ${error.message}`);
  }

  // Test Case 4: Mixed positive and negative
  try {
    assert.strictEqual(add(-5, 10), 5, 'Test Case 4 Failed: -5 + 10 should be 5');
    assert.strictEqual(add(10, -5), 5, 'Test Case 4 Failed: 10 + -5 should be 5');
    console.log('✔ Test Case 4 Passed: mixed positive and negative numbers');
  } catch (error) {
    console.error(`✖ ${error.message}`);
  }

  // Test Case 5: Large numbers
  try {
    assert.strictEqual(add(1000000, 2000000), 3000000, 'Test Case 5 Failed: Large numbers');
    console.log('✔ Test Case 5 Passed: large numbers');
  } catch (error) {
    console.error(`✖ ${error.message}`);
  }

  console.log('\nAll tests complete.');
}

runTests();