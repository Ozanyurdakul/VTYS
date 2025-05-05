
const firebaseConfig = {
  apiKey: "AIzaSyBws0lXFzEE7fwRdHo2skN8iSGeGcCG2Dk",
  authDomain: "girisistemi.firebaseapp.com",
  projectId: "girisistemi",
  storageBucket: "girisistemi.firebasestorage.app",
  messagingSenderId: "246239954085",
  appId: "1:246239954085:web:fad8592452580f5dadf94c",
  measurementId: "G-WR3VHQVX18"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      alert('Giriş başarılı! Hoş geldin, ' + userCredential.user.email);
    })
    .catch(error => {
      alert('Giriş hatası: ' + error.message);
    });
});

document.getElementById('signup-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      alert('Kayıt başarılı! Giriş yapabilirsiniz.');
    })
    .catch(error => {
      alert('Kayıt hatası: ' + error.message);
    });
});
