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
for (let index = 0; index < 6; index++) {
    if (randint(0, 5) == 0) {
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
        }
    } else if (randint(0, 5) == 1) {
        for (let index = 0; index < 1; index++) {
            music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
            RobotCar_Keyestudio.Motors.spin(200)
            basic.pause(5000)
            RobotCar_Keyestudio.Motors.stop()
        }
    } else if (randint(0, 5) == 2) {
        for (let index = 0; index < 4; index++) {
            RobotCar_Keyestudio.Motors.spin(50)
            basic.pause(1000)
            RobotCar_Keyestudio.Motors.stop()
            basic.pause(200)
        }
    } else if (randint(0, 5) == 3) {
        for (let index = 0; index < 5; index++) {
            RobotCar_Keyestudio.Leds.showRed()
            music.playTone(494, music.beat(BeatFraction.Half))
            basic.pause(500)
            music.playTone(349, music.beat(BeatFraction.Half))
            RobotCar_Keyestudio.Leds.showBlue()
            basic.pause(500)
        }
    } else if (randint(0, 5) == 4) {
        basic.showLeds(`
            # . . . #
            . . # . .
            . . . . .
            . # # # .
            # . . . #
            `)
    } else if (randint(0, 5) == 5) {
        basic.showLeds(`
            # . . . #
            . . # . .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
}
basic.forever(function () {
	
})
