import {useState} from 'react';

export default function useAlarm() {
   var data = [
    { id: 1, hora: '16H13', texto: 'Ir para MBA'},
    { id: 2, hora: '22H13', texto: 'Tomar remédio'},
  
   ]

  return {
    data
  };
}
