const shouldTestPass = true;

if(shouldTestPass) {
    console.log("test passed!")
    process.exit(0) // 0 means, exit proccess without error
} else {
    console.log("test failed!")
    process.exit(1) // 1 means, exit process with error 
}

