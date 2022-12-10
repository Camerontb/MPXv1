import React from 'react'
import { Form } from 'semantic-ui-react'
// import axios from 'axios'
import { useForm} from 'react-hook-form'
import  {setFromDtttm} from "react-datepicker";








function NewMPX(){
   return(
      <Form className='wrapper'>
         <Form.Group >
            <Form.Field width={6}>
               <label>Vessel Name</label>
               <input></input>
               
            </Form.Field>
            <Form.Field width={6}>
               <label>IMO Number</label>
               <input></input>
               
            </Form.Field>
            <Form.Field width={6}>
               <label>Date</label>
               <input
                            placeholder='Enter the date'
                            type="Date"
                            onChange={date => setFromDtttm(date ? date : "")}
                            
                        />
               
              


            </Form.Field>

         </Form.Group>
      </Form>
    
   )
}
export default NewMPX

//dfddffefefe

   //  <div>
   //    <h1>h</h1>
   //  </div>