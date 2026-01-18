// import { useContext,useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import AppContext from "../../features/appContext/AppContext";
// import ProductCard from "../../entities/product/ui/ProductCard";

// export default function Group() {
//  const {slug} = useParams();
// const [group, setGroup] = useState({});
// const [pageNum, setPageNum] = useState(1);
// const [lastPageNum, setLastPageNum] = useState(3);
// const {request} = useContext(AppContext);
// const [perPage, setPerPage] = useState(5);

// // useEffect(() => {
// //     request(`api://groups/${slug}?page=${pageNum}&perpage=5`, {}, true)
// //         .then(j => {

// //             // console.log(j.meta);
// //             setGroup(j.data);
// //             setLastPageNum(j.meta.pagination.lastPage);
// //         });
// // }, [slug, pageNum]);

// useEffect(() => {
//     request(`api://groups/${slug}?page=${pageNum}&perpage=${perPage}`, {}, true)
//         .then(j => {
//             setGroup(j.data);
//             setLastPageNum(j.meta.pagination.lastPage);
//         });
// }, [slug, pageNum, perPage]);


//     return <>
//     <h1>Розділ {group.name}</h1>
    
//    {group.products != null && <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4  row-cols-xxl-5 g-4">
//      {group.products.map(p =><ProductCard key={p.id} product={p} />)}
//     </div>}

//  <div className="w-100 d-flex justify-content-between align-items-center my-5">

//     <div className="btn-group">
//         {[2, 4, 6].map(n => (
//             <button
//                 key={n}
//                 className={`btn btn-sm ${perPage === n ? 'btn-primary' : 'btn-outline-primary'}`}
//                 onClick={() => {
//                     setPerPage(n);
//                     setPageNum(1);
//                 }}
//             >
//                 {n}
//             </button>
//         ))}
//     </div>

//     <Paginator 
//         pageNum={pageNum} 
//         setPageNum={setPageNum} 
//         lastPageNum={lastPageNum}
//     />

// </div>

//     </>;
// }
// function Paginator({ pageNum, setPageNum, lastPageNum }) {
//     const getPageNumbers = () => {
//         if (lastPageNum <= 3) {
//             const pages = [];
//             for (let i = 1; i <= lastPageNum; i++) pages.push(i);
//             return pages;
//         }

//         if (pageNum === 1) return [1, 2, 3];
//         if (pageNum === lastPageNum) return [lastPageNum - 2, lastPageNum - 1, lastPageNum];
//         return [pageNum - 1, pageNum, pageNum + 1];
//     };

//     const pages = getPageNumbers();


//   return (
//      <nav aria-label="...">
//             <ul className="pagination">
//                 <li className={`page-item ${pageNum === 1 ? 'disabled' : ''}`}>
//                     <span role="button" className="page-link" onClick={() => pageNum > 1 && setPageNum(1)}>
//                         <i className="bi bi-skip-backward"></i>
//                     </span>
//                 </li>
//                 <li className={`page-item ${pageNum === 1 ? 'disabled' : ''}`}>
//                     <span role="button" className="page-link" style={{ transform: 'scaleX(-1)' }} onClick={() => pageNum > 1 && setPageNum(pageNum - 1)}>
//                         <i className="bi bi-fast-forward"></i>
//                     </span>
//                 </li>

//                 {pages.map(p => (
//                     <li key={p} className={`page-item ${pageNum === p ? 'active' : ''}`}>
//                         <span 
//                             className="page-link" 
//                             role={pageNum === p ? undefined : "button"} 
//                             onClick={pageNum === p ? undefined : () => setPageNum(p)}
//                         >
//                             {p}
//                         </span>
//                     </li>
//                 ))}

//                 <li className={`page-item ${pageNum === lastPageNum ? 'disabled' : ''}`}>
//                     <span className="page-link" role="button" onClick={() => pageNum < lastPageNum && setPageNum(pageNum + 1)}>
//                         <i className="bi bi-fast-forward"></i>
//                     </span>
//                 </li>
//                 <li className={`page-item ${pageNum === lastPageNum ? 'disabled' : ''}`}>
//                     <span className="page-link" role="button" onClick={() => pageNum < lastPageNum && setPageNum(lastPageNum)}>
//                         <i className="bi bi-skip-forward"></i>
//                     </span>
//                 </li>
//             </ul>
//         </nav>
//   );
// }
