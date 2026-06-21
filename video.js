// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy74wAOHXLugM2LHwbDrLToiuwGk2N24M",
  authDomain: "videochat-4c1fe.firebaseapp.com",
  databaseURL: "https://videochat-4c1fe-default-rtdb.firebaseio.com",
  projectId: "videochat-4c1fe",
  storageBucket: "videochat-4c1fe.firebasestorage.app",
  messagingSenderId: "843598577962",
  appId: "1:843598577962:web:f678222d816f77d75e1e53",
  measurementId: "G-21BGXQ95HZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

let pc = new RTCPeerConnection(servers);

let localStream = null; // your webcam

let remoteStream = null; // other webcam



