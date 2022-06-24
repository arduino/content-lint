import { ValidationIssue } from '../domain/validation-issue.js';

/**
 * Checks if the foldername contains any discouraged underscores, spaces or upper-case letters.
 * @param {Article} article 
 * @returns an array containg the occurred validation errors
 */
function validateFolderName(article) {
    let errorsOccurred = [];
    const issueType = ValidationIssue.Type.WARNING;

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

export { validateFolderName }