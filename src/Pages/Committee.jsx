import React from 'react'
import png1 from '../Committee_images/1.png'
import png2 from '../Committee_images/2.png'
import png3 from '../Committee_images/3.png'
import png4 from '../Committee_images/4.png'
import png5 from '../Committee_images/5.png'
import './committee.css'




export default function Committee() {
    const committee=[{image:png1,name:"Prof. Shreepad Karmalkar",instname:"Indian Institute of Technology,Bhubaneswar",title:"CHIEF PATRON"},
        {image:png2,name:"Prof. V. Pandu Ranga ",instname:"Indian Institute of Technology,Bhubaneswar",title:"PATRON"},
        { image:png3,name:"Dr. Satchidananda Rath",instname:"Indian Institute of Technology,Bhubaneswar",title:"CONVENER"},
        {image:png4,name:"Dr. Sayan Dey",instname:"Indian Institute of Technology,Bhubaneswar",title:"CO-CONVENER"},
        {image:png5,name:"Dr. Akshay K",instname:"Indian Institute of Technology,Bhubaneswar",title:"CO-CONVENER"},
        {}]
    

  return (
    <div>
        <div className='header'> 
        
        <h1>Committee</h1>
    </div>
    <div className='item'>{committee.map((member,index)=>(<Intro  key={index} image={member.image} name={member.name} instname={member.instname} title={member.title}></Intro>))}</div>

        
      
    </div>
  )
}



function Intro({image,name,instname,title}){
    return<>
    <div className='imgcont'>
    <div className='img'>
        <img src={image}   alt="" />
    </div>
    <div className='title'>
    <h3 >{title}</h3>
    <h5>{name}</h5>
    <h6>{instname}</h6>
    <div>
        <button>Biography</button>

    </div>
    
    </div>

    </div>
    
    
    
    
    </>


}
