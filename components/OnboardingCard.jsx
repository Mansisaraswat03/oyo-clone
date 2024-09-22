import { CardComponentProps } from 'nextstepjs';

const CustomCard = ({
  step,
  currentStep,
  totalSteps,
  nextStep,
  prevStep,
  skipTour,
  arrow,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col gap-4  border border-gray-200">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">{step.title}</h2>
        {step.icon}
      </div>
      <p>{step.content}</p>
      {step.showControls && (
        <div className="flex justify-between mt-4 gap-4">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md"
          >
            Previous
          </button>
          <button
            onClick={nextStep}
            className={`${currentStep === totalSteps - 1 ? 'bg-green-600 text-white' : 'bg-green-300'} text-gray-800 px-4 py-2 rounded-md`}
          >
            {currentStep === totalSteps - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      )}
      {step.showSkip && (
        <button
          onClick={skipTour}
          className="px-4 py-2 rounded-md bg-slate-300 text-gray-800"
        >
          Skip
        </button>
      )}
      {arrow}
    </div>
  );
};

export default CustomCard;