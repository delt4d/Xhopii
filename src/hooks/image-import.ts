import { useEffect, useState } from 'react';

export function useImageImport(src: string) {
    const [image, setImage] = useState('');

    useEffect(() => {
        import(src).then((_) => {
            setImage(_.default);
        });
    }, [src]);

    return image;
}
