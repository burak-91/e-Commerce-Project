import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config ={
    apiKey: "AIzaSyCLjm1Aa_WXWmDtnfuYgW3jy2XRRBF2_KQ",
    authDomain: "e-commerce-project-bac07.firebaseapp.com",
    projectId: "e-commerce-project-bac07",
    storageBucket: "e-commerce-project-bac07.appspot.com",
    messagingSenderId: "579229328593",
    appId: "1:579229328593:web:37064b12be577597bd91f0"
};

export const createUserProfileDocument = async (userAuth,additionalData)=>{
    if(!userAuth) return; //checking Is there any user?

    const userRef = firestore.doc(`users/${userAuth.uid}`); //getting user id from auth field

    const snapShot = await userRef.get(); //checking the id is exist or not

    if(!snapShot.exists){
        const {displayName,email} = userAuth;
        const createDate = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createDate,
                ...additionalData
            })
        } catch (error) {
            console.log('error')
        }
    }


    return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
