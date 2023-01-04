import React from 'react';
import './styles.scss';
import { Button, Input } from './ui/atoms';
import { Upload } from './ui/organims/Upload/Upload';

export const App = () => {
  return (
    <div className="App">
      <Button>Test</Button>
      <Input />
      <Upload />
    </div>
  );
};
