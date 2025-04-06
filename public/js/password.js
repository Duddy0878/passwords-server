

const request = new XMLHttpRequest();

export let passwords = [];

request.onload = (e) => {
    console.log('responce loaded');
    if(request.status === 200){
    let json;
    
    if(request.responseType === 'json'){
    json = request.response;
    }else{
        json = JSON.parse(request.response);
    }
    passwords = json;
    console.log('fetched from server', passwords);

    if(!passwords){
        passwords = [{
            
            site: 'duudyWerz.com',
            email: '@gmail.com',
            userName: 'duddy0878',
            password: 'Werz0878',
        },
        {  
            site: 'dyWerz.com',  
            email: '@gil.com',
            userName: 'dy0878',
            password: 'W0878',
        },
        { 
            site: 'dyopopoWerz.com',
            email: '@kkkil.com',
            userName: 'dy0878',
            password: 'W0878',
        }
    
    ]
    
      
    }

    console.log('final', passwords);
    }else{
        console.log('error');
    }
        
        
}


request.open(
    'GET',
    'data.json'
)

request.setRequestHeader('Accept',' aplication/json' );

request.responseType = 'json';

request.send();






export function saveToStorage(newPasswords) {

    const requestPost = new XMLHttpRequest();

    requestPost.onload = () => {
        if (requestPost.status === 200) {
            console.log('Password successfully added and saved to the server.');
        } else {
            console.error('Failed to save the password:', requestPost.statusText);
        }
    };

    requestPost.open('POST', 'data.json'); // Replace with your server URL
    requestPost.setRequestHeader('Content-Type', 'application/json');
    requestPost.send(JSON.stringify(newPasswords)); // Send the updated passwords
     }
    
  

  export function removePassword(newPass,newDisplay) {
    passwords = newPass
    saveToStorage(passwords);
    newDisplay();
    
  }

