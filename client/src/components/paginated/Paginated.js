import React  from "react";
import styles from "./Paginated.module.css";

export default function Paginated(props) {
    const { setPagina, pagina, totalItems, itemsPorPagina } = props;

    const cantPaginas = Math.ceil(totalItems / itemsPorPagina ) - 1;

    const pageNumbers = [];
    

    
    for (let i = 0; i <= cantPaginas; i++) {
      pageNumbers.push(i);
    }
    

    // useEffect(() => {
    //   updatePages();
    // }, [pagina])
    

    return (
      <div className={styles.paginated}>
        {pagina > 0 
          ? <><button className={styles.Btn} key={'first'} onClick={() => setPagina(0)}>{'<<'}</button>
            <button className={styles.Btn} key={'prev'} onClick={() => setPagina(pagina-1)}>{'<'}</button></>
          : <><button className={styles.BtnDisabled} key={'first'}>{'<<'}</button>
          <button className={styles.BtnDisabled} key={'prev'}>{'<'}</button></>
        }
        {
          pageNumbers.length > 0 && pageNumbers.map((p, i) => {
              return i === pagina 
                ? <button className={styles.BtnSelected} key={i} onClick={() => setPagina(p)}>{p+1}</button>
                : <button className={styles.Btn} key={i} onClick={() => setPagina(p)}>{p+1}</button>
          })
        }
        {pagina < cantPaginas 
          ? <><button className={styles.Btn} key={'next'} onClick={() => setPagina(pagina+1)}>{'>'}</button>
          <button className={styles.Btn} key={'last'} onClick={() => setPagina(cantPaginas)}>{'>>'}</button></>
          : <><button className={styles.BtnDisabled} key={'next'}>{'>'}</button>
          <button className={styles.BtnDisabled} key={'last'}>{'>>'}</button></>
        }
      </div>
    );
}
