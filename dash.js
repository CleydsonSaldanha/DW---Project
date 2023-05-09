// Dados de exemplo para o gráfico de ping
const pingData = {
    labels: ['10:00', '10:05', '10:10', '10:15', '10:20', '10:25', '10:30'],
    datasets: [{
      label: 'Ping',
      data: [20, 30, 25, 35, 28, 40, 30],
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
  const pingChart = new Chart(
    document.getElementById('ping-chart'),
    pingConfig
  );
  
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
  const cpuChart = new Chart(
    document.getElementById('cpu-chart'),
    cpuConfig
  );
    
    // Dados de exemplo para o gráfico de memória
  const memoryData = {
      labels: ['10:00', '10:05', '10:10', '10:15', '10:20', '10:25', '10:30'],
      datasets: [
        {
          label: 'Memória Livre',
          data: [500, 450, 400, 420, 430, 470, 490],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        },
        {
          label: 'Memória em Uso',
          data: [300, 320, 340, 330, 360, 390, 370],
          fill: false,
          borderColor: 'rgb(255, 99, 132)',
          tension: 0.1
        }
      ]
    };
    
    // Configurações do gráfico de memória
    const memoryConfig = {
      type: 'line',
      data: memoryData,
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
    
    // Cria o gráfico de memória
  const memoryChart = new Chart(
    document.getElementById('memory-chart'),
    memoryConfig
  );
  
  // Dados de exemplo para o gráfico de usuários logados
  const usersData = {
    labels: ['10:00', '10:05', '10:10', '10:15', '10:20', '10:25', '10:30'],
    datasets: [
      {
        label: 'Usuários Logados',
        data: [5, 7, 8, 9, 10, 12, 14],
        backgroundColor: 'rgb(75, 192, 192)',
      }
    ]
  };
    
    // Configurações do gráfico de usuários logados
  const usersConfig = {
    type: 'bar',
    data: usersData,
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
    
    // Cria o gráfico de usuários logados
  const usersChart = new Chart(
    document.getElementById('users-chart'),
    usersConfig
  );
  // Dados de exemplo para o gráfico de uptime
  const uptimeData = {
    labels: ['10:00', '10:05', '10:10', '10:15', '10:20', '10:25', '10:30'],
    datasets: [
      {
        label: 'Tempo de Atividade',
        data: [100, 95, 90, 87, 85, 80, 75],
        backgroundColor: 'rgb(75, 192, 192)',
      }
    ]
  };
    
    // Configurações do gráfico de uptime
  const uptimeConfig = {
    type: 'bar',
    data: uptimeData,
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
    
    // Cria o gráfico de uptime
  const uptimeChart = new Chart(
    document.getElementById('uptime-chart'),
    uptimeConfig
  );
  // Dados de exemplo para o gráfico de temperatura da CPU
  const tempData = {
    labels: ['10:00', '10:05', '10:10', '10:15', '10:20', '10:25', '10:30'],
    datasets: [
      {
        label: 'Temperatura da CPU',
        data: [50, 55, 58, 60, 63, 65, 68],
        backgroundColor: 'rgb(75, 192, 192)',
      }
    ]
  };
    
    // Configurações do gráfico de temperatura da CPU
  const tempConfig = {
    type: 'line',
    data: tempData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: false
        }
      }
    }
  };
    
    // Cria o gráfico de temperatura da CPU
  const tempChart = new Chart(
    document.getElementById('temp-chart'),
    tempConfig
  );
        