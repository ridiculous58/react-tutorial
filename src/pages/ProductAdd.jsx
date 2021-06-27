import React from 'react'
import { Formik, Form, Field,ErrorMessage } from 'formik'
import * as Yup from 'yup';
import { FormField,Button, Label } from 'semantic-ui-react';
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput';
export default function ProductAdd() {
    const initialValues = {
        productName: "",
        unitPrice: 0
    };
    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı zorunlu."),
        unitPrice: Yup.number().required("Ürün fiyatı zorunlu")
    });
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit= {(values)=>{
                console.log(values)
            }}
        >
            <Form className="ui form">
                <KodlamaIoTextInput name="productName" placeholder="Ürün Adı" />
                <KodlamaIoTextInput name="unitPrice" placeholder="Ürün Fiyatı" />               
                <Button color="green" type="submit">Ekle</Button>
            </Form>
        </Formik>
    )
}
// Redux-thunk 



{/* <FormField>  Bu kadar kod karmaşası cok sıkıntı ondan dolayı bunu bir component haline getirmemiz lazımdı bunuda utilities altında kodlamaiotextınput sayesinmde yaptık
                    <Field name="productName" placeholder="ürün Adı"></Field>
                    <ErrorMessage name="productName" render={error=>
                        <Label pointing basic color="red" content={error}></Label>
                    }></ErrorMessage>
</FormField> */}

{/*<FormField> <Field name="unitPrice" placeholder="ürün Fiyatı"></Field>
                <ErrorMessage name="unitPrice" render={error=>
                    <Label pointing basic color="red" content={error}></Label>
                }></ErrorMessage> 
                    </FormField>*/}         
{/*
        Formik bizi bu kadar kod satırından kurtarıp Field adlı bir tagb kullanrak işimizi kolaylastırıyor
    <label>Ürün Fiyatı</label>
    <input name="unitPrice" placeholder='Ürün Fiyatı' /> */}