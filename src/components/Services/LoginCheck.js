import md5 from "md5";
export function LoginCheck(type, email,password) {


    return new Promise((resolve, reject) =>{
        fetch('http://54.165.179.131:3003/graphql?query={Login(email:"'+email+'",password:"'+md5(password)+'"){status,name,type,email,publisher_ids}}')
          .then((response) => response.json())
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });


      });
}

export function SessionCheck(){
    if(sessionStorage.getItem("UserData")){
        return true;
    }
    else{
        return false;
    }
}
