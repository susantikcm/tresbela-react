import React, { useState, useEffect } from "react";
import axios from "axios";

import DynamicForm from '../../components/dynamic-form/dynamic-form.component';

import { IFieldScheme } from '../../models/interface/iFieldScheme';
import { IBusinessForm } from '../../models/interface/iFormScheme';
import { BUSINESS_FORM } from "../../models/form-structure/business";

const Business = () => {
  const [ fieldScheme ] = useState<IFieldScheme[]>(BUSINESS_FORM);
  const [ businesses, setBusinesses ] = useState<IBusinessForm[]>([]);

  //useEffect() takes 2 paramater; a function and an empty array
  //the [] is to ensure the useEffect only runs once === componentDidMount
  useEffect(() => {
    axios.get<IBusinessForm[]>('http://localhost:5000/api/business')
    .then(response => setBusinesses(response.data));
  }, []);
 
  return (
    <div className="text-white">
      {/* <DynamicForm fieldScheme={fieldScheme} />  */}
      <ul>
      {
        businesses.map((business, index) => (
          <li key={index}>{business.id} {business.businessName} {business.businessNo}</li>
        ))
      }
      </ul>
    </div>
  );
};

export default Business;
