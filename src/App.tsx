import React, { FormEvent, useState } from 'react';
import './App.css';

function App() {
  const [lado1, setLado1] = useState<number | null>(null);
  const [lado2, setLado2] = useState<number | null>(null);
  const [lado3, setLado3] = useState<number | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (lado1 === null || lado2 === null || lado3 === null) {
      alert('Completa los campos para poder calcular el triangulo');
      return;
    }
    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
      alert('Ningun lado del triangulo puede ser 0 o menor que 0 ');
      return;
    }

    if (lado1 === lado2 && lado2 === lado3) {
      alert('El triangulo es equilátero');
      return;
    }

    if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
      alert('Triângulo Isósceles');
      return;
    }

    alert('Triângulo Escaleno');
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <form action=''>
          <label htmlFor='lado1'>Lado 1</label>
          <input
            type='number'
            name='lado1'
            id='lado1'
            min='0'
            onChange={(e) => setLado1(Number(e.target.value))}
          />
          <br />
          <label htmlFor='lado2'>Lado 2</label>
          <input
            type='number'
            name='lado2'
            id='lado2'
            min='0'
            onChange={(e) => setLado2(Number(e.target.value))}
          />
          <br />
          <label htmlFor='lado3'>Lado 3</label>
          <input
            type='number'
            name='lado3'
            id='lado3'
            min='0'
            onChange={(e) => setLado3(Number(e.target.value))}
          />
          <br />
          <input
            type='submit'
            value='Calcular'
            onClick={(e) => handleSubmit(e)}
          ></input>
        </form>
      </header>
    </div>
  );
}

export default App;
