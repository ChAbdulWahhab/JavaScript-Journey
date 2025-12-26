const students = [
    { name: "Ali", present: true },
    { name: "Ahmed", present: true },
    { name: "Sara", present: false },
    { name: "Ayesha", present: true },
    { name: "Usman", present: false },
    { name: "Hina", present: true },
    { name: "Bilal", present: true },
    { name: "Zara", present: false },
    { name: "Hamza", present: true },
    { name: "Noor", present: true }
];

for (let i = 0; i < 10; i++) {

    if (!students[i].present) {
        console.log(students[i].name + " (Absent)");
        continue;
    }

    console.log(students[i].name + " (Present)");
}