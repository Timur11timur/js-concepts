(async () => {
    const module = await import('./module.js');
    console.log(module);
})()