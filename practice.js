const fs = require('fs');

fs.writeFile('newfile.txt', 'this is new file', (err) => {
    if (err) {
        console.log("There is some error occurred:", err);
        return;
    }
    console.log("File is successfully written");
});
// Reading  a file in FS


fs.readFile('newfile.txt', 'utf8', (err, data) => {
    if (err) {
        console.log("There is some error occurred:", err);
        return;
    }
    console.log("Current file data:", data);
});

//Apend 
fs.appendFile('newfile.txt','This line is appended./n',(err)=>{
if(err){
    console.log("There is error  occurred:",err);
    return   
}
console.log("Text appended successfully");

//delete 
fs.unlink('newfile.txt', (err) => {
    if (err) {
        console.log("There is some error occurred:", err);
        return
    }
    console.log('File deleted successfully');
    



})
})

