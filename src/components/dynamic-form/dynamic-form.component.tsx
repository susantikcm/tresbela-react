import React, { useState, useEffect, FormEvent } from "react";
import { useHistory } from "react-router-dom";

import FormInput from "../form-input/form-input.component";
import FormDropdown from "../form-dropdown/form-dropdown.component";
import FormCheckbox from "../form-checkbox/form-checkbox.component";
import FormRadio from "../form-radio/form-radio.component";
import FormInputTable from "../form-input-table/form-input-table.component";
// import FormButton from "../form-button/form-button.component";

import { IFieldScheme } from '../../models/interface/iFieldScheme';

import "./dynamic-form.styles.scss";

export interface IFieldNameValuePair {
    fieldName: string,
    fieldValue: any
}

const DynamicForm = (
    props: { 
        formTitle: string, 
        buttonText: string, 
        formFields: IFieldScheme[],
        data?: any,     
        onSubmit: (event: FormEvent<HTMLFormElement>) => void
    }) => {
 
    const history = useHistory();

    const { formTitle, buttonText, formFields, data, onSubmit } = props;
    
    const [fields] = useState<IFieldScheme[]>(formFields);
    const [fieldsArray, setFieldsArray] = useState<IFieldNameValuePair[]>([{fieldName: '', fieldValue: ''}]);

    const formatText = (text: string) => {
        return text.toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.substr(1))
            .join(' ');
    };

     //method that converts the "data" object into an array of objects with fieldName dan fieldValue 
    const formatDataToArray = () => {
        return data && Object.entries(data).map(key => ({fieldName: key[0], fieldValue: key[1] ? key[1] : ''}))
    };

    //method that maps through fields and add fieldValue prop from fieldsArray into each field object. 
    // const loadDataValue = fields && fields.map(field => { 
    //     const singleField: IFieldNameValuePair = fieldsArray && fieldsArray.filter(fieldInArray => fieldInArray.fieldName === field.name)[0];
    //     const value: any = singleField && singleField.fieldValue;
    //     return {...field, 'value': formatText(value)}
    // });

    useEffect(() => {
        setFieldsArray(formatDataToArray());
    }, [data]);
        
    const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> ) => {
        const { name, value } = event.currentTarget;
        
        const updatedFields: IFieldNameValuePair[] = fieldsArray.map(field => {                        
            if (field.fieldName === name)
                return { 'fieldName': field.fieldName, 'fieldValue': value };
            else
                return { ...field };
        });
        setFieldsArray(updatedFields);
    };
    // fieldsArray.map(field => console.log(field));
    
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fieldsArray.map(field => {
            var finalValue = field.fieldValue;
            if(typeof finalValue === 'string')
                finalValue = formatText(finalValue);
            // console.log(field.fieldName, finalValue);
        })
    
        // console.log(fields.map(field => field.value));

        // const updatedFieldsValue = updatedFields.reduce((obj: any, curr: any) => {
        //     if (!obj[curr.group]) {
        //         obj[curr.group] = [];
        //     }
        //     obj[curr.group] = [...obj[curr.group], { [curr.name]: curr.value }];
        //         return obj;
        // }, {});
        // setFieldsValue(updatedFieldsValue);
    };

    return (
        <form className="dynamic-form mx-auto" title={props.formTitle} onSubmit={handleSubmit}>
        <h4>{formTitle}</h4> <br />
        {
            fields && fields.map(field => {    
                const singleField: IFieldNameValuePair = fieldsArray && fieldsArray.filter(fieldInArray => fieldInArray.fieldName === field.name)[0];
                const value: any = singleField && singleField.fieldValue;

            console.log(field);

            switch (field.type) {
                case "email":
                    return (
                        <FormInput
                            key={field.name}
                            name={field.name}
                            type='text'
                            label={field.label}
                            required={field.required}
                            group={field.group}
                            handleInputChange={handleInputChange}
                            defaultValue={value}
                        />
                    );
                    case "password":
                        return (
                            <FormInput
                                key={field.name}
                                name={field.name}
                                type='text'
                                label={field.label}
                                required={field.required}
                                group={field.group}
                                handleInputChange={handleInputChange}
                                defaultValue={value}
                            />
                        );
                        case "date":
                            return (
                                <FormInput
                                    key={field.name}
                                    name={field.name}
                                    type={field.type}
                                    label={field.label}
                                    required={field.required}
                                    group={field.group}
                                    handleInputChange={handleInputChange}
                                    defaultValue={value}
                                />
                            );
                         case "text" || "time":
                    return (
                        <FormInput
                            key={field.name}
                            name={field.name}
                            type={field.type}
                            label={field.label}
                            required={field.required}
                            group={field.group}
                            handleInputChange={handleInputChange}
                            defaultValue={value}
                        />
                    );
                case "dropdown":
                    return (
                        <FormDropdown
                            key={field.name}
                            name={field.name}
                            type={field.type}
                            options={field.options}
                            label={field.label}
                            required={field.required}
                            group={field.group}
                            handleInputChange={handleInputChange}
                            defaultValue={value}
                    />
                    );
                case "checkbox":
                    return (
                        <FormCheckbox                      
                            key={field.name}
                            name={field.name}
                            type={field.type}
                            label={field.label}
                            value={field.value}
                            required={field.required}
                            group={field.group}
                            handleInputChange={handleInputChange}
                        />
                    );
                case "radio":
                    return (
                        <FormRadio 
                            key={field.name}
                            name={field.name}
                            type={field.type}
                            label={field.label}
                            value={field.value}
                            required={field.required}
                            group={field.group}
                            handleInputChange={handleInputChange}
                        />
                    );
                case "array":
                    // console.log('data', data);
                    return (
                        <FormInputTable 
                            key={field.name}
                            label={field.label}
                            handleInputChange={handleInputChange}
                            value={value}
                        />
                    );
                default:
                    return null;
        }})}
        <div className='form-inline'>
            <button style={{ backgroundColor: 'white', borderRadius: '5px'}} onClick={() => history.goBack()}>Back</button>
            <button style={{ backgroundColor: 'white', borderRadius: '5px'}} type='submit' onClick={() => onSubmit}>{buttonText}</button>
        </div>
        <br/>
        <p>Login with:</p>
        <div className='form-inline'>
            <button style={{ backgroundColor: 'white', borderRadius: '5px'}} onClick={() => history.goBack()}>Gmail</button>
            <button style={{ backgroundColor: 'white', borderRadius: '5px'}} type='submit' onClick={() => onSubmit}>Facebook</button>
            <button style={{ backgroundColor: 'white', borderRadius: '5px'}} type='submit' onClick={() => onSubmit}>Twitter</button>
        </div>
        </form>
    );
}

export default DynamicForm;
