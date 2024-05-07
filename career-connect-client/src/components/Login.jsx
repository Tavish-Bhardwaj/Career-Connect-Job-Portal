// import React from 'react'
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import app from '../Firebase/firebase.config';
// import { getAuth } from "firebase/auth";
// import App from '../App';


// const Login = () => {
//     const auth = getAuth();
// const GoogleProvider = new GoogleAuthProvider();

// const handleLogin = () => {
//     signInWithPopup(auth, GoogleProvider).then((result) => {
        
   
//         const user = result.user;
//         console.log(user);
//         if (user) {
//             // User is signed in, redirect to the dashboard or another page
//             return(

//                 <App />
//             )
//           }
      
//         // ...
//       }).catch((error) => {
    
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.customData.email;
//         // The AuthCredential type that was used.
//         const credential = GoogleAuthProvider.credentialFromError(error);
//         // ...
//       });
// }

//   return (
   

//     <div className='h-screen w-full flex items-center justify-center'>
//         <button className='bg-blue px-8 py-2 text-white' onClick={handleLogin}>Login</button>
      
//     </div>
//   )
// }

// export default Login
