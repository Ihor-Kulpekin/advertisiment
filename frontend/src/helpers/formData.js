export const formData = (singleFile) => {
  const fileToUpload = singleFile;
  const data = new FormData();
  console.log('fileToUpload', fileToUpload)
  data.append('name', fileToUpload.name);
  data.append('file', fileToUpload, fileToUpload.name);

  return data;
}
