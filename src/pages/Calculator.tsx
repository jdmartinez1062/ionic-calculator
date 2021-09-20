import { IonContent, IonPage } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import ButtonPanel from '../components/ButtonPanel';
import Display from '../components/Display';
import calculate from '../logic/calculate';

const Calculator: React.FC = () => {
  const [total, setTotal] = useState<string | null>(null);
  const [next, setNext] = useState<string | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [buttonName, setButtonName] = useState<string | null>(null);

  useEffect(() => {
    const [t, n, o]: (string | null)[] = calculate({ total, next, operation }, buttonName);
    setTotal(t);
    setNext(n);
    setOperation(o);
    setButtonName(null);
  }, [total, next, operation, buttonName]);

  return (
    <>
      <IonPage>
        <IonContent>
          <Display total={total} next={next} operation={operation} />
          <ButtonPanel onButtonName={setButtonName} />
        </IonContent>
      </IonPage>
    </>
  );
};

export default Calculator;
