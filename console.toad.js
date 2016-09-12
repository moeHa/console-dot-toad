  /**
   *  One copy of console.frog.
   *  Console.toad. A better way to log!
   */

  (function dothething(global) {

    if( !global.console ) {
      return;
    }

    global.console.toad = function() {

      var i,
        css = "color: #333";

      var inBrowser = (typeof window !== 'undefined');

      var toad;
      if( inBrowser ) {
        toad = ['%c%c',
          "%c/_____    _____\\%c",
          "%c|  \\\\ |__|  \\\\ |%c",
          "%c|_____/  \\_____|%c",
          "%c     /^ ^ \\     %c",
          "%c   (  ____; )  %c",
          '%c%c'];
      } else {
        toad = ['',
          "/_____    _____\\",
          "|  \\\\ |__|  \\\\ |",
          "|_____/  \\_____|",
          "     /^ ^ \\     ",
          "   (  ____; )  ",
          ''];
      }

      var args = Array.prototype.slice.call(arguments);
      var stringOfArgs = args.join(' ');

      if( stringOfArgs.length > 0 ) {
        toad[1] = toad[1] + "   ---" + ("-".repeat(stringOfArgs.length)) + "-";
        toad[2] = toad[2] + "-(   " + stringOfArgs + "   )";
        toad[3] = toad[3] + "   ---" + ("-".repeat(stringOfArgs.length)) + "-";
      }

      if( inBrowser ) {
        for( i = 0; i < toad.length; i++ ) {
          console.log(toad[i], css, "");
        }
      } else {
        for( i = 0; i < toad.length; i++ ) {
          console.log(toad[i]);
        }
      }
    }
  })(this);
