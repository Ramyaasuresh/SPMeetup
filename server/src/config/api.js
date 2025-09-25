import { Platform } from "react-native";

const API_BASE =
  Platform.OS === "android"
    ? "http://10.0.2.2:4000" // Android Emulator
    : "http://localhost:4000"; // iOS Simulator

// For real phone, replace with your PC IP, like:
// const API_BASE = "http://192.168.1.25:4000";

export default API_BASE;
