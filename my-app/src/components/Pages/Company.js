import React from "react"
import { motion } from 'framer-motion'

function Company() {
    return(<div className="boxses">

        <motion.div className='box1'
        animate={{
            x: 200,
            // rotate: 90
            opacity:1
           
        }}

        transition={{
            duration: 4,
            // repeat: 4
               repeat: Infinity,

        }}
        
         />
         <motion.div className='box2'
         animate={{
            y:200,
             rotate: 90

            
         }}

         transition={{
            duration: 4,
            repeat: Infinity,
        }}
         
         />
    </div>


    )
    
}

export default Company