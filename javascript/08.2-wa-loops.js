let whatsappLink = document.getElementById("whatsappLink");
let phoneNumber = prompt("Enter Phone Number");
let text = prompt("Enter Message");
let message = "";
let times = parseInt(prompt("How many times you want to send this message?"));

if (phoneNumber.length == 12 && times <= 50) {
    for (i = 1; i <= times; i++) {
        message += i + ". " + text + "\n";
    }
} else {
    alert("Phone number max length should be 12 or 50 is max quota of sending messages.");
}

let fullURL = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
whatsappLink.href = fullURL;