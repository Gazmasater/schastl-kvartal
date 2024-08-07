/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type ResponseData = {
  message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  axios
    .post(
      `https://api.telegram.org/bot${process.env.TELEGRAM_API_TOKEN}/sendMessage`,
      {
        chat_id: process.env.TELEGRAM_USER_ID,
        text: `Заявка. Телефон: ${req.body.phone}. Имя: ${req.body.name}`,
        disable_notification: false,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    .then(() => {
      res.status(200).json({ message: 'success' })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'error' })
    })
}
