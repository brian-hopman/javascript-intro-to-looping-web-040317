function forLoop(ary){
  for (var i = 0; i < 25; i++) {
    if (i == 1) {
      ary.push(`I am 1 strange loop.`)
    }
    else {
      ary.push(`I am ${i} strange loops.`)
    }
  }
  return ary
}

function whileLoop(arg) {
  while (arg>0) {
    console.log(--arg)
  }
  return `done`
}

function doWhileLoop(ary) {
  do {
    ary.pop()
  } while (ary.length > 0 && maybeTrue());
  return ary
}


function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}
