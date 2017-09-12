export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined

export const required = value => (value ? undefined : 'Required')

export const zipCode = value =>
  value && value.length !== 5 ? 'Must be 5 characters' : undefined

export const number = value =>
  value && !/^\d+$/.test(value) ? 'Must be a number' : undefined
