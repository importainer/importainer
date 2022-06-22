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

export default function Graphics({ publicaciones, score, label, indexAxis, barPercentage }) {

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

    // const score = puntuacion;
    const labels = publicaciones.filter(e => e !== undefined);

    const options = {

        responsive: true,
        color: "rgba(255,255,255,1)",
        layout: {

            padding: 10,

        },
        scales: {

            x: {

                min: 0,
                ticks: {
                    stepSize: 1,
                  font: {
                    size: 13,
                  },
                  backgroundColor: "red",
                  color: "rgba(255,255,255,1)",
                },

              },

            y: {

                min: 0,
                ticks: {
                    font: {
                      size: 15,
                    },
                    backgroundColor: "red",
                    color: "rgba(255,255,255,1)",
                  }, 

            },

        },
        indexAxis: indexAxis,

    }

    const data = useMemo(function() {

        return {

            datasets: [

                {

                    barPercentage: barPercentage,
                    minBarLength: 2,
                    label: label,
                    tension: 0.3,
                    data: score,
                    fill: false,
                    borderWidth: 1.5,
                    backgroundColor: ["rgba(255,0,0,0.5)", "rgba(255,89,0,0.5)", "rgba(255,189,0,0.5)"],
                    borderColor: ["rgba(255,0,0,1)", "rgba(255,89,0,1)", "rgba(255,189,0,1)"],

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