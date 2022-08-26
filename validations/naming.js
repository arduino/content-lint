import { ValidationIssue } from '../domain/validation-issue.js';

/**
 * Checks if the foldername contains any discouraged underscores, spaces or upper-case letters.
 * @param {Article} article 
 * @returns an array containg the occurred validation errors
 */
function validateFolderName(article) {
    let errorsOccurred = [];
    const issueType = ValidationIssue.Type.ERROR;

    if(article.path.indexOf("_") != -1){
        const errorMessage = "Folder path uses discouraged underscore.";
        errorsOccurred.push(new ValidationIssue(errorMessage, article.path, issueType));
    }

    if(article.path.indexOf(" ") != -1){
        const errorMessage = "Folder path uses discouraged blanks.";
        errorsOccurred.push(new ValidationIssue(errorMessage, article.path, issueType));
    }

    if(article.path != article.path.toLowerCase()){
        const errorMessage = "Folder path uses discouraged non-lower case characters.";
        errorsOccurred.push(new ValidationIssue(errorMessage, article.path, issueType));
    }

    return errorsOccurred;
}


/**
 * Checks if the article uses one of the allowed assets folder name.
 * @param {Article} article 
 * @param {String} expectedFolderName the expected assets folder name
 * @returns an array of ValidationIssue objects for the found issues.
 */
 function validateAssetsFolderName(article, expectedFolderName){

    if(article.assets.length > 0 && article.assetsFolder === null){
        const errorMessage = "Multiple asset directories used";
        return new ValidationIssue(errorMessage, article.contentFilePath);
    }

    if(article.assetsFolder !== expectedFolderName){
        const errorMessage = "Unexpected or deprecated assets directory used";
        return new ValidationIssue(errorMessage, article.contentFilePath,  ValidationIssue.Type.WARNING);
    }     

    return [];
}

export { validateFolderName, validateAssetsFolderName }