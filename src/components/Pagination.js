function Pagination({page, setPage, offset}){

  const goToFirst=()=>{
    setPage({...page,current:0});
    window.scrollTo(0, offset);
  };

  const goToPrevious=()=>{
    setPage({...page,current:page.current>0?page.current-1:0});
    window.scrollTo(0, offset);
  };

  const goToNext=()=>{
    setPage({...page,current:page.current<page.max?page.current+1:page.max});
    window.scrollTo(0, offset);
  };

  const goToLast=()=>{
    setPage({...page,current:page.max});
    window.scrollTo(0, offset);
  };

  return (
    <div className="text-center">
      <button className="btn btn-lg btn-danger mx-1" disabled={page.current===0}
        onClick={goToFirst}>
        <i className="fas fa-lg fa-angle-double-left"></i>
      </button>
      <button className="btn btn-lg btn-dark mx-1" disabled={page.current===0}
        onClick={goToPrevious}>
        <i className="fas fa-lg fa-angle-left"></i>
      </button>
      <button className="btn btn-lg btn-dark mx-1" disabled={page.current===page.max} 
        onClick={goToNext}>
        <i className="fas fa-lg fa-angle-right"></i>
      </button>
      <button className="btn btn-lg btn-danger mx-1" disabled={page.current===page.max} 
        onClick={goToLast}>
        <i className="fas fa-lg fa-angle-double-right"></i>
      </button>
    </div>
  );
}
export default Pagination;