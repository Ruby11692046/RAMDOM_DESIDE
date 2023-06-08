const container = document.getElementById('container');
const todo = document.getElementsByClassName('todo');
const output = document.getElementById('output');

function add_input() {
    let new_container = document.createElement('div');
    container.after(new_container);
    new_container.innerHTML = '<input type="text" class="todo"><input type="button" value="追加" id="add" onclick="add_input()">';
}

function decide(){
    const random = Math.floor((Math.random() * 100) % todo.length);
    output.innerHTML = "<h2>あなたが今日やるのは...." + todo[random].value + "です</h2>";
}