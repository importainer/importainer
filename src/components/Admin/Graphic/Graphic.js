import React, { useEffect, useState } from 'react';
import { useMemo } from 'react';
import {

    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,

} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './Graphic.css';

export default function Graphics({ publicaciones, puntuacion }) {

    ChartJS.register(

        CategoryScale,
        LinearScale,
        PointElement,
        BarElement,
        Title,
        Tooltip,
        Legend,
        Filler,

    );

    const score = puntuacion;
    const labels = publicaciones.filter(e => e !== undefined);

    const options = {

        responsive: true,
        color: "rgba(255,255,255,1)",
        layout: {

            padding: 20,

        },
        scales: {

            x: {
                ticks: {
                  font: {
                    size: 15,
                  },
                  backgroundColor: "red", 
                  color: "rgba(255,255,255,1)" 
                },
              },
            y: {

                min: 0,
                ticks: {
                    font: {
                      size: 16,
                    },
                    backgroundColor: "red", 
                    color: "rgba(255,255,255,1)" 
                  },

            },

        }

    }

    const data = useMemo(function() {

        return {

            datasets: [

                {

                    label: "Cantidad de Reservas",
                    tension: 0.3,
                    data: score,
                    backgroundColor: ["rgba(255,0,0,0.9)", "rgba(255,89,0,0.9)", "rgba(255,189,0,0.9)"],
                    
                }

            ],

            labels

        }

    })
    
    return (

        <div className='GraphicsContent'>

            <Bar data={data} options={options} />

        </div>

    )

}