const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector('ul');

function inputLength() {
    return input.value.length;
}

function createListElement() {

    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";


    li.addEventListener("click", function() {
        let done = this.classList.toggle("done");
        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("deleteButton");

        if (done) {
            deleteBtn.appendChild(document.createTextNode("delete"));
            deleteBtn.classList = "deleteButton";
            li.appendChild(deleteBtn);

            deleteBtn.addEventListener("click", function() {
                this.parentElement.remove();
            });
        } else {
            this.getElementsByClassName("deleteButton")[0].remove();
        }
    });

    input.value = "";
}

function addListAfterKeypress(event) {
        if (inputLength() > 0 && event.keyCode === 13) {
            createListElement();
        }
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}


button.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeypress);
