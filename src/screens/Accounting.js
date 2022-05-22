import React, { useState } from "react"
import { Domain, DomainDisabledTwoTone, AssignmentTurnedInOutlined, MoneyOffOutlined } from '@material-ui/icons'
const aporjects = [
    {
        id: 0,
        name:"Aksaray haseki çiftliği",
        capacity:500,
        ctype:"kWA",
        price:"250000",
        status:"Sözleşme",
        legislation:{
            ikametgah:false,
            tapu:true,
            kimlik:true,
        }
    }
]
const subcontractors =[//Taşaronlar
    {
        id:0,
    }
]
const aactions =[//Taşaronları nasıl takip edicez. Borç ve Ödeme girilecek
    {
        id:0,
        projectId:0,
        price:300000,
        pricetype:"TRY",
        productId:0,
        productCount:15,
        productPrice:1500,
        supplierId:0,
        subcontractorsId:0
    }
]
const expenses = [

]
const collection = [

]
const aproduct = [
    {
        id:0,
        name:"Güneş Paneli"
    }
]
const suppliers = [
    {
        id:0,
        name:"Kalyon"
    },
    {
        id:1,
        name:"Huawei Invertor"
    }
]
const paydaslar = [//Vadeli ödemeyi nasıl takip edicez
    {
        id:0,
        name:"Adnan Yılmaz",
        pay:65
    },
    {
        id:1,
        name:"Kürşad",
        pay:35
    }
]


const Accounting = () => {


    return <div className="">
        <div className="grid lg:grid-cols-4 md:grid-cols-6  sm:grid-cols-6 ">
            <div className="grid grid-cols-4 shadow-lg rounded-lg p-3 m-3 gap-4">
                <div className="grid"> <Domain style={{ fontSize: "80px", color: "green" }} /></div>
                <div className="grid">
                    <div style={{ fontSize: "50px", color: "green" }}>12</div>
                </div>
                <div className="grid  text-blue font-bold pl-5">Devam eden projeler</div>
            </div>

            <div className="grid grid-cols-4 shadow-lg rounded-lg p-3 m-3 gap-4">
                <div className="grid" > <AssignmentTurnedInOutlined style={{ fontSize: "80px", color: "green" }} /></div>
                <div className="grid">
                    <div style={{ fontSize: "50px", color: "green", }}> 12</div>
                </div>
                <div className="grid text-blue font-bold pl-5">Toplam Proje MW</div>
            </div>
            <div className="grid grid-cols-4 shadow-lg rounded-lg p-3 m-3 gap-4">
                <div className="grid"> <MoneyOffOutlined style={{ fontSize: "80px", color: "green" }} /></div>
                <div className="grid">
                    <div style={{ fontSize: "50px", color: "green" }}> 12</div>
                </div>
                <div className="grid  text-blue font-bold pl-5">Alacaklı Olduğumuz Projeler</div>
            </div>
            <div className="grid grid-cols-4 shadow-lg rounded-lg p-3 m-3 gap-4">
                <div className="grid"> <DomainDisabledTwoTone style={{ fontSize: "80px", color: "green" }} /></div>
                <div className="grid">
                    <div style={{ fontSize: "50px", color: "green" }}> 12</div>
                </div>
                <div className="grid  text-blue font-bold pl-5">Şantiyesi Kurulmamış Projeler</div>
            </div>
        </div>


    </div>


}

export default Accounting;