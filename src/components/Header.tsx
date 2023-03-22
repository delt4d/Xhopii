import { useImageImport } from "../hooks/image-import";

export function Header() {
    const logo = useImageImport("logo");

    return (
        <>
            <header>
                <img src={logo} />
                <section>
                    <h1>Xhopii</h1>
                </section>
            </header>

            <nav>
                <ul>
                    <li>
                        <a href="#">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Cadastro Cliente
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Cadastro Funcionário
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Cadastro Produto
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Ver Clientes
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Ver Funcionários
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Ver Produtos
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
