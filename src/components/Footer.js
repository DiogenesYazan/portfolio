import React from "react";
import { Icon } from '@iconify/react';
import '../styles/components/footer.scss';

class Footer extends React.Component {
  copyEmailToClipboard = () => {
    const email = "diognesyuri@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      alert("Email copiado para a área de transferência!");
    }).catch(err => {
      console.error("Falha ao copiar o email: ", err);
    });
  };

  render() {
    return (
      <footer className="footer">
        <Icon icon="ic:baseline-email" />
        <p className="footer-text"></p>
        <button className="copy-email-button" onClick={this.copyEmailToClipboard}>
          Copiar Email
        </button>
      </footer>
    );
  }
}

export default Footer;
