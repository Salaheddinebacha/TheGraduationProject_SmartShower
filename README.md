
# Smart Shower – Graduation Project

[![Expo](https://img.shields.io/badge/Expo-React%20Native-blue?logo=expo)](https://expo.dev/)  
[![Arduino](https://img.shields.io/badge/Arduino-Sketch-green?logo=arduino)](https://www.arduino.cc/)  
[![ESP32](https://img.shields.io/badge/ESP32-Microcontroller-orange?logo=espressif)](https://www.espressif.com/)  
[![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-red.svg)](LICENSE)

A mobile-controlled **smart shower system** that monitors usage and enables safe, efficient water and energy management.  
This project combines a **React Native (Expo)** mobile application with **Arduino/ESP32 firmware** to collect sensor data and control actuators.

---

## 🚀 Features

- Real-time **shower telemetry**: monitor temperature, flow, and duration.  
- **Mobile control**: start/stop, configure safety limits, and select modes.  
- **Safety measures**: prevent scalding by enforcing maximum temperature.  
- **Efficiency**: introduce eco-modes with session limits and flow caps.  
- **Cross-platform firmware**: two options provided (Arduino & ESP32).  
- **Offline-first**: device logic runs locally; mobile app provides interface.  

---

## 📂 Repository Structure

```

TheGraduationProject\_SmartShower/
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

````

---

## 🛠 Requirements

### Mobile App
- Node.js ≥ 18
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Android/iOS device with **Expo Go** or emulator

### Firmware
- **Arduino path**: Arduino IDE 2.x + board drivers and sensor libraries  
- **ESP32 path**: Arduino IDE or PlatformIO + ESP32 board package  

---

## 📱 Setup – Mobile App

1. Install dependencies:
   ```bash
   npm install
   # or
   yarn
````

2. Start the development server:

   ```bash
   npx expo start
   ```
3. Open the app in Expo Go (scan the QR code) or run on an emulator.

---

## 🔧 Setup – Firmware

### Arduino

1. Open a sketch from `CodeArduino/` in Arduino IDE.
2. Install required libraries (e.g., temperature & flow sensors, relay modules).
3. Select your board and COM port.
4. Upload the code.

### ESP32

1. Open a sketch from `CodeESP32/`.
2. Install the **ESP32 board package**.
3. Configure Wi-Fi/BLE credentials in the code.
4. Upload and monitor serial output for connection info.

---

## ⚙️ Hardware Overview

* **Microcontroller**: Arduino board or ESP32
* **Sensors**: Waterproof temperature sensor (e.g., DS18B20), flow sensor (e.g., YF-S201)
* **Actuators**: Solenoid valve controlled via relay
* **Power supply**: Appropriately rated DC source
* **Safety**: Isolation, fuses, waterproofing, and GFCI/RCD protection

---

## 🧪 Testing

* **Mobile App**: use Expo to simulate device data while developing UI.
* **Firmware**: test sensors with serial logs before integrating with plumbing.
* **Integration**: verify end-to-end flow (app → microcontroller → sensors/actuators).

---

## 🗺 Roadmap

* [ ] Persist usage history in mobile app
* [ ] Add OTA firmware updates for ESP32
* [ ] Add leak detection and alerting
* [ ] Optional cloud sync for statistics
* [ ] Home automation (Home Assistant) integration

---

## 🤝 Contributing

This is a **graduation project** and not currently open for external contributions.
For academic or research purposes, please contact the project owner before reuse.

---

## 📜 License

**All Rights Reserved**.
No part of this project may be copied, modified, distributed, or used without explicit written permission from the author(s).

---

## 🙏 Acknowledgements

* React Native + Expo community
* Arduino & ESP32 communities
* Faculty and mentors who supported this graduation project

---

```
```

```



