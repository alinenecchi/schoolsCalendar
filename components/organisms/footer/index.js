import React from 'react';
import Link from 'next/link';

// loading the sass style fot the component
import css from './footer.module.scss';
import Facebook from '../../icons/facebook';
import Instagram from '../../icons/instagram';
import Twitter from '../../icons/twitter';

/**
 * Organism Footer
 * 
 * <!-- TODO: add a description here! -->
 */
function Footer (props) {
  const {
    className    = "",
    titleText    = "Atendimento:",
    supportTest  = "suporte@calendar.com.br",
    phoneText    = "0000 000 00 00",
    politicsText = "Política de privacidade",
    termsText    = "",
    linkTerms    = "",
    children,
    ...other
  } = props;

  return <div
    className={`${css["organism__footer-container"]} ${className}`}
    data-content-wrapper={true}
    {...other}
  >
    <div className={css["titleText"]}>
      <span>{titleText}</span><br></br>
    </div>

    <div className ={css["info"]}>
      <div className={css["info-left"]}>
        <div className={css["info-container"]}>
          <a href="mailto:suporte@suporte.com.br">{supportTest}</a>&nbsp;
          <a href="tel:000000000">{phoneText}</a>
        </div>

        <div className={css["social-container"]}>
          <a href="" title="Instagram" target="_blank"><Instagram  className={css["icones"]}/></a>
          <a href="" title="Facebook" target="_blank"><Facebook  className={css["icones"]}/></a>
          <a href="" title="Twitter" target="_blank"><Twitter  className={css["icones"]}/></a>
        </div>
         
      </div>
      <div className={css["info-right"]}>
        <div className={css["links-container"]}>
          <Link href="/politica-de-privacidade"><a title="Política de privacidade">{politicsText}</a></Link>&nbsp;
          <Link href="/termos-de-uso"><a title="Termos de uso">Termos de uso</a></Link>&nbsp;
          <Link href={linkTerms}><a title="Condições de locação">{termsText}</a></Link>
          <Link href="/conheca"><a title="Conheça a School Calendar">Conheça a Scholl Calendar</a></Link>
        </div>
      </div>
    </div>
  </div>;
}

export default Footer;
