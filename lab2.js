// TASK 1: Read Text from DOM
document.getElementById("readBtn").addEventListener("click", function () {
    const text = document.getElementById("message").textContent;
    alert(text);
});

// TASK 2: Change Text Dynamically
document.getElementById("changeBtn").addEventListener("click", function () {
    document.getElementById("title").textContent = "Updated Title";
});

// TASK 3: Change Style Using JavaScript
document.getElementById("styleBtn").addEventListener("click", function () {
    const p = document.getElementById("para");
    p.style.color = "pink";
    p.style.fontSize = "20px";
});

// TASK 4: Show / Hide Element
document.getElementById("toggleBtn").addEventListener("click", function () {
    const box = document.getElementById("box");
    box.style.display = box.style.display === "none" ? "block" : "none";
});

// TASK 5 & 6: Create and Remove Element
document.getElementById("addBtn").addEventListener("click", function () {
    const p = document.createElement("p");
    p.textContent = "New paragraph added! (Click to remove)";
    
    p.addEventListener("click", function () {
        p.remove();
    });

    document.getElementById("container").appendChild(p);
});

// TASK 7: Input to Output
document.getElementById("showName").addEventListener("click", function () {
    const name = document.getElementById("nameInput").value;
    document.getElementById("output").textContent = "Hello " + name;
});

// TASK 8: Counter App
let count = 0;

document.getElementById("plus").addEventListener("click", function () {
    count++;
    document.getElementById("count").textContent = count;
});

document.getElementById("minus").addEventListener("click", function () {
    count--;
    document.getElementById("count").textContent = count;
});
