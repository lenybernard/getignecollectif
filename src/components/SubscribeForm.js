import React from 'react';

export default class SubscribeForm extends React.Component {
    render() {
        return (
            <form name="subscribeForm" method="POST" netlifyHoneypot="bot-field" data-netlify="true" id="subscribe-form"
              className="subscribe-form">
              <div className="screen-reader-text">
                <label>Ne remplissez pas ceci si vous êtes un humain : <input name="bot-field" /></label>
              </div>
              <div className="form-row">
                <label>
                  <span className="screen-reader-text">Adresse email</span>
                  <input className="subscribe-email" type="email" name="email" placeholder="Entrez votre adresse email..."/>
                </label>
              </div>
              <input type="hidden" name="form-name" value="subscribeForm" />
              <button className="button" type="submit">S'inscrire</button>
            </form>
        );
    }
}
