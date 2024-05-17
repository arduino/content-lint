import { Article } from '../domain/article.js'
import { validateFolderName } from '../validations/naming.js';

const articleA = new Article();
articleA.path = "./demo/this_is_Not_compliant";

const articleB = new Article();
articleB.path = "./demo/this-should-pass";

const articleC = new Article();
articleC.path = "./demo/_unlisted/this-should-pass";

test('Tests if non-compliant article folder name is detected', () => {
    const errors = validateFolderName(articleA);
    console.log(errors);
    expect(errors.length).toBe(2);
});

test('Tests if compliant article folder name passes validation', () => {
  const errors = validateFolderName(articleB);
  console.log(errors);
  expect(errors.length).toBe(0);
});

test('Tests if article folder using ignore list passes', () => {
  const errors = validateFolderName(articleC, ["_unlisted"]);
  console.log(errors);
  expect(errors.length).toBe(0);
});

test('Tests if article folder using incorrect ignore list fails', () => {
  const errors = validateFolderName(articleC, ["non-existing-folder-name"]);
  console.log(errors);
  expect(errors.length).toBe(1);
});

