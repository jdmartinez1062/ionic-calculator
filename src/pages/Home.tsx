import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import NavBar from '../components/NavBar';

const Home: React.FC = () => (
  <>
    <IonPage>
      <NavBar title="Home" />
      <IonContent fullscreen>
        <h3>Welcome to our page</h3>
        <p>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu consectetur felis, nec
          volutpat lorem. Ut in posuere est. Fusce vel mauris risus. Donec nulla turpis, varius
          viverra cursus vitae, porta vitae enim. Proin consectetur dolor quis lacus ornare auctor.
          Aenean eleifend facilisis leo, eu tincidunt mi accumsan eget. Quisque vulputate tortor sed
          massa sodales lobortis. Donec eros lorem, lobortis vitae scelerisque nec, viverra in eros.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Sed vitae enim ac quam tempor eleifend. Nulla quam quam, laoreet at ligula at,
          luctus blandit velit. Vestibulum dignissim volutpat dolor, nec dignissim risus
          sollicitudin vel. Nullam varius ligula vitae neque faucibus dictum. Mauris vitae elementum
          eros.
        </p>
      </IonContent>
    </IonPage>
  </>
);

export default Home;
