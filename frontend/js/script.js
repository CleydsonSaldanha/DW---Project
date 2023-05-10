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

function cadastroMachine() {

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
    document.querySelector('.btn-close').click();

  };
}

function generatePingChart() {
  // Dados de exemplo para o gráfico de ping
  const pingData = {
      labels: ['10:00', '10:05', '10:10', '10:15', '10:20', '10:25', '10:30'],
      datasets: [{
          label: 'Ping',
          data: [40, 60, 55, 70, 65, 75, 60],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
      }]
  };

  // Configurações do gráfico de ping
  const pingConfig = {
      type: 'line',
      data: pingData,
      options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  };

  // Cria o gráfico de ping
  new Chart(
      document.getElementById('ping-chart'),
      pingConfig
  );
}

function generateCpuChart() {
  // Dados de exemplo para o gráfico de CPU %
  const cpuData = {
      labels: ['10:00', '10:05', '10:10', '10:15', '10:20', '10:25', '10:30'],
      datasets: [{
          label: 'CPU %',
          data: [40, 60, 55, 70, 65, 75, 60],
          fill: false,
          borderColor: 'rgb(255, 99, 132)',
          tension: 0.1
      }]
  };

  // Configurações do gráfico de CPU %
  const cpuConfig = {
      type: 'line',
      data: cpuData,
      options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
              y: {
                  beginAtZero: true,
                  max: 100
              }
          }
      }
  };

  // Cria o gráfico de CPU %
  new Chart(
      document.getElementById('cpu-chart'),
      cpuConfig
  );
}

function generateMemChart() {
  // Dados de exemplo para o gráfico de CPU %
  const memData = {
      labels: ['Em Uso', 'Livre'],
      datasets: [{
          label: 'CPU %',
          data: [40, 60],
          borderColor: ['rgb(255, 99, 132)',
          'rgb(54, 162, 235)'],
          hoverOffset: 4
      }]
  };

  // Configurações do gráfico de CPU %
  const memConfig = {
      type: 'doughnut',
      data: memData,
      options: {
          responsive: true,
          maintainAspectRatio: false,
      }
  };

  // Cria o gráfico de CPU %
  new Chart(
      document.getElementById('mem-chart'),
      memConfig
  );
}

function generateUpTimeChart() {
  const upTimeData = {
      labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'],
      datasets: [{
          label: 'UP TIME',
          data: [40, 60, 55, 70, 65, 75, 60],
          fill: false,
          borderColor: ['rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 3
      }]
  };

  const upTimeConfig = {
      type: 'bar',
      data: upTimeData,
      options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
              y: {
                  beginAtZero: true,
              }
          }
      }
  };

  new Chart(
      document.getElementById('upTime-chart'),
      upTimeConfig
  );
}

function generateHeatChart() {
  // Dados de exemplo para o gráfico de CPU %
  const heatData = {
      labels: ['Temperatura'],
      datasets: [{
          label: 'Temperatura Atual',
          data: [100],
          borderColor: 'rgb(255, 99, 132)',
          hoverOffset: 4
      }]
  };

  // Configurações do gráfico de CPU %
  const heatConfig = {
      type: 'doughnut',
      data: heatData,
      options: {
          responsive: true,
          maintainAspectRatio: false,
      }
  };

  // Cria o gráfico de CPU %
  new Chart(
      document.getElementById('heat-chart'),
      heatConfig
  );
}

generatePingChart();
generateCpuChart();

generateMemChart();
generateUpTimeChart();

generateHeatChart();

loadMachines();
cadastroMachine();
