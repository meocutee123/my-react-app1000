import { ChangeEvent, FormEvent, useState } from "react"

export const useForm = (callback: any, initialState = {}) => {
  const [values, setValues] = useState(initialState)

  const onChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const key = event.target.name
    const value = event.target.value

    setValues(values => ({ ...values, [key]: value }))
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    await callback()
  }

  return { onChange, onSubmit, values }
}