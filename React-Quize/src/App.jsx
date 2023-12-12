import React, { useState } from 'react';

const StepForm = () => {
  const [step, setStep] = useState(1);
  const [Data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: ''
  });
  const Submit = (e) => {
    e.preventDefault();
    if (step === 1) {

      setFormData({
      });

      const Step = () => {
        setStep(step + 1);
      };

      const Submit = (e) => {
        e.preventDefault();

        if (step === 1) {

          Step();
        } else if (step === 2) {

          Step();
        } else if (step === 3) {

        }
      };
      const Change = (eage) => {
        const { name, value } = eage.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
      const nextStep = () => {

      };
      <div>
        <button onClick={Submit}>Next</button>
        <button onClick={prevStep}>Previous</button>
        <button onClick={Submit}>Submit</button>
      </div>


    };
    export default StepForm; 