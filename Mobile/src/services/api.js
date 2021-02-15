import axios from 'axios';

const api = axios.create({
    baseURL : 'http://10.0.2.2:3333'
});

export default api;

/**
 * BaseURL
 * IOS / Emulador : localhost
 * IOS / Físico : IP da Máquina
 * Android / Emulador : localhost (adb reverse)
 * Android / Emulador : 10.0.2.2 (Android Studio)
 * Android / Emulador : 10.0.3.2 (Genymotion)
 * Android / Físico : Ip da Máquina
 */