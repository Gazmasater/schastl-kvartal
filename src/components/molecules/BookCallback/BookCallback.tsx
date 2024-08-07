/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC } from 'react'
import { clx } from '@utils/clx'
import { TBookCallback } from '@localTypes/bookCallback'
import classes from './BookCallback.module.css'

type TBookCallbackProps = {
  data: TBookCallback
}

export const BookCallback: FC<TBookCallbackProps> = ({ data }) => {
  return (
    <div className={classes.container} id="callback">
      <div className="MuiContainer-root MuiContainer-maxWidthXl">
        <div className={classes.containerInner}>
          <form noValidate className={classes.form}>
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
                        placeholder="Ваше ім'я"
                        className="MuiInputBase-input MuiOutlinedInput-input"
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
                        placeholder="Номер телефону"
                        required
                        className="MuiInputBase-input MuiOutlinedInput-input"
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
                  >
                    <span className="MuiButton-label">
                      <svg
                        width="70"
                        height="59"
                        viewBox="0 0 70 59"
                        className={classes.svg}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 10.4781L46.9544 0L70 21.5205L56.638 47.7158L43.0509 59L0 10.4781Z" fill="#5C2A26" />
                        <path d="M35 27H49M42 34L42 20" stroke="var(--color-arrow)" />
                      </svg>
                      <span>{data.buttonText}</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
