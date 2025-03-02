let current = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    current = pins.analogReadPin(AnalogReadWritePin.P0)
    basic.showNumber(current)
    basic.pause(500)
    basic.clearScreen()
    if (current > 0) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
