import { useImageImport } from "../hooks/image-import"

type ProductImageProps = React.HTMLProps<HTMLImageElement> & { src: string };

export function ProductImage(props: ProductImageProps) {
    const image = useImageImport(`produtos/${props.src}`);

    return (
        <img {...props} src={image} />
    )
}
