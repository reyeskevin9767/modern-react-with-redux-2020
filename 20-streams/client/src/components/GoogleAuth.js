import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    // Load rest of google api library of client
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '373284125792-0bnbak35mcr6j48m583r7fhbguub48l0.apps.googleusercontent.com',
        scope: 'email',
      });
    });
  }

  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
