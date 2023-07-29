import React, {useState} from 'react'
import { faqData } from '../jsonData/data'
import Faq from './Faq'

import style from '../module/faqs.module.css'

export default function Faqs() {

    const [faqs, setfaq] = useState(faqData)

  return (
    <main className={style.container}>
        <section className={style.faqs}>
            <h1> FAQ </h1>
            {
               faqs.map((faq)=> <Faq key={faq.id} {...faq}/>)
            }
        </section>  
    </main>
  )
}
