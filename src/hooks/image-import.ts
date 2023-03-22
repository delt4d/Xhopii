import { useEffect, useState } from 'react';

export function useImageImport(src: string) {
    const [image, setImage] = useState('');

    useEffect(() => {
        const img = new Image();
        img.src = `https://delt4d.github.io/Xhopii/assets/img/${src}.png`;
        img.onload = () => setImage(img.src);
    }, [src]);

    return image;
}
