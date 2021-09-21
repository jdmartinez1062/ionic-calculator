import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import NavBar from '../components/NavBar';

const About: React.FC = () => (
  <>
    <IonPage>
      <NavBar title="About" />
      <IonContent fullscreen>
        <p>
          {' '}
          Mathematics is not about numbers, equations, computations, or algorithms: it is about
          understanding. –William Paul Thurston
        </p>
      </IonContent>
    </IonPage>
  </>
);

export default About;
