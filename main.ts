for (let index = 0; index < 4; index++) {
    RobotCar_Keyestudio.Leds.showRed()
    basic.pause(500)
    RobotCar_Keyestudio.Leds.showGreen()
    basic.pause(500)
    RobotCar_Keyestudio.Leds.showBlue()
    basic.pause(500)
    RobotCar_Keyestudio.Leds.showWhite()
    basic.pause(500)
}
RobotCar_Keyestudio.Leds.ledsOff()
for (let index = 0; index < 1; index++) {
    RobotCar_Keyestudio.Motors.move(50)
    basic.showArrow(ArrowNames.North)
    basic.pause(1000)
    RobotCar_Keyestudio.Motors.stop()
    basic.pause(500)
    RobotCar_Keyestudio.Motors.move(-50)
    basic.showArrow(ArrowNames.South)
    basic.pause(1000)
    RobotCar_Keyestudio.Motors.stop()
    basic.clearScreen()
}
for (let index = 0; index < 1; index++) {
    music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
    RobotCar_Keyestudio.Motors.spin(200)
    basic.pause(5000)
    RobotCar_Keyestudio.Motors.stop()
}
music.stopAllSounds()
for (let index = 0; index < 4; index++) {
    basic.pause(1000)
    RobotCar_Keyestudio.Motors.steer(50, 50)
    RobotCar_Keyestudio.Motors.stop()
    basic.pause(200)
}
for (let index = 0; index < 5; index++) {
    RobotCar_Keyestudio.Leds.showRed()
    music.playTone(494, music.beat(BeatFraction.Half))
    basic.pause(500)
    music.playTone(349, music.beat(BeatFraction.Half))
    RobotCar_Keyestudio.Leds.showBlue()
    basic.pause(500)
}
RobotCar_Keyestudio.Leds.ledsOff()
music.stopAllSounds()
for (let index = 0; index < 3; index++) {
    if (randint(1, 3) == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.pause(2000)
    } else if (randint(1, 3) == 2) {
        basic.showLeds(`
            . . # . .
            # # # . .
            # . # # #
            # # . # .
            . # # # .
            `)
        basic.pause(2000)
    } else if (randint(1, 3) == 3) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(2000)
    }
}
basic.clearScreen()
basic.showString("Hello!")
basic.pause(500)
basic.showString("am")
basic.pause(500)
basic.showString("micro:bit")
basic.pause(500)
basic.clearScreen()
if (input.temperature() < 15) {
    basic.showIcon(IconNames.Sad)
} else {
    basic.showIcon(IconNames.Happy)
}
basic.pause(2000)
basic.clearScreen()
