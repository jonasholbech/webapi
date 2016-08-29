/**
 * Created by holbech on 29/08/16.
 */
var template = {};
function init() {
    template.content = document.querySelector("#templateTechnologies").content;
    template.header = template.content.querySelector('h1');
    template.container = document.querySelector('body');
    getJSON('data/data.json', show);

}

function getJSON(what, callback){
    fetch(what)
        .then(function (response) {
            return response.json();
        })
        .then(function(data){
            callback(data)
        });
}



function show(data){
    console.log(data);
    data.items.forEach(function(item){
        console.log(item);
        template.header.textContent = item.name;
        var clone = document.importNode(template.content, true);
        template.container.appendChild(clone);
    });
}

init();
