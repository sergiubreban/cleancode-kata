function dog() {
  return {
    poop: () => {console.log("pooop")}
  }
}

function cat() {
  return {
    poop: () => {
      console.log("pooop")
    }
  }
}

function robot() {
  return {
    sayHi: () => {console.log('Hi, I am a robot!')}
  }
}

function dogRobot() {
  return {
    sayHi: () => {console.log('Hi, I am a robot!')},
    poop: () => {console.log("pooop")}
  }
}
