import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyABFkOjxxP4nRXJ3whRckVCHxpFciBJnG8",
    authDomain: "shop-220eb.firebaseapp.com",
    projectId: "shop-220eb",
    storageBucket: "shop-220eb.appspot.com",
    messagingSenderId: "1064945922104",
    appId: "1:1064945922104:web:60147ee72716c5583ff6cd"
};
firebase.initializeApp(firebaseConfig);

const uploadFile = async(fileName, blob) => {
    const upload = await firebase.storage().ref(`/image/${fileName}`).put(blob);
    const url = await firebase.storage().ref(`/image/${fileName}`).getDownloadURL();
    return url;
}
export { firebase, uploadFile };