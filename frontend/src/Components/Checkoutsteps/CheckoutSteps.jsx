import React from 'react';
import './CheckoutSteps.css';

const CheckoutSteps = ({ steps, currentStep }) => {
  return (
    <div className="checkout-progress">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className={`step-container ${index <= currentStep ? 'active' : 'inactive'}`}>
            <div className={`step ${index <= currentStep ? 'complete' : 'incomplete'}`}>
              {step}
            </div>
            {index < steps.length - 1 && (
              <div className={`triangle ${index < currentStep ? 'completed' : index === currentStep ? 'active' : 'incomplete'}`}></div>
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default CheckoutSteps;
