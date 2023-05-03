import API from './main.js';

function loadMachines(machines) {
  for (const machine of machines) {
    createMachineView(machine);
  }
}

function createMachineView(machine) {
  const ulMachine = document.querySelector('ul#machines');

  const rowView = `<li class="d-inline" id="machine-${machine.id}">
    <div class="md-10">
    <span>Machine: ${machine.name}</span>
    <span>User: ${machine.user}</span>
    </div>

    <div class="md-2">
      <i>Apagar</i>
      <i>Editar</i>
    </div>
  </li>`;

  ulMachine.insertAdjacentHTML('beforeend', rowView);
}