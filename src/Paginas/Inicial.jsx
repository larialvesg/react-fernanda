import { Cabecalho } from "../Componentes/Cabecalho";
import { BarradeNavegacao } from "../Componentes/BarradeNavegacao";
import { Conteudo } from "../Componentes/Conteudo";

export function Inicial() {
  return (
    <>
      <Cabecalho />
      <BarradeNavegacao />
      <Conteudo />
    </>
  );
}
