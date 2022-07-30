import React  from "react";
import styles from "./Paginated.module.css";

export default function Paginated(props) {
    const { setPagina, pagina, totalItems, itemsPorPagina } = props;

    const cantPaginas = Math.ceil(totalItems / itemsPorPagina ) - 1;

    const pageNumbers = [];
    

    
    for (let i = 0; i <= cantPaginas; i++) {
      pageNumbers.push(i);
    }
    

    return (
      <div className={styles.paginated}>
        {
          <>
            <button className={pagina > 0 ? styles.Btn : styles.BtnDisabled} key={'first'} onClick={() => setPagina(0)}>{'<<'}</button>
            <button className={pagina > 0 ? styles.Btn : styles.BtnDisabled} key={'prev'} onClick={() => setPagina(pagina-1)}>{'<'}</button>
          </>
        }
        {
          pageNumbers.length > 0 && pageNumbers.map((p, i) => {
            return <button className={i === pagina ? styles.BtnSelected : styles.Btn} key={i} onClick={() => setPagina(p)}>{p+1}</button>
        })
        }
        {
          <>
            <button className={pagina < cantPaginas ? styles.Btn : styles.BtnDisabled} key={'next'} onClick={() => setPagina(pagina+1)}>{'>'}</button>
            <button className={pagina < cantPaginas ? styles.Btn : styles.BtnDisabled} key={'last'} onClick={() => setPagina(cantPaginas)}>{'>>'}</button>
          </>
        }
      </div>
    );
}
