import { useState, useEffect } from 'react'

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)

  const [formIsValid, setFormIsValid] = useState(false)

  const enteredNameIsValid = enteredName.trim() !== ''
  const nameInputIsvalid = !enteredNameIsValid && enteredNameTouched

  const enteredMailIsValid = enteredEmail.includes('@')
  const emailInputIsInvalid = !enteredMailIsValid && enteredEmailTouched

  useEffect(() => {
    if (enteredNameIsValid && enteredMailIsValid) {
      setFormIsValid(true)
    } else {
      setFormIsValid(false)
    }
  }, [enteredNameIsValid, enteredMailIsValid])

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true)
  }

  const mailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value)
  }

  const mailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true)
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault()

    setEnteredNameTouched(true)
    setEnteredEmailTouched(true)

    if (!enteredNameIsValid || !enteredMailIsValid) {
      return
    }

    setEnteredName('')
    setEnteredNameTouched(false)

    setEnteredEmail('')
    setEnteredEmailTouched(false)
  }

  const nameInputClasses = nameInputIsvalid ? 'form-control invalid' : 'form-control'
  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsvalid && <p className='error-text'>Name must not be empty!</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>Your Mail</label>
        <input
          type='text'
          id='name'
          onChange={mailInputChangeHandler}
          onBlur={mailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && <p className='error-text'>Mail must not be empty!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
