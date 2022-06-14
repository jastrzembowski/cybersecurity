import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Footer() {

  const {t} = useTranslation()


  return (
    <footer className='foot-partner'>
        <ul>
        <li>{t("impressum")}</li>
          <li>{t("daten")}</li>
          <li className='foot-pc'>{t("haft")}</li>
          <li className='foot-mobile'>{t("haft")}</li>
          <li className='foot-pc'>{t("allge")}</li>
          <li className='foot-mobile'>{t("all-mob")}</li>
        </ul>
    </footer>
  )
}
