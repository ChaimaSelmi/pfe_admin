import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto'; 
import CategoryService from '../services/CategoryService';
import AnnonceService from '../services/AnnonceService';
import ClientService from '../services/ClientService';
import VendeurService from '../services/VendeurService';

const Dashboard = () => {
  const [categoriesCount, setCategoriesCount] = useState(0);
  const [categories, setCategories] = useState([]);
  const [annoncesCount, setAnnoncesCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [vendeursCount, setVendeursCount] = useState(0);

  useEffect(() => {
    fetchCategoriesCount();
    fetchAnnoncesCount();
    fetchClientsCount();
    fetchVendeursCount();
  }, []);

  const fetchCategoriesCount = () => {
    CategoryService.GetAll()
      .then((res) => {
        setCategoriesCount(res.data.data.length);
        setCategories(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchAnnoncesCount = () => {
    AnnonceService.GetAll()
      .then((res) => {
        setAnnoncesCount(res.data.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchClientsCount = () => {
    ClientService.GetAll()
      .then((res) => {
        setClientsCount(res.data.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchVendeursCount = () => {
    VendeurService.GetAll()
      .then((res) => {
        setVendeursCount(res.data.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const data = {
    labels: ['Categories', 'Annonces', 'Clients', 'Vendeurs'],
    datasets: [
      {
        label: 'Total Count',
        data: [categoriesCount, annoncesCount, clientsCount, vendeursCount],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
      },
    ],
  };

  const data_Category = {
    labels: categories.map((x) => x.nom),
    datasets: [
      {
        label: 'Annonces Par Categorie',
        data: categories.map((x) => (x.annonces).length),
        backgroundColor: [
          'rgba(175, 162, 235, 0.6)',
          'rgba(171, 72, 112, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
      },
    ],
  };
  
  const options = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        type: 'category',
      }],
    },
  };

  const chartRef = useRef({ chart1: null, chart2: null }); // Ref for the chart instance

  useEffect(() => {
    renderChart(); // Initial rendering
  }, [categoriesCount, annoncesCount, clientsCount, vendeursCount]); // Re-render on data change

  const renderChart = () => {
    if (chartRef.current.chart1 !== null) {
      chartRef.current.chart1.destroy(); // Destroy existing chart
    }
    if (chartRef.current.chart2 !== null) {
      chartRef.current.chart2.destroy(); // Destroy existing chart
    }

    const ctx = document.getElementById('myChart');
    const ctx2 = document.getElementById('myChart2');
    const newChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options,
    });

    const newChart2 = new Chart(ctx2, {
      type: 'pie',
      data: data_Category,
      options: options,
    });

    chartRef.current.chart1 = newChart;
    chartRef.current.chart2 = newChart2;
  };

  return (
    <div className="container" style={{ textAlign: 'center', paddingTop: '20px' }}>
      <h4>Dashboard</h4>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <div style={{ height: '400px', width: '700px', margin: '30px 0' }}>
          <canvas id="myChart"></canvas> 
        </div>
        <div style={{ height: '400px', width: '700px', margin: '30px 0' }}>
          <canvas id="myChart2"></canvas> 
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
