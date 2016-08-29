/**
 * Created by holbech on 29/08/16.
 */
(function(){
var template = {};
function init() {
    template.content = document.querySelector("#templateTechnologies").content;
    template.header = template.content.querySelector('h1');
    template.container = document.querySelector('body');
    getJSON('data/data.json', 'json', show);

}

function getJSON(what, type, callback){
    fetch(what)
        .then(function (response) {
            return response[type]();
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
if(!'fetch' in window){
    console.log("loading polyfill");
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = 'js/polyfills/fetch.polyfill.js';
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
    document.addEventListener('load', init);
} else {
    document.addEventListener('DOMContentLoaded', init);
}
})();