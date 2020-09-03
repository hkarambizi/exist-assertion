// Example POST method implementation:
const postData = async (url = '', data = {}) => {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }


const dropdown = document.getElementById('dropdown');

const dropTrigger = document.getElementById('dropdown-trigger');
const dropOpts = document.querySelectorAll('.dropdown-opts');
dropOpts.forEach(opt => {
    opt.addEventListener('click', (e) => {
        e.target.remove()
    })
})
dropTrigger.addEventListener('mouseenter', () => {
    dropdown.classList.remove('hidden');

})

const form = document.getElementById('name');
form.addEventListener('submit', (e)=> {
    const data = {};
    e.preventDefault();
    e.target.querySelectorAll('.form-input').forEach(input => {
        data[input.name] = input.value;
    })
    const dataModal = confirm(`Submit User: ${data.first} ${data.last}?`);
    console.log(dataModal);
    postData('http://localhost:3000/formdata', data)
    .then(res=> console.log(res))

})
