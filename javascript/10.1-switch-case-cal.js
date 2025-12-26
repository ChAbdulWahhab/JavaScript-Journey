let displayArea = document.getElementById("displayArea");
let buttons = document.querySelectorAll("button");

let content = "";

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        let action = btn.getAttribute("data-action");
        let value = btn.textContent;

        switch (action) {
            case "equals":
                try {
                    content = eval(content);
                    displayArea.value = "=" + content;
                }
                catch {
                    displayArea.value = "Error";
                    content = "";
                }
                break;

            case "erase":
                content = content.slice(0, -1);
                displayArea.value = content;
                break;

            case "clear":
                content = "";
                displayArea.value = content;
                break;

            default:
                value === "X"
                    ? (content += "*")
                    : (content += value)

                displayArea.value = content;
        }

    });
});