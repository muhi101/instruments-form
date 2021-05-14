import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import Select from "react-select";
import options from ".././constants/reactSelectOptions";

const InstrumentsForm = () => {
  const { register, handleSubmit, errors, control, watch, setValue } = useForm({
    mode: "onBlur"
  });
  const [typeDropdown, setTypeDropdown] = useState([]);
  const watchAllFields = watch(); 
useEffect(() => {
  watch(() => {
   
        console.log("Field changed!", watch);
  });
});




  // const instrumentsArray = [
  //   {value: "future", label: "Futures", types: ["Price", "Yield", "Spread"] },
  //   {value: "derivatives", label: "Derivatives", types: ["Price", "Yield"] },
  //   {value: "bonds", label: "Bonds", types: ["Price","Spread"] },
    
  // ]
  
  const instrumentsArray = options;


 

  const handleSubmission = (data) => console.log('data---', data);

  const handleError = (errors) => {
    console.log(errors);
  };

  /** Validation configuration
   * 
   *
   *@param N/A
   */
  const registerOptions = {
    level: {
      required: "Level is required",
          pattern: {
            value: /^([1-9]{1}[\d]{0,2}(\.[\d]{3})*(,[\d]{0,2})?|[1-9]{1}[\d]{0,}(,[\d]{0,2})?|0(,[\d]{0,2})?|(,[\d]{1,2})?)$/,
            message: "Amount must be a positive numeric value"
          }
    },
   amount: {
    required: "Amount is required",
      pattern: {
        value: /^[1-9]\d*$/,
        message: "Amount must be a positive numeric value"
      }
    },
    person: {
     
      required: "Person is required",
    },
    
    instrument: { required: "Instrument is required" },
    instrumentType: { required: "type is required" }
  };


  /** updates the Types dropdown and 
   * saves Instrument selection option for console
   *
   *@param {object} e
   */
   const handleInstrumentChange = (e) => {
    let typesArray = [];
    let data = e.types;
    for(var i=0; i<data.length; i++){
      var obj = { "label": data[i], "value": data[i]};
      typesArray.push(obj);
    }
    setTypeDropdown(typesArray)
    setValue("instrument", e.value);
  };

  /** 
   * saves Instrument Type selection option for console
   *
   *@param {object} e
   */
  const handleTypeChange = (e) => {
    setValue("instrumentType", e.value);
  };

  return (
    <Form onSubmit={handleSubmit(handleSubmission, handleError)}>
      <FormGroup>
        <Label>Instrument</Label>
        <Controller
          name="instrument"
          control={control}
          render={({ onChange, value, onBlur, name }) => (
                      <Select   onChange={(e) => {
                          onChange(e)
                        handleInstrumentChange(e)
                        }} inputRef={register(registerOptions.instrument)} options={instrumentsArray} isClearable />
              
                    )}
      
          defaultValue=""
          rules={registerOptions.instrument}
        />
        <small className="text-danger">
          {errors.instrument && errors.instrument.message}
        </small>
      </FormGroup>
 <FormGroup>
        <Label>Person</Label>
        <Input type="text" name="person" innerRef={register(registerOptions.person)} />
        <small className="text-danger">
          {errors.person && errors.person.message}
        </small>
      </FormGroup>


      <FormGroup>
        <Label>Level</Label>
        <Input type="number" name="level" min="0" step="1" innerRef={register(registerOptions.level)} />
        <small className="text-danger">
          {errors.level && errors.level.message}
        </small>
      </FormGroup>
       <FormGroup>
        <Label>Type</Label>

       
        <Controller
          name="instrumentType"
          control={control}
          render={({ onChange, value, onBlur, name }) => (
                      <Select inputRef={register(registerOptions.instrumentType)} options={typeDropdown} isClearable  onChange={(e) => {
                          onChange(e)
                        handleTypeChange(e)
                        }} />
              
                    )}
      
          defaultValue={""}
          rules={registerOptions.instrumentType}
        />
        <small className="text-danger">
          {errors.instrumentType && errors.instrumentType.message}
        </small>
      </FormGroup>
      <FormGroup>
        <Label>Amount</Label>
        <Input
          type="number"
          name="amount"
          min="0"
           step="1" 
          innerRef={register(registerOptions.amount)}
        />
        <small className="text-danger">
          {errors.amount && errors.amount.message}
        </small>
      </FormGroup>

     
      
{watchAllFields &&  <Button color="primary">Submit</Button>}
     
     
    </Form>
  );
};

export default InstrumentsForm;
