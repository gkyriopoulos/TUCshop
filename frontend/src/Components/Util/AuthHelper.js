const secret_register = "IpdLNA4lUwXwGoUwKcVV8OhrdxGLCUjy";
const secret_login = "mDVPJ3KfOk0F9mImjgmDeRUdJQz9o3mf";

async function handleLogin(loginData){
    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("username", loginData.username);
        urlencoded.append("password", loginData.password);
        urlencoded.append("client_id", "frontend-app");
        urlencoded.append("client_secret", secret_login);
        urlencoded.append("grant_type", "password");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        const response = await fetch("http://localhost:8080/auth/realms/eshop/protocol/openid-connect/token", requestOptions);
        if(response.ok){
            const login = await response.json();
            const token = login.access_token;
            
            //store in localstorage username, email, role (customer, seller) and refresh_token
            const decodeToken = await decodeJwt(token);
            sessionStorage.setItem("username", decodeToken.preferred_username);
            sessionStorage.setItem("email", decodeToken.email);
            sessionStorage.setItem("refresh_token", login.refresh_token);
            if(decodeToken.realm_access.roles.includes("seller")){
                sessionStorage.setItem("role", "seller");
                window.location.href = "/myproducts";
            }else if (decodeToken.realm_access.roles.includes("customer")) {
                sessionStorage.setItem("role", "customer");
                window.location.href = "/products";
            }else{
                sessionStorage.setItem("role", "unkown");
                alert("Error during login: Unknown role.");
                window.location.reload();
            }
            return true;
        }else{
            const err = await response.json();
            console.log(err) ;
        }

    } catch (error) {
        console.log(error);
    }
    return false
}

async function handleSignup(signupData){
    console.log(signupData.role);

    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("grant_type", "client_credentials");
        urlencoded.append("client_id", "admin-cli");
        urlencoded.append("client_secret", secret_register);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        //get admin access token
        const first_response = await fetch("http://localhost:8080/auth/realms/master/protocol/openid-connect/token", requestOptions);
        
        if(first_response.ok){
            const adminAccessToken = await first_response.json();
            const token = adminAccessToken.access_token;

            myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", "Bearer " + token);
            
            var raw = JSON.stringify({
                "email": signupData.email,
                "enabled": "true",
                "username": signupData.username,
                "attributes": {
                "client_id": "client-front"
                },
                "groups": [
                signupData.role
                ],
                "credentials": [
                {
                    "type": "password",
                    "value": signupData.password,
                    "temporary": false
                }
                ]
            });
            
            var registerOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            const registerUser =  await fetch("http://localhost:8080/auth/admin/realms/eshop/users", registerOptions);
        
            if(registerUser.ok){
                alert('Completed registration successfully!');

                setTimeout(()=>{
                    window.location.reload();
                },2000)

                return true;
            
            }else{
                const err = await registerUser.json();
                console.log(err);
            }

            }else{
                const err = await first_response.json();
                console.log(err);
            }
        
    } catch (error) {
        console.log(error);
    }

    return false;
}

function decodeJwt(jwtToken) {
    const base64Url = jwtToken.split('.')[1]; // Get the payload part of the JWT
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Replace Base64 URL encoding characters
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join('')); // Decode Base64 and handle URI component encoding
  
    return JSON.parse(jsonPayload);
  }


export {handleLogin, handleSignup}