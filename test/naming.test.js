import { Article } from '../domain/article.js'
import { validateFolderName, validateAssetsFolderName } from '../validations/naming.js';

const articleA = new Article();
articleA.path = "./demo/this_is_Not_compliant";

const articleB = new Article();
articleB.path = "./demo/this-should-pass";
articleB.rawData = "![](assets/dummy.png)"

const articleC = new Article();
articleC.rawData = "![](img/dummy.png)";

test('Tests if non-compliant article folder name is detected', () => {
    const errors = validateFolderName(articleA);
    // console.log(errors);
    expect(errors.length).toBe(2);
});

test('Tests if compliant article folder name passes validation', () => {
  const errors = validateFolderName(articleB);
  // console.log(errors);
  expect(errors.length).toBe(0);
});


test('Tests if incorrect assets name fails validation', () => {
  const errors = validateAssetsFolderName(articleC, "assets");
  // console.log(errors);
  expect(errors.length).toBe(1);
});

test('Tests if correct assets name passes validation', () => {
  const errors = validateAssetsFolderName(articleB, "assets");
  // console.log(errors);
  expect(errors.length).toBe(0);
});