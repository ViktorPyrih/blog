import {useState} from "react";

function DeviceAware({standard, mobile}) {
    const [resized, setResized] = useState(false);
    window.onresize = () => setResized(!resized);
    if (window.matchMedia("(max-width: 700px)").matches) {
        return mobile;
    }

    return standard;
}

export default DeviceAware;
