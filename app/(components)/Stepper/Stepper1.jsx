import React from "react";

const Stepper1 = ({ currentStep }) => {
  const steps = [
    { id: 1, label: "Blood Assessment" },
    { id: 2, label: "Lifestyle Assessment" },
    { id: 3, label: "Personalized supplements" },
  ];

  return (
    <div className="flex items-center p-5 w-[99%]">
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          {/* Step */}
          <div className="flex flex-col items-center text-center">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full border-2 
              ${currentStep === step.id ? "bg-black text-white border-black" : "bg-white text-gray-400 border-gray-400"}`}
            >
              {step.id}
            </div>
            <p
              className={`mt-2 text-sm ${
                currentStep === step.id ? "text-black" : "text-gray-400"
              }`}
            >
              {step.label}
            </p>
          </div>

          {/* Line */}
          {index < steps.length - 1 && (
            <div
              className={`w-12 h-0.5 ${
                currentStep > step.id ? "bg-black" : "bg-gray-400"
              }`}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper1;
