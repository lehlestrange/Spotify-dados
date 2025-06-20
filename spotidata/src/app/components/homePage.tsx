// pages/index.js ou app/page.js
import Head from 'next/head';
import Home from '../page';
import backgroundImage from './welcomePage.png';

export default function HomePage() {
  return (
    <>
      <div
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
      }}
    >
      <h1>Minha Página com Fundo</h1>
    </div>
    </>
  );
}
