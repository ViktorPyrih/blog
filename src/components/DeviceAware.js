function DeviceAware({standard, mobile}) {
    if (window.matchMedia("(max-width: 700px)").matches) {
        return mobile;
    }

    return standard;
}

export default DeviceAware;
