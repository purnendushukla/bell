import * as firebase from 'firebase';

export class AuthService{
  token: string;
  registerUser(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => console.log(error));
  };

  loginUser(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email,password)
      .then(
        firebase.auth().currentUser.getIdToken(true)
          .then(
            (token: string)=> this.token = token
          )
      )
      .catch(
        error => console.log(error)
      );
  }

  getToken(){
    firebase.auth().currentUser.getIdToken(true)
      .then(
        (token: string)=> this.token = token
      );
    return this.token;
  }
}
