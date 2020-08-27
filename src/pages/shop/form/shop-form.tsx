import React, { useState, FormEvent } from "react";
import { useParams, RouteComponentProps } from 'react-router-dom';

import { useFetch } from '../../../effects/use-fetch.effect';

import { IFieldScheme } from '../../../models/interface/iFieldScheme';
import { SHOP_FORM } from "../../../models/form-structure/shop";

import DynamicForm from '../../../components/dynamic-form/dynamic-form.component';

interface DetailParams {
  id: string
}

const ShopForm: React.FC<RouteComponentProps<DetailParams>> = () => {
  const [ fields ] = useState<IFieldScheme[]>(SHOP_FORM);

  const { id } = useParams();
  const data = useFetch('/shop/' + id);

  // const dataArray: any = data && Object.entries(data).map(key => ({fieldName: key[0], fieldValue: key[1] ? key[1] : ''}));
  // console.log('shop form', dataArray);

  // const loadData = fields && fields.map(field => { 
  //   const singleData = dataArray && dataArray.filter((d: any) => d.fieldName === field.name)[0];
  //   const value = singleData && singleData.fieldValue;
  //   //console.log('value', value);
  //   return {...field, 'value': value}
  // });

  // setFields(loadData);
  //console.log('value', value);
   

  const handleSubmit = (event : FormEvent<HTMLFormElement>) => ( 
    event.preventDefault()
    // action(formData)
    //   .then(() => {
    //     history.push("/");
    //   })
    //   .catch((error: any) => {
    //     console.log(error);
    //   });
  );

  return (
      <div className="text-white">
        <DynamicForm formTitle='Shop Edit' formFields={fields} data={data} onSubmit={handleSubmit} buttonText='Submit'/>
        {/* {formFields.filter(field => {
          const dataArray = data && Object.entries(data).map(key => ({fieldName: key[0], fieldValue: key[1] ? key[1] : ''}))
          const dataSingle = dataArray && dataArray.filter(data => data.fieldName === field.name ? data.fieldValue : "");
          console.log(dataSingle);
          return(
            field.type === 'array'  && 
            <FormInputTable  
              key={field.name}
              label={field.label}
              value={dataSingle}
            />
          )}
        )} */}
      </div>
    );
}

export default ShopForm;