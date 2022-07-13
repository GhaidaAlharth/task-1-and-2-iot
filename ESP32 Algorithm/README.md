# Algorithm for running the ESP32 tool using the Arduino IDE

Step 1: Download the current level of Arduino ide for free from >> https://www.arduino.cc/en/Main/Software


Step 2:  Click on Tools, then board: “Arduino uno”, then “Board manager” and  then search for ESP32 if you get no result when you search then go to step 3


Step 3: Open the Arduino and click File >> then Preferences and put a Library >> https://dl.espressif.com/dl/package_esp32_index.json


Step 4: Click on Tools, then board: “Arduino uno”, then “Board manager” and then search for ESP32 and download it, will take some time to install.
After this, close the window of board manager and your Arduino IDE is ready to program ESP32.


Step 5: and now for start programming ESP32 by using Arduino IDE connect your ESP32 to your computer.


Step 6: Select the Board, then press Tools, then board: "Arduino uno", then "Board manager", then press ESP32 Arduino, and then press WEMOS D1 MINI ESP32


Step 7: If the port is connected then select the port and then click on File, Examples, Basics and blink and we will have a code that have a loop, where HIGH turns on the light and LOW turns off the light, and we set the time to turn on and off in seconds using delay,  then press the arrow button to raise it on the tool


Step 8: If the port is not connected, then you need to define the port on your device, you need to update the driver: go to settings, then device manager, then right-click on the device and update, or search for cp2104 driver and download the software CP210x Universal Windows Driver  then go settings, then device manager, then right-click on the device then  update driver then browse  then put the  location of the drivers, after the port is connected do  Step 7.

