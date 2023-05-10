import API from './main.js';

function loadMachines() {

  fetch('http://localhost:3000/machines')
  .then(response => response.json())
  .then(data => {
      data.forEach(function(host) {
        var id = host.id;
        var name_maq = host.name;
        var name_user = host.user;
        const machine2 = { name_maq, name_user };
        createMachineView(machine2);
        console.log(host)
      })
  })
}

function createMachineView(machine) {
  const ulMachine = document.querySelector('tbody');
  let row = ''
  
    row = `<tr id="machine-${machine.id}">
    <td style="color: white"> ${machine.name_maq}</td>
    <td style="color: white">${machine.name_user}</td>
    </tr>
    </tr>`;

  ulMachine.insertAdjacentHTML('beforeend', row);
}

const submit = document.getElementById("cadastrar_machine");
submit.addEventListener("click", cadastroMachine);
async function cadastroMachine(event) {
    event.preventDefault();

    const name = document.querySelector('#nome').value;
    const user = document.querySelector('#user').value;
    const password = document.querySelector('#password').value;
    const machine = { name, user, password};
    const newMachine = await API.create('/machines', machine);

    createMachineView(newMachine);
    dashBoardView();  
    form.reset();
    document.querySelector('#close-offcanvas').click();
  };


loadMachines();
cadastroMachine();
