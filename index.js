const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin (Array) {
    if (!Array.find(function(s) {return s.result == "W"})){
    return undefined
    } else{ 
   let A = Array.find(function(s) {return s.result == "W"}).year
    return A
    }
}