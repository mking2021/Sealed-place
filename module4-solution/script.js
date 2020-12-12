/*
Solution of module 4:
Expected output:
Hello Yaakov
Good Bye John
Good Bye Jena
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Pam
Hello Laura
Good Bye Jack
*/

(function() {
    var names = ["Yaakov", "John", "Jena", "Jason", "Paul", "Frank", "Larry", "Pam", "Laura", "Jack"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
