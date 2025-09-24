function sum(a, b) {
    return a + b;
}

// --- ここからテストコード ---
const assert = require('assert');

function runTest(testName, testFunction) {
  try {
    testFunction();
    console.log(`✅ ${testName}`);
  } catch (error) {
    console.error(`❌ ${testName}`);
    console.error(error);
    process.exit(1);
  }
}

runTest('テストケース1: 正の数の足し算', () => {
  assert.strictEqual(sum(1, 2), 3);
});

runTest('テストケース2: 負の数の足し算', () => {
  assert.strictEqual(sum(-1, -2), -3);
});

runTest('テストケース3: ゼロの足し算', () => {
  assert.strictEqual(sum(0, 0), 0);
});

runTest('テストケース4: 正の数と負の数の足し算', () => {
  assert.strictEqual(sum(5, -3), 2);
});

console.log('すべてのテストが正常に完了しました！');