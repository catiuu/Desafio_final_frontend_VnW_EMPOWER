import S from "./doados.module.scss";
import { useState, useEffect } from "react";
import api from "../../services/api";

export default function Doados() {
  const [livros, setLivros] = useState([]);

  const getLivros = async () => {
    try {
      const response = await api.get("/livros");
      setLivros(response.data);
    } catch (error) {
      console.error("Erro ao buscar livros:", error);
    }
  };

  useEffect(() => {
    getLivros();
  }, []);
  return (
    <section className={S.boxDoados}>
      <h2>Livros Doados</h2>
      <section className={S.boxBooks}>
        {livros.map((item) => (
          <article key={item.id}>
            <img src={item.imagem_url} alt={item.titulo} className={S.img} />
            <h3>{item.titulo}</h3>
            <p>{item.autor}</p>
            <p>{item.categoria}</p>
          </article>
        ))}
      </section>
    </section>
  );
}
