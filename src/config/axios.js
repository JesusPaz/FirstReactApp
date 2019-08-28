import axios from 'axios'

//let csrftoken = document.head.querySelector('meta[name="csrf-token"]');

export default axios.create({

    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers:{
        'X-Requested-With':'XMLHttpRequest'
 //       'X-CSRF-TOKEN': csrftoken.content
    }
})