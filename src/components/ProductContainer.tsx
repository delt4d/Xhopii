import { useEffect, useState } from "react";
import { ProductImage } from "./ProductImage";

export function ProductContainer() {
    const products = ["produto1", "produto2", "produto3", "produto4", "produto5",]
    const [currentProduct, setCurrentProduct] = useState(products[0]);

    useEffect(() => {
        changeCurrentProduct(products[0]);
    }, []);

    function changeCurrentProduct(produto: string) {
        setCurrentProduct(produto);
    }

    return (
        <section className="product-section">
            <div className="product-options">
                {products.map((product, index) =>
                    <ProductImage onClick={() => changeCurrentProduct(product)} key={index} src={product} />
                )}
            </div>

            <div className="product-selected">
                <ProductImage src={currentProduct} />
            </div>

            <section className="product-information">
                <h2>Camisa Desenvolvedor Front-End CSS</h2>

                <div>
                    <p className="price">R$ 56,90</p>
                    <p>171 peças disponíveis</p>
                </div>

                <section>
                    <div>
                        <span>Modelos:</span>
                        <div>
                            <button>Preto</button>
                            <button>Azul</button>
                            <button>Verde</button>
                            <button>Cinza</button>
                            <button>Rosa</button>
                        </div>
                    </div>

                    <div>
                        <span>Tamanhos:</span>
                        <div>
                            <button>P</button>
                            <button>M</button>
                            <button>G</button>
                            <button>GG</button>
                        </div>
                    </div>

                    <div>
                        <span>Tamanho Selecionado: P</span>
                    </div>
                </section>

                <div>
                    <button className="btn-comprar">Comprar Agora</button>
                </div>
            </section>
        </section>
    )
}
