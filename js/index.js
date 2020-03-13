// https://www.cssscript.com/simulate-typewriter-typing-screen-typing-js/

// selector, speed, initialDelay
_$("typewriter", 100, 800)
  .type("Hello World").speed(100)
  .lineBreak()
  .type("from Charles Siu!").speed(100)
