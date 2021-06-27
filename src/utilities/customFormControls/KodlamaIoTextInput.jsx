import { useField } from 'formik'
import React from 'react'
import {FormField,Label} from 'semantic-ui-react';

export default function KodlamaIoTextInput({...props}) {
    // console.log("Props : ")
    // console.log(props)
   //reflect api => arka planında bunu kullanıyor
   const [field,meta] = useField(props);
    //    console.log("Field : ")
    //    console.log(field)
    //    console.log("Meta : ")
    //    console.log(meta)
   // console.log(meta)
    // !!meta.error '!! ünlem javascriptte metin varsa true donder yoksa false donder karşılıgını verir'

    return (
        <FormField error={meta.touched && !!meta.error} >
            <input {...field} {...props} />
            {meta.touched && !!meta.error? (
                <Label pointing basic color="red" content={meta.error}></Label>
            ) : null} 
        </FormField>
    )
}
