# Smart Shower – Graduation Project

[![Expo](https://img.shields.io/badge/Expo-React%20Native-blue?logo=expo)](https://expo.dev/)  
[![Arduino](https://img.shields.io/badge/Arduino-Sketch-green?logo=arduino)](https://www.arduino.cc/)  
[![ESP32](https://img.shields.io/badge/ESP32-Microcontroller-orange?logo=espressif)](https://www.espressif.com/)  
[![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-red.svg)](LICENSE)

A mobile-controlled **smart shower system** that monitors usage and enables safe, efficient water and energy management.  
This project combines a **React Native (Expo)** mobile application with **Arduino/ESP32 firmware** to collect sensor data and control actuators.

---

## 🚀 Features

- Real-time **shower telemetry**: monitor temperature, flow, and duration  
- **Mobile control**: start/stop, configure safety limits, and select modes  
- **Safety measures**: prevent scalding by enforcing maximum temperature  
- **Efficiency**: introduce eco-modes with session limits and flow caps  
- **Cross-platform firmware**: two options provided (Arduino & ESP32)  
- **Offline-first**: device logic runs locally; mobile app provides interface  

---

## 📂 Repository Structure

```plaintext
TheGraduationProject_SmartShower/
├── App.js
├── AppNavigator.js
├── index.js
├── store.js
├── navigationReducer.js
├── rootReducer.js
├── app.json
├── babel.config.js
├── package.json
├── tsconfig.json
├── CodeArduino/      # Arduino firmware
├── CodeESP32/        # ESP32 firmware
└── DOSSIERS.zip      # Documentation / project artifacts
Firmware

Arduino path: Arduino IDE 2.x + board drivers and sensor libraries

ESP32 path: Arduino IDE or PlatformIO + ESP32 board package
