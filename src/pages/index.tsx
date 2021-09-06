import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useClientes from "../hooks/useClientes";

export default function Home() {

  const { 
    cliente, 
    clientes, 
    novoCliente, 
    salvarCliente,
    excluirCliente, 
    selecionarCliente,
    tabelaVisivel,
    exibirTabela
  } = useClientes()

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-600 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao cor="green" ClassName="mb-4"
                onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela clientes={clientes} 
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Formulario 
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
          /> 
        )}
      </Layout>
    </div>
  )
}

// Para resolver o problema de linha vemelha abaixo das palavras acesse:
// https://stackoverflow.com/questions/68163385/parsing-error-cannot-find-module-next-babel
