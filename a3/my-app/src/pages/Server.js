import React from 'react';
import Server from '../components/Server';
import ServerForm from '../components/ServerForm';
import ServerFilter from '../components/ServerFilter';

export default function Contact() {
  return (
    <h1>
      <ServerForm />
      <Server />
      <ServerFilter />
    </h1>
  );
}
