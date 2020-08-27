import React, { FormEvent } from "react";

import "./form-input-table.styles.scss";
import FormInput from "../form-input/form-input.component";

const FormInputTable = (
    props: {
        label: string;
        value: any;
        handleInputChange: (event: FormEvent<HTMLInputElement>) => void;
    }) => {
  
    const { label, value, handleInputChange } = props;

    // const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
    //   const tempData = [...data];
    //   tempData[event.target.dataset.id][event.target.name] = event.target.value;

    //   setData(tempData);
    // }

    // console.log(dataArray && dataArray.map(data => data.key));

    const addNew = () => {
      // setData(prev => [...prev, { name: "", price: 0 }]);
    };

    return (
      <div>
        <label className={"form-input-label"}>{label}</label>
        {value && (
          <div className="table">
            <div className="table-content">
              <div className="table-header">
                <div className="table-row">
                  <div className="table-data">
                    <div>Name</div>
                  </div>
                  <div className="table-data">
                    <div>Phone</div>
                  </div>
                  <div className="table-data">
                    <div>Mobile</div>
                  </div>
                  <div className="table-data">
                    <div>Email</div>
                  </div>
                  <div className="table-data">
                    <div>Comment</div>
                  </div>
                </div>
              </div>
              <div className="table-body">
                {value.map((dataItem: any, index: number) => {
                  const dataItemArray =
                    dataItem &&
                    Object.entries(dataItem).map((key) => ({
                      fieldName: key[0],
                      fieldValue: key[1],
                    }));
                  // console.log('dataItemArray', dataItemArray);
                  return (
                    <div className="table-row" key={index}>
                      {dataItemArray &&
                        dataItemArray.map((itemDetails) => (
                          <div className="table-data" key={itemDetails.fieldName}>
                            <FormInput
                              key={itemDetails.fieldName}
                              name={itemDetails.fieldName}
                              data-id={itemDetails.fieldName}
                              type="text"
                              label=""
                              handleInputChange={handleInputChange}
                              defaultValue={
                                itemDetails.fieldValue
                                  ? itemDetails.fieldValue
                                  : ""
                              }
                            />
                          </div>
                        ))}
                    </div>
                  );
                })}
                <div className="table-row">
                  <div className="table-data">
                    <button onClick={addNew}>+</button>
                  </div>
                </div>
              </div>
              <div className="table-footer">
                <div className="table-row">
                  <div className="table-data">
                    <div>Total</div>
                  </div>
                  <div className="table-data">
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
    };
export default FormInputTable;
