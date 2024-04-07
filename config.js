export function getDescription(filePath){
  const idRegex = /\\(\w+)\s/;
  const match = idRegex.exec(filePath);
  const id = match ? match[1] : null;

  // Remove "C:\fakepath\" and file extension
  const cleanedFilePath = filePath.replace(/^.*\\/, "").replace(/\.[^.]+$/, "");

  console.log("Cleaned file path:", cleanedFilePath);
  console.log("Extracted ID:", id);
  
  return cleanedFilePath;
};
