process.stdout.write("Downloading 0%\r");
setTimeout(() =>
    process.stdout.write("Downloading 50%\r")
    , 1000);
setTimeout(() =>
    process.stdout.write("Downloading 100%\n")
    , 2000);

// Downloading 0%
// Downloading 50%
// Downloading 100%