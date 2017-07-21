/* eslint no-mixed-operators: ["error", {"groups": [["&", "|", "^", "~", "<<",
">>", ">>>"], ["&&", "||"]]}] */

function checkMod11(input) {
  let controlNumber = 2;
  let sumForMod = 0;
  let i;

  for (i = input.length - 2; i >= 0; i -= 1) {
    sumForMod += input.charAt(i) * controlNumber;
    controlNumber += 1;
    if (controlNumber > 7) {
      controlNumber = 2;
    }
  }
  const result = (11 - sumForMod % 11);

  return result === 11 ? 0 : result;
}

export { checkMod11 };
