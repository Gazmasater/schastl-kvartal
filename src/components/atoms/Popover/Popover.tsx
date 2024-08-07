/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC } from 'react'
import { clx } from '@utils/clx'
// import { TBookCallback } from '@localTypes/bookCallback'
import classes from './Popover.module.css'

type TPopoverProps = {
  onClose: () => void
  isSuccess: boolean
}

export const Popover: FC<TPopoverProps> = ({ onClose, isSuccess }) => {
  return (
    <div className={classes.mainContainer}>
      <div className="MuiDialog-container MuiDialog-scrollPaper">
        <div
          className={clx([
            classes.boxShadow,
            'MuiPaper-root MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthSm MuiPaper-elevation24 MuiPaper-rounded',
          ])}
          role="dialog"
        >
          <div className={classes.container}>
            <div className={classes.inner}>
              {isSuccess && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 27" fill="none">
                  <path
                    d="M37.5 1.5L12.75 25.5L1.5 14.5909"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="currentColor"
                  />
                </svg>
              )}
            </div>
            <div className={clx(['MuiTypography-root', classes.marginText, 'MuiTypography-h6'])}>
              {isSuccess ? 'Спасибо за заявку' : 'Произошла ошибка :('}
            </div>
            {isSuccess && <p className="MuiTypography-root MuiTypography-body1">С вами свяжутся в ближайшее время</p>}
          </div>
          <button
            className={clx(['MuiButtonBase-root MuiIconButton-root', classes.buttonContainer])}
            type="button"
            aria-label="close"
            onClick={() => onClose()}
          >
            <span className="MuiIconButton-label">
              <svg
                version="1.1"
                width="28"
                height="27"
                viewBox="0 0 28 27"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
              >
                <path d="M1.5625 0L26.5586 24.9961L24.9963 26.5583L0.000246839 1.56225L1.5625 0Z" />
                <path d="M0.457031 25.4077L25.4531 0.411664L27.0153 1.97392L2.01928 26.97L0.457031 25.4077Z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
