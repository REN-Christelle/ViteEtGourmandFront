// Graphique statistiques administrateur

let ordersChart = null;

function initAdminChart() {
  const canvas = document.getElementById("ordersChart");
  if (!canvas) return;

  // Données exemple (à remplacer par ton API plus tard)
  const labels = ["Terroir", "Végétarien", "Sans gluten"];
  const values = [18, 22, 12];

  const ctx = canvas.getContext("2d");

  ordersChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [{
        label: "Commandes",
        data: values
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  // Petits chiffres en haut (exemple)
  updateStatsNumbers(values);
}

function updateStatsNumbers(values) {
  const totalOrders = values.reduce((a, b) => a + b, 0);
  // Exemple CA : 35€ * 10 pers * nbCommandes (juste pour afficher quelque chose)
  const revenue = totalOrders * 35 * 10;

  const ordersEl = document.getElementById("statsOrders");
  const revenueEl = document.getElementById("statsRevenue");

  if (ordersEl) ordersEl.textContent = totalOrders;
  if (revenueEl) revenueEl.textContent = revenue.toLocaleString("fr-FR");
}

function initAdminStatsButton() {
  const btn = document.getElementById("btnUpdateChart");
  if (!btn) return;

  btn.addEventListener("click", () => {
    // Ici tu feras un fetch API plus tard selon menu/date.
    // Pour l’instant : on change juste les données pour voir que ça marche.
    const newValues = [
      Math.floor(Math.random() * 30) + 1,
      Math.floor(Math.random() * 30) + 1,
      Math.floor(Math.random() * 30) + 1
    ];

    if (ordersChart) {
      ordersChart.data.datasets[0].data = newValues;
      ordersChart.update();
      updateStatsNumbers(newValues);
    }
  });
}

// À appeler après injection HTML (dans ton router)
function initAdminPage() {
  initAdminChart();
  initAdminStatsButton();
}
