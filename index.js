import { Validator } from './logic/validator.js';
import { ArticleManager } from './logic/article-manager.js';

import { validateDuplicatedOpeningHeading, validateHeadingsNesting, validateMaxLength, validateNumberedHeadings, validateOpeningHeadingLevel, validateSpacing, validateTitleCase } from './validations/headings.js'
import { validateMetaData } from './validations/metadata.js';
import { validateRules } from './validations/rules.js';
import { validateImageDescriptions, validateImagePaths, validateReferencedAssets, validateSVGFiles } from './validations/assets.js';
import { validateSyntaxSpecifiers } from './validations/code-blocks.js';
import { validateNestedLists } from './validations/lists.js';
import { validateBrokenLinks } from './validations/links.js';
import { ConfigManager } from './logic/config-manager.js';
import { validateFolderName } from './validations/naming.js';

import { fixMissingTitleCase } from './fixes/headings.js'
import { fixUnusedAssets } from './fixes/assets.js';
import { replaceItalicEmphasisWithBoldEmphasis } from './fixes/styling.js';

export { Validator, ArticleManager, validateDuplicatedOpeningHeading, validateHeadingsNesting, validateMaxLength, validateNumberedHeadings, validateOpeningHeadingLevel, validateSpacing, validateTitleCase, validateMetaData, validateRules, validateImageDescriptions, validateImagePaths, validateReferencedAssets, validateSVGFiles, validateSyntaxSpecifiers, validateNestedLists, validateBrokenLinks, ConfigManager, validateFolderName, fixMissingTitleCase, fixUnusedAssets, replaceItalicEmphasisWithBoldEmphasis }