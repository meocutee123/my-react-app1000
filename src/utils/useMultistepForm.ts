import { ReactElement, useState } from "react";

export function useMultistepForm(steps: ReactElement[]) {
  const [stepIndex, setStepIndex] = useState(0)

  function next() {
    setStepIndex(index => {
      if (index >= steps.length - 1) return index

      return index + 1
    })

  }

  function previous() {
    setStepIndex(index => {
      if (index <= 0) return index

      return index - 1
    })
  }

  function goTo(index: number) {
    setStepIndex(stepIndex)
  }

  return {
    steps,
    step: steps[stepIndex],
    currentStep: stepIndex,
    isLastStep: stepIndex === steps.length - 1,
    goTo,
    next,
    previous
  }
}