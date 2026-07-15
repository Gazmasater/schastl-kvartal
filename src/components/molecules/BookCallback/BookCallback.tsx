/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC, useState } from 'react'
import axios from 'axios'
import { clx } from '@utils/clx'
import { TBookCallback } from '@localTypes/bookCallback'
import { Popover } from '@components'
import classes from './BookCallback.module.css'

type TBookCallbackProps = {
  data: TBookCallback
}

export const BookCallback: FC<TBookCallbackProps> = ({ data }) => {
  const [nameValue, setNameValue] = useState<string>('')
  const [phoneValue, setPhoneValue] = useState<string>('')
  const [isConsentGranted, setIsConsentGranted] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(true)

  const onSubmit = () => {
    if (!isConsentGranted) return

    axios
      .post(
        '/api/contacts',
        {
          name: nameValue,
          phone: phoneValue,
          consent: isConsentGranted,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then(() => {
        setIsSuccess(true)
        setIsOpen(true)
      })
      .catch(() => {
        setIsSuccess(false)
        setIsOpen(true)
      })
  }

  const onClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      {isOpen && <Popover onClose={onClose} isSuccess={isSuccess} />}
      <div className={classes.container} id="callback">
        <div className="MuiContainer-root MuiContainer-maxWidthXl">
          <div className={classes.containerInner}>
            <div className={classes.form}>
              <div className={classes.positionRelative}>
                <div
                  className={clx([
                    'MuiGrid-root',
                    classes.formInnerContainer,
                    'MuiGrid-container MuiGrid-align-items-xs-center',
                  ])}
                >
                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-lg-4">
                    <h2 className={clx(['MuiTypography-root', classes.headingSecond, 'MuiTypography-h2'])}>
                      {data.heading}
                    </h2>
                  </div>
                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-3">
                    <div
                      className={clx([
                        'MuiFormControl-root MuiTextField-root',
                        classes.itemContainer,
                        'MuiFormControl-fullWidth',
                      ])}
                    >
                      <label
                        className={clx([
                          'MuiFormLabel-root MuiInputLabel-root',
                          classes.label,
                          'MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined',
                        ])}
                        data-shrink="true"
                      >
                        Имя
                      </label>
                      <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl">
                        <input
                          type="text"
                          aria-invalid="false"
                          name="name"
                          placeholder="Ваше имя"
                          className="MuiInputBase-input MuiOutlinedInput-input"
                          value={nameValue}
                          onChange={e => setNameValue(e.target.value)}
                        />
                        <fieldset
                          aria-hidden="true"
                          className={clx([classes.fieldSet, 'MuiOutlinedInput-notchedOutline'])}
                        >
                          <legend className={classes.legend}>
                            <span>Имя</span>
                          </legend>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-3">
                    <div
                      className={clx([
                        'MuiFormControl-root MuiTextField-root',
                        classes.itemContainer,
                        'MuiFormControl-fullWidth',
                      ])}
                    >
                      <label
                        className={clx([
                          'MuiFormLabel-root MuiInputLabel-root',
                          classes.label,
                          'MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined Mui-required Mui-required',
                        ])}
                        data-shrink="true"
                      >
                        Телефон *
                        <span aria-hidden="true" className="MuiFormLabel-asterisk MuiInputLabel-asterisk">
                          &thinsp;*
                        </span>
                      </label>
                      <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl">
                        <input
                          type="tel"
                          aria-invalid="false"
                          placeholder="Номер телефона"
                          required
                          className="MuiInputBase-input MuiOutlinedInput-input"
                          value={phoneValue}
                          onChange={e => setPhoneValue(e.target.value)}
                        />
                        <fieldset
                          aria-hidden="true"
                          className={clx([classes.fieldSet, 'MuiOutlinedInput-notchedOutline'])}
                        >
                          <legend className={classes.legend}>
                            <span>Телефон &nbsp;</span>
                          </legend>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-10 MuiGrid-grid-lg-2">
                    <button
                      className={clx(['MuiButtonBase-root MuiButton-root MuiButton-text', classes.submitButton])}
                      type="submit"
                      onClick={() => onSubmit()}
                      disabled={!isConsentGranted}
                    >
                      <span className="MuiButton-label">
                        <svg
                          width="70"
                          height="59"
                          viewBox="0 0 70 59"
                          className={classes.svg}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 10.4781L46.9544 0L70 21.5205L56.638 47.7158L43.0509 59L0 10.4781Z"
                            fill="#5C2A26"
                          />
                          <path d="M35 27H49M42 34L42 20" stroke="var(--color-arrow)" />
                        </svg>
                        <span>{data.buttonText}</span>
                      </span>
                    </button>
                  </div>
                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                    <label className={classes.consent} htmlFor="personal-data-consent">
                      <input
                        id="personal-data-consent"
                        type="checkbox"
                        checked={isConsentGranted}
                        onChange={event => setIsConsentGranted(event.target.checked)}
                      />
                      <span>
                        Я даю согласие на обработку персональных данных в соответствии с{' '}
                        <a href="/pdn">Политикой обработки персональных данных</a>.
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
