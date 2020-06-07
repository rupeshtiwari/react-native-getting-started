import Constants from 'expo-constants';

function isSimulator() {
  return !Constants.isDevice;
}

function isiOS() {
  return Constants.platform.ios;
}

export default function getUrl(url) {
    debugger;
  if (isiOS()) {
    return `http://localhost:3000/${url}`;
  } else {
    return isSimulator()
      ? `http://10.0.2.2:3000/${url}`
      : `http://rupesh-home-pc:3000/${url}`;
  }
}

/**
 * erp tool
 * manager 
 * JDM tool is dying
 * trying to switch and start coding
 */
