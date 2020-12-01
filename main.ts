radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    // receivedNumber is some other value
    if (receivedNumber == 0) {
        basic.showIcon(IconNames.Happy)
        radio.sendString("happy")
    } else {
        basic.showIcon(IconNames.Angry)
        radio.sendString("evil")
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
radio.onReceivedString(function (receivedString) {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
radio.setGroup(1)
