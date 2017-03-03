
QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 <= "3", "1<3 - the first agrument is 'truthy', so we pass!");
});


QUnit.test('Testing the calcTip function with 4 inputs', function (assert) {
assert.equal(calcTip(60,20,3,7), 25.68, "works with four positive integers");
assert.equal(calcTip(--, $$, 9, 7), nan, "does not work for non-number inputs");
assert.equal(calcTip(-9, 8, 7, 7), nan, "does not work for negative integers");
assert.equal(calcTip(1), nan, "does not work if not all parameters are entered");
