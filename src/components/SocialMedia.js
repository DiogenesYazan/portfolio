import React from 'react';
import { Icon } from '@iconify/react';

import '../styles/components/socialMedia.scss';

export default function SocialMedia() {
  return (
    <section className="social-media">
      <a href="https://www.linkedin.com/in/diogenesyuri/" target="_blank" rel="noopener noreferrer">
        <Icon icon="akar-icons:linkedin-fill" />
      </a>
      <a href="https://github.com/DiogenesYazan" target="_blank" rel="noopener noreferrer">
        <Icon icon="bi:github" />
      </a>
      <a href="https://www.instagram.com/diognes_yazan/?hl=pt-br" target="_blank" rel="noopener noreferrer">
        <Icon icon="bi:instagram" />
      </a>

      <a href="mailto:diognesyuri@gmail.com" target="_blank" rel="noopener noreferrer">
        <Icon icon="ant-design:mail-outlined" />
      </a>
    </section>
  )
}

/*
<a href="mailto:diognesyuri@gmail.com" target="_blank" rel="noopener noreferrer" className="mail-icon">
        <Icon icon="ant-design:mail-outlined" />
      </a>
*/