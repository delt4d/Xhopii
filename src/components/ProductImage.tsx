import { useEffect, useState } from "react";
import { useImageImport } from "../hooks/image-import"

type ProductImageProps = React.HTMLProps<HTMLImageElement> & { src: string };

export function ProductImage(props: ProductImageProps) {
    const image = useImageImport(`../assets/img/produtos/${props.src}.png`);

    return (
        <img {...props} src={image} />
    )
}
