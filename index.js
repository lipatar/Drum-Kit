const numberOfDrums = document.querySelectorAll("[data-drum]").length

for (i=0; i<numberOfDrums; i++) {
  document.querySelectorAll("[data-drum]")[i].addEventListener("click", function() {
    // get the text from the button that was pressed and run the functions
    const buttonInnerHTML = this.innerHTML
    sound(buttonInnerHTML)
    animation(buttonInnerHTML)
  })
}

// get the key that was pressed and run the functions
document.addEventListener("keydown", function(event) {
  sound(event.key)
  animation(event.key)
})

// play sound based on the key that was pressed or clicked
function sound(key) {
  if (key != null) {
    switch(key) {
      case "w":
        const tom1 = new Audio("./sounds/tom-1.mp3")
        tom1.play()
        break
      case "a":
        const tom2 = new Audio("./sounds/tom-2.mp3")
        tom2.play()
        break
      case "s":
        const tom3 = new Audio("./sounds/tom-3.mp3")
        tom3.play()
        break
      case "d":
        const tom4 = new Audio("./sounds/tom-4.mp3")
        tom4.play()
        break
      case "j":
        const crash = new Audio("./sounds/crash.mp3")
        crash.play()
        break
      case "k":
        const kick = new Audio("./sounds/kick-bass.mp3")
        kick.play()
        break
      case "l":
        const snare = new Audio("./sounds/snare.mp3")
        snare.play()
        break
  
      default:
        break
    }
  }
}

// animate buttons based on the key that was pressed  or clicked
function animation(key) {
  if (key != null) {
    const activeKey = document.querySelector("." + key)
    activeKey.classList.add("pressed")
    setTimeout(function() {
      activeKey.classList.remove("pressed")
    }, 100)
  }
}