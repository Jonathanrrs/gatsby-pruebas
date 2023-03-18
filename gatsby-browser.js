import "./src/styles/global.css";

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(`¿Recargamos el sitio a la última versión?`);

  if (answer === true) {
    window.location.reload();
  }
};
