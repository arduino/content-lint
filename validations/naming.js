import { ValidationIssue } from '../domain/validation-issue.js';

/**
 * Checks if the foldername contains any discouraged underscores, spaces or upper-case letters.
 * @param {Article} article The article to validate
 * @param {Array} ignoreList A list of folder names to ignore
 * @returns an array containg the occurred validation errors
 */
function validateFolderName(article, ignoreList = []) {
    let errorsOccurred = [];
    const issueType = ValidationIssue.Type.ERROR;

    const folders = article.path.split("/").filter((folder) => {
        // Filter out empty strings and relative paths
        return folder != "" && folder != "." && folder != "..";
    });

    for (let folder of folders) {
        if(ignoreList && ignoreList.includes(folder)){
            continue;
        }

        if(folder.indexOf("_") != -1){
            const errorMessage = "Folder path uses discouraged underscore.";
            errorsOccurred.push(new ValidationIssue(errorMessage, article.path, issueType));
        }
    
        if(folder.indexOf(" ") != -1){
            const errorMessage = "Folder path uses discouraged blanks.";
            errorsOccurred.push(new ValidationIssue(errorMessage, article.path, issueType));
        }
    
        if(folder != folder.toLowerCase()){
            const errorMessage = "Folder path uses discouraged non-lower case characters.";
            errorsOccurred.push(new ValidationIssue(errorMessage, article.path, issueType));
        }
    }

    return errorsOccurred;
}

export { validateFolderName }