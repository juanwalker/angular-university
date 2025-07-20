import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  firebaseConfig = {
    apiKey: "AIzaSyBjT3H0josU1f8TOgOBqwCWloAL8PmCgrc",
    authDomain: "tienda-online-5c311.firebaseapp.com",
    databaseURL: "https://tienda-online-5c311-default-rtdb.firebaseio.com",
    projectId: "tienda-online-5c311",
    storageBucket: "tienda-online-5c311.firebasestorage.app",
    messagingSenderId: "439453853869",
    appId: "1:439453853869:web:23ac08410f1268ce18fe24",
    measurementId: "G-8ERDQY144X"
  };

  public auth: Auth;
  public firebase: Firestore;

  constructor() { 
    const app = initializeApp(this.firebaseConfig);
    this.auth = getAuth(app);
    this.firebase = getFirestore(app);
  }
}
