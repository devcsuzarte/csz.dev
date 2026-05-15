// app.jsx — root composition
const { useState } = React;

function App() {
  const [lang, setLang] = useState('pt');
  const t = window.COPY[lang];
  return (
    <>
      <window.Nav lang={lang} setLang={setLang} t={t} />
      <window.Hero t={t} apps={t.apps} />
      <window.About t={t} />
      <window.AppsList t={t} />
      <window.Skills t={t} />
      <window.Experience t={t} />
      <window.Services t={t} />
      <window.Testimonials t={t} />
      <window.Contact t={t} />
      <window.Footer t={t} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
