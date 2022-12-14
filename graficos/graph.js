const ctx = document.getElementById('lineChart').getContext('2d');

const data = {
	labels: ['Proteina', 'Hidratos de Carbono', 'Gordura'], // Macronutrientes
	datasets: [
	{
		label: 'Dataset 1',
		data: [7, 58, 25], // Proteina: 12 | Hidratos de carbono: 29 | Gordura: 12
		backgroundColor: [
		'rgba(255, 99, 132)',
		'rgba(54, 162, 235)',
		'rgba(255, 206, 86)',
		],
	}]
}

const lineChart = new Chart(ctx, {
    type: 'pie', // Gráfico redondo
    data: data,
    options: {
    	responsive: false,
    	plugins: {
    		legend: {
    			position: 'top',
    		},
    		title: {
    			display: true,
    			text: 'Macronutrientes Bolachas Cookies Pingo Doce - 125g'
    		}
    	}
    }
});
