import React from "react";
import { Link } from "react-router-dom";
import "./UserCard.css";

export default function UserCard({ user }) {
    
    return (

        <div className="userCardContent">

            <h1>{user.name + ' ' + user.lastName}</h1>

            <h2>DNI: {user.dni}</h2>

            <div className="userCardContent__grupo" >

                <h3>Grupo: {user.grupo}</h3>

            </div>

            <div className="userCardContent__plan" >

                <h3>Plan: {user.plan}</h3>

            </div>

            <div className="userCardContent__orden" >

                <h4>Orden: {user.orden}</h4>

            </div>

            <Link to={{ pathname: '/UserDetail', state: {dni: user.dni} }} ><div className="userCardContent__detalle" >Detalle</div></Link>

        </div>

    )

}