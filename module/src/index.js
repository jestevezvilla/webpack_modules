const init = async ()=> {   
    const c = await import('./hello');
    c.exec();
}

export { init };