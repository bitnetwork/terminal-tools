const termtools = require("../lib/index.js");

// async function main() {
function main() {
  let terminal = new termtools({terminal: process.argv[2]});
  terminal.changeScreen(true);
  setTimeout(function() {
    terminal.clear();
    try{terminal.statusLine("OH LOOK A TITLE");} catch(e) {}
    terminal.write("Look at this terminal that I just found.\nLEGIT THO LOOK AT ALL DIS FREE SPACE TO DO SHIT\nBest of all, when this exits, it all gets erased and it looks like nothing happened.\n(p.s.) don't do ctrl-c on this screen cause you can't get back to your old scrollback in the terminal\n(p.s.s.) your cursor is gone via magic");
    terminal.reset();
    terminal.write("test");
    try {terminal.cursorVisible(false);} catch(e) {}
    
    setTimeout(function() {
      terminal.changeScreen(false);
      try {terminal.cursorVisible(true);} catch(e) {}
      terminal.write("And here we are back at the shell again.\nHow cooul is dat?\nWell k bai lol\n");
    }, 7000);
  }, 1000);
}

main();
