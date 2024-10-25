const fs = require("fs");

// Write
fs.writeFile("file1.txt", "This is the initial content.\n", (err) => {
  if (err) {
    console.error("Error writing to the file:", err);
    return;
  }
  console.log("File written successfully!");

  //  Read
  fs.readFile("file2.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }
    console.log("Current file content:", data);

    //  Append
    fs.appendFile("file3.txt", "This line is appended.\n", (err) => {
      if (err) {
        console.error("Error appending to the file:", err);
        return;
      }
      console.log("Text appended successfully!");

      // 5. Delete
      fs.unlink("file5.txt", (err) => {
        if (err) {
          console.error("Error deleting the file:", err);
          return;
        }
        console.log("File deleted successfully!");
      });
    });
  });
});
