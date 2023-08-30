const fs = require('fs');
const path = require('path');

const directory = './dist';

const walkSync = (dir, filelist = []) => {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walkSync(filePath, filelist);
    } else {
      filelist.push(filePath);
    }
  });
  return filelist;
};

const replaceExtension = (filePath, oldExt, newExt) => {
  const parsedPath = path.parse(filePath);
  if (parsedPath.ext === oldExt) {
    parsedPath.ext = newExt;
    return path.format(parsedPath);
  }
  return filePath;
};

const files = walkSync(directory);

files.forEach(file => {
  const newFilePath = replaceExtension(file, '.scss', '.css');
  if (newFilePath !== file) {
    fs.renameSync(file, newFilePath);
    const fileContent = fs.readFileSync(newFilePath, 'utf-8');
    const updatedContent = fileContent.replace(/\.scss/g, '.css');
    fs.writeFileSync(newFilePath, updatedContent, 'utf-8');
  }
});

