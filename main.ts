input.onButtonPressed(Button.A, function () {
    basic.pause(1000)
    nezhaV2.combinationMotorNezhaV2VerticallDirectionMove(75, NezhaV2VerticallDirection.Up)
    basic.pause(2000)
    nezhaV2.stopCombinationMotor()
    basic.pause(500)
    nezhaV2.setSpeedfLeftRightWheel(100, -100)
    basic.pause(1000)
    nezhaV2.stopCombinationMotor()
    basic.pause(1000)
    start = 1
})
let start = 0
basic.showIcon(IconNames.Yes)
nezhaV2.runningMotorToeSpeed(NezhaV2MotorPostionLeft.Degree, NezhaV2MotorPostionRight.A)
start = 0
PlanetX_IOT.initWIFI(PlanetX_IOT.DigitalRJPin.J1, BaudRate.BaudRate115200)
PlanetX_IOT.connectWifi("Florin", "Bugh34R0sc4")
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (start == 1) {
        PlanetX_IOT.connectThingSpeak()
        PlanetX_Display.oledClear()
        PlanetX_Display.showUserText(1, "                      ")
        PlanetX_Display.showUserText(2, "Temperatura e " + PlanetX_Basic.dht11Sensor(PlanetX_Basic.DigitalRJPin.J3, PlanetX_Basic.DHT11_state.DHT11_temperature_C))
        PlanetX_Display.showUserText(3, "Umiditatea e " + PlanetX_Basic.dht11Sensor(PlanetX_Basic.DigitalRJPin.J3, PlanetX_Basic.DHT11_state.DHT11_humidity))
        PlanetX_Display.showUserText(4, "Nivelul UV e " + PlanetX_Basic.UVLevel(PlanetX_Basic.AnalogRJPin.J2))
        PlanetX_Display.showUserText(5, "Distanta e " + PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J4, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm))
        PlanetX_IOT.setData(
        "5B3T9V0PEBURQUMJ",
        PlanetX_Basic.dht11Sensor(PlanetX_Basic.DigitalRJPin.J3, PlanetX_Basic.DHT11_state.DHT11_temperature_C),
        PlanetX_Basic.dht11Sensor(PlanetX_Basic.DigitalRJPin.J3, PlanetX_Basic.DHT11_state.DHT11_humidity),
        PlanetX_Basic.UVLevel(PlanetX_Basic.AnalogRJPin.J2),
        PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J4, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm)
        )
        PlanetX_IOT.uploadData()
        basic.pause(1000)
    }
})
