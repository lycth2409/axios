const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const getData = () => {
    axios.get('https://reqres.in/api/users')
    .then(response => {
        console.log(response)});
};

const sendData = () => {
    axios.post('https://reqres.in/api/register',{
        email:"ly@gmai.com",
        password:"qwertuyu"
    },
    {
        headers:{
        'Content-Type' : 'application/json'
    }
})
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.error(err); 
    })
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
