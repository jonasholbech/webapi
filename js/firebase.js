/**
 * Created by holbech on 29/06/16.
 */
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCeWiXsDhu_wqJQ_8ZLZPn7npNE82md4VE",
    authDomain: "webrtc-84c39.firebaseapp.com",
    databaseURL: "https://webrtc-84c39.firebaseio.com",
    storageBucket: ""
};
firebase.initializeApp(config);

var database = firebase.database();
var template = document.querySelector('#message'),
    h1 = template.content.querySelector('h1'),
    time = template.content.querySelector('time'),
    div = template.content.querySelector('div'),
    container = document.querySelector('article'),
    section = template.content.querySelector('section'),
    form = document.querySelector('form'),
    formTemplate = document.querySelector("#edit"),
    formTemplateHidden=formTemplate.content.querySelector('input[type=hidden]'),
    formTemplateName = formTemplate.content.querySelector('input[name=name]'),
    formTemplateMessage = formTemplate.content.querySelector('textarea');

form.addEventListener('submit', function(e){
   e.preventDefault();
    database.ref("messages").push(
        {
            "name":form.querySelector('input[name=name]').value,
            "message":form.querySelector('textarea').value,
            "stamp": Date.now()
        });
});
//console.log(dataId);

//https://firebase.google.com/docs/database/web/save-data
//https://firebase.google.com/docs/database/web/retrieve-data#listen_for_events
//https://firebase.google.com/docs/database/web/structure-data
//https://console.firebase.google.com/project/webrtc-84c39/database/data
//REPLACE ish? and update i guess
//dangerous (and remove everything else) database.ref("notes").set({"what":"meat", "many":4})

firebase.database().ref('messages/').on('child_added', function(snapshot) {
    h1.textContent = snapshot.val().name;
    time.textContent = getTimestamp(snapshot.val().stamp);
    div.textContent = snapshot.val().message;// + " " + snapshot.key;
    section.dataset.id=snapshot.key;
    var clone = document.importNode(template.content, true);




    clone.querySelector('a.delete').addEventListener('click', function(){
        database.ref('messages/'+snapshot.key).remove()
    });
    clone.querySelector('a.edit').addEventListener('click', function(e){
        formTemplateHidden.value=snapshot.key;
        formTemplateName.value=snapshot.val().name;
        formTemplateMessage.value=snapshot.val().message;
        var c = document.importNode(formTemplate.content, true);
        var a = document.querySelector('section[data-id="'+snapshot.key+'"]');
        a.appendChild(c);
        //TODO, is this the right approach? I think I would rather destroy the existing content or use a modal thingy
        /*
        //database.ref('messages/'+snapshot.key).remove()
        var cont = document.querySelector('section[data-id="'+snapshot.key+'"]'),
            h1 = cont.querySelector('h1'),
            message = cont.querySelector('div');
        h1.setAttribute("contenteditable", true);
        message.setAttribute("contenteditable", true);
        h1.focus();
        */
    });
    container.appendChild(clone);
});
firebase.database().ref('messages/').on('child_removed', function(snapshot) {
    var a = document.querySelector('section[data-id="'+snapshot.key+'"]');
    a.classList.add('hide');
    a.addEventListener('transitionend', function(){
       container.removeChild(a);
    });
});
function getTimestamp() {
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0"+(date.getMonth()+1)).substr(-2);
    var day = ("0"+date.getDate()).substr(-2);
    var hour = ("0"+date.getHours()).substr(-2);
    var minutes = ("0"+date.getMinutes()).substr(-2);
    var seconds = ("0"+date.getSeconds()).substr(-2);

    return year+"-"+month+"-"+day+" "+hour+":"+minutes+":"+seconds;
}