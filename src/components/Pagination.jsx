import React from 'react'

const Pagination = ({totalPosts, postsPerPage, paginate, currentPage, setCurrentPage, loading}) => {
    const totalPages = Math.ceil(totalPosts/postsPerPage);
    const pageNumbers = []
    //push all the page numbers into the array
    for(let i=1; i<= totalPages; i++ ){
        pageNumbers.push(i)
    }
  if(!loading){

    return (
      <div className='pl-24' >
        <button className='mr-2 disabled:opacity-50' disabled={currentPage===1} onClick={()=> setCurrentPage(currentPage-1)} >Prev</button>
        {/* map all the page number in the array */}
          {pageNumbers.map((page)=>(
              <button className=' px-2 focus:bg-slate-400' onClick={()=> {
                paginate(page)  
            }}  key={page}>{page}</button>
          ))}
        
        <button type='button' className='ml-2  disabled:opacity-50'  disabled={totalPages===currentPage} onClick={()=> setCurrentPage(currentPage+1)} >Next</button>
      </div>
    )
  }
}

export default Pagination
