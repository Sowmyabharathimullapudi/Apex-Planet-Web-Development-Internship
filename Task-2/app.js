
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();

    if (name.length < 3) {
        alert("Name must be at least 3 characters.");
        return;
    }
    if (!email.includes('@') || !email.includes('.')) {
        alert("Enter a valid email address.");
        return;
    }
    alert("✅ Thank you, " + name + "! Your message has been sent.");
    this.reset();
});


function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskValue = taskInput.value.trim();
    if (!taskValue) {
        alert("Please enter a task.");
        return;
    }

    let li = document.createElement('li');
    li.textContent = taskValue;

    let delBtn = document.createElement('button');
    delBtn.textContent = "❌";
    delBtn.onclick = function() {
        if (confirm("Delete this task?")) {
            li.remove();
        }
    };

    li.appendChild(delBtn);
    document.getElementById('taskList').appendChild(li);
    taskInput.value = "";
}

function addImage() {
    let imgUrl = document.getElementById('imgUrl').value.trim();
    if (!imgUrl) {
        alert("Please enter an image URL.");
        return;
    }

    let img = document.createElement('img');
    img.src = imgUrl;
    img.alt = "Gallery Image";

    img.onerror = function() {
        alert("Invalid image URL.");
        img.remove();
    };

    document.getElementById('galleryGrid').appendChild(img);
    document.getElementById('imgUrl').value = "";
}
