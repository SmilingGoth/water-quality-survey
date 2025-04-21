function question5 () {
    basic.pause(1000)
    basic.clearScreen()
    basic.showString("Q5: Still happy?")
    input.onButtonPressed(Button.A, function () {
        response5 = "Yes"
        basic.showIcon(IconNames.Happy)
        showSummary()
    })
input.onButtonPressed(Button.B, function () {
        response5 = "No"
        basic.showIcon(IconNames.Sad)
        showSummary()
    })
}
function question2 () {
    basic.pause(1000)
    basic.clearScreen()
    basic.showString("Q2: Taste?")
    input.onButtonPressed(Button.A, function () {
        response2 = "Good"
        basic.showIcon(IconNames.Yes)
        question3()
    })
input.onButtonPressed(Button.B, function () {
        response2 = "Chlorine"
        basic.showString("Cl")
        question3()
    })
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
        response2 = "Other/Bad"
        basic.showIcon(IconNames.No)
        question3()
    })
}
function showSummary () {
    basic.pause(1000)
    basic.clearScreen()
    basic.showString("Sending...")
    // Send all responses via radio
    radio.sendString("Q1: " + response1)
    radio.sendString("Q2: " + response2)
    radio.sendString("Q3: " + response3)
    radio.sendString("Q4: " + response4)
    radio.sendString("Q5: " + response5)
    basic.pause(1000)
    basic.clearScreen()
    basic.showString("Summary")
    // Show responses one by one
    basic.showString("1:" + response1)
    basic.pause(500)
    basic.showString("2:" + response2)
    basic.pause(500)
    basic.showString("3:" + response3)
    basic.pause(500)
    basic.showString("4:" + response4)
    basic.pause(500)
    basic.showString("5:" + response5)
    basic.pause(1000)
    basic.showIcon(IconNames.Heart)
}
input.onButtonPressed(Button.A, function () {
    response1 = "Yes"
    basic.showIcon(IconNames.Happy)
    question2()
})
function question3 () {
    basic.pause(1000)
    basic.clearScreen()
    basic.showString("Q3: Appearance?")
    input.onButtonPressed(Button.A, function () {
        response3 = "Clear"
        basic.showIcon(IconNames.SmallSquare)
        question4()
    })
input.onButtonPressed(Button.B, function () {
        response3 = "Brown"
        basic.showIcon(IconNames.Skull)
        question4()
    })
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
        response3 = "White"
        basic.showIcon(IconNames.Square)
        question4()
    })
}
function question4 () {
    basic.pause(1000)
    basic.clearScreen()
    basic.showString("Q4: Smell?")
    input.onButtonPressed(Button.A, function () {
        response4 = "Good"
        basic.showIcon(IconNames.Happy)
        question5()
    })
input.onButtonPressed(Button.B, function () {
        response4 = "Bad"
        basic.showIcon(IconNames.Sad)
        question5()
    })
}
input.onButtonPressed(Button.B, function () {
    response1 = "No"
    basic.showIcon(IconNames.Sad)
    question2()
})
let response1 = ""
let response5 = ""
let response4 = ""
let response3 = ""
let response2 = ""
radio.setGroup(7)
// Question 1
basic.showString("Q1: Happy with water?")
