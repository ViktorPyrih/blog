function DeviceAware({standard, mobile}) {
    if (window.matchMedia("(max-width: 700px)").matches) {
        console.log('A');
        return mobile;
    }

    return standard;
}

export default DeviceAware;
