---
title: "Arduino Powered Arcade Joystick"
date: "2015-07-19"
layout: post
categories: notebook
---

## Introduction

Who doesn’t love some classic arcade gaming fun? Although there are countless versions of these games for our iPhones and tablets, there really is no substitute for the classic arcade stick and the colourful buttons with that vintage clicky feel. Now for this project I didn’t document the build process step-by-step but it was actually relatively simply to get everything in place once I had the proper materials.

![Arduino Joystick](/assets/images/post_images/joystick.jpg "Arduino Joystick")

## Components

Here's what we need

- 1 Joystick
- 3 Concave Buttons
- 1 Arduino ProMicro
- 1 Modular Breadboard
- Some wires and solder
- Wooden or Plastic box with removable lid. I ended up building a custom one from scrap wood.
- Some time

To start off with you are going to need some components. The brains of the operation will be an SparkFun Arduino ProMicro. Now you could also use an Arduino Uno, Arduino Leonardo or whatever you have on your workbench. I’m using the ProMicro mainly due to it’s size. The joystick I decided to use was a 4-way Pac-Man type arcade joystick from SparkFun. It’s a digital arcade stick with 4 microswitches to detect on/off position and has a spring return to centre. It’s very rugged in construction and the red ball on top really gives it a funky retro feel. The arcade stick is a decent size, however the joystick handle might be a little short after it’s mounted as the metal plate is designed to go below the surface of your play-space with the stick pointing through a mounting hole.

You’ll also need three or more concave arcade buttons. I went for three as many arcade games such as Pac-Man, Frogger or Galaga have at minimum a fire button, a coin button, and a start button. I went for two blue and one green button, but you can choose whatever fits your project. You’ll find that other games require more than 3 buttons, but you can also create hotkeys which combine two buttons and make them act as one. For instance I rigged up my MAME games to exit when I press all three face buttons.

Finally you will need a small modular breadboard, the one I used had a nice adhesive mount on the bottom, so it fitted in my project box easily along with some wires to connect everything together.

## Arcade Stick & Button Mounting

You’ll want to drill some holes now for each of your buttons along with the joystick on your project box lid. Ideally you’ll want to use a 1 1/8th inch paddle bit (1.125" / 28mm), however I only had a 32mm paddle bit and it worked fine, although the black rim of the buttons is visible. It’s worth noting that depending on the size of the hole you drill, in order to mount each button, the switch will first have to be removed from the assembly. This is best accomplished by using a small screwdriver to pry back a plastic tab that has a knob that fits in a hole of the actual switch. The switch can then be rotated and the other knob comes out much more easily. In order to mount the joystick you need to unscrew the ball from the handle, you can then attach the joystick mounting plate using some wood screws.

## Wiring

You’ll first want to solder some header pins onto the Arduino board (if you are using one which uses pins) and then fit it straight into the breadboard. For each direction our joystick has one microswitch, we are going to use the Arduino’s build in pull-up resistors in order to drive it, so all we need to do is connect one plate of the microswitch to an input pin (Such as A0, A1, A2, A3) and one to common ground (GND). It helps if you use the same type of plate for each direction, as on the joystick one plate of the switch sticks out at an angle and one sits flat against the mounting plate.

With the buttons, you’ll notice that these microswitch have 3 pins. One will be labelled common and this is wired to the common ground (GND). One of the others goes to VCC and the final pin goes to your input pin.

## Code

For the code I followed http://www.imaginaryindustries.com/blog/?p=80 in order to let the Arduino be mapped the input buttons to something a host machine can understand. I had previously modified the Arduino firmware to turn my ProMicro into a HID device, but if you use something like the Leonardo you won’t need to do this.

## Testing

If you have a windows machine you can go ahead and plug it straight into a USB slot. You can set it as a USB Game Controller. If you go into the properties you should see a nice axis and if everything is working when you move the arcade stick around, the small crosshair will jump to each direction. Pressing one of the buttons will also turn the small buttons to the off position. Remember this is because we are using the pull up resistor in the Arduino so all of our buttons are always firing HIGH until we close the circuit which turns them LOW.

## RaspberryPi + RetroArch

Now all that’s required is to turn your Laptop or RaspberryPi into a MAME style emulator.

[Click here for the fantastic lifehacker article for info on how to do that!](http://lifehacker.com/how-to-turn-your-raspberry-pi-into-a-retro-game-console-498561192)
