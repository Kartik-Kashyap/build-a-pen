window.addEventListener('vite:initial-error', (event) => {
  console.error('Vite initial load error:', (event as CustomEvent).detail);
});
