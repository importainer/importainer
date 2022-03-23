import React from 'react'
import './ProyectoCardList.css'
import ProyectoCard from './ProyectoCard'

const ProyectoCardList = ({p1, p2, p3, p4}) => {
    return (
        <div className="ProyCardList">
            <ProyectoCard
                title={p1.title}
                img={p1.img}
                link={p1.link}
            />
            <ProyectoCard
                title={p2.title}
                img={p2.img}
                link={p2.link}
            />
            <ProyectoCard
                title={p3.title}
                img={p3.img}
                link={p3.link}
            />
            <ProyectoCard
                title={p4.title}
                img={p4.img}
                link={p4.link}
            />
        </div>
    )
}

export default ProyectoCardList

