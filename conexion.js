JS: (function () {

    var names = ["Yaakov", "John Wick", "Santiago", "Jason", "Paul", "Rick", "Larry", "Alexander", "Morty", "Jimmy"];
    
    
    for (var i = 0; i < names.length; i++) {
    
    
      var firstLetter = names[i].charAt(0);
    
    
      if (firstLetter === "J"|| firstLetter === "j") {
        byeSpeaker(names[i]);
      } else {
        helloSpeaker(names[i]);
      }
    }
    })();