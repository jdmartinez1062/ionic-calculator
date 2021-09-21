import React from 'react';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import './Menu.css';

import { book, calculator, home } from 'ionicons/icons';
import { useRouteMatch } from 'react-router';

const Menu: React.FC = () => {
  const { path, url } = useRouteMatch();
  return (
    <>
      <IonMenu contentId="main" type="overlay">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonList>
            <IonItem routerLink={url + 'home'}>
              <IonIcon slot="start" icon={home} />
              <IonLabel>Home</IonLabel>
            </IonItem>
            <IonItem routerLink={url + 'calculator'}>
              <IonIcon slot="start" icon={calculator} />
              <IonLabel>Calculator</IonLabel>
            </IonItem>
            <IonItem routerLink={url + 'about'}>
              <IonIcon slot="start" icon={book} />
              <IonLabel>About</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
    </>
  );
};

export default Menu;
