import React from 'react';
import { Button, Htag, P } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h2">Текст</Htag>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="down">
        Кнопка
      </Button>
      <P size="l">
        {' '}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
        provident a quo nemo vero! Quasi expedita odio aut numquam! Est
        praesentium autem magnam fugiat eligendi quisquam consequatur aperiam,
        quia laborum?
      </P>
    </>
  );
}
