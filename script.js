const container = document.getElementById('container');
const master_container = document.getElementById('master_container');
const todo = document.getElementsByClassName('todo');
const output = document.getElementById('output');
const save_html = document.getElementById("save_html");
var form = document.forms.load_html;

var container_counter = 0;

form.myfile.addEventListener("change", function (e) {
    var result = e.target.files[0];

    //FileReaderのインスタンスを作成する
    var reader = new FileReader();

    //読み込んだファイルの中身を取得する
    reader.readAsText(result);

    //ファイルの中身を取得後に処理を行う
    reader.addEventListener('load', function () {

        //ファイルの中身を改行で区切る
        const result_split = reader.result.split("\n");

        //ファイルの中身をtodo内に転送する
        for (i = 0; i < result_split.length; i++) {
            //これは2の配列をtodoに格納する処理
            if (i != 0) {
                add_input()
            }
            todo[i].value = result_split[i];
        }
    })
})

function add_input() {
    let new_container = document.createElement('div');
    new_container.id = "container"
    master_container.appendChild(new_container);
    new_container.innerHTML = '<input type="text" class="todo" value=""><input type="button" value="追加" id="add" onclick="add_input()">';
}

function decide() {
    const random = Math.floor((Math.random() * 100) % todo.length);
    output.innerHTML = "<h2>あなたが今日やるのは...." + todo[random].value + "です</h2>";
}

save_html.addEventListener('click', function () {
    var save_data = "";
    for (i = 0; i < todo.length; i++) {
        save_data = save_data + todo[i].value + "\n";
    }
    const save_create = new Blob([save_data], { "type": "text/plain" });
    save_html.href = window.URL.createObjectURL(save_create);
})