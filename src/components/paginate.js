import Pagination from 'react-bootstrap/Pagination'

function Paginate(props) {

const handleClick = (e) => {

    switch(e.target.id) {
        case "first":
          props.setPage(1)
          break;
        case "prev":
          props.setPage(props.page-1)
          break;
        case "next":
            props.setPage(props.page+1)
            break;
        case "last":
            props.setPage(Math.floor(props.total/10) + 1)
            break;
        default:
            props.setPage(e.target.id)
      }

} 
return (
    <Pagination>
        <Pagination.First id= "first" onClick={(e) => handleClick(e)} />
        <Pagination.Prev id= "prev" onClick={(e) => handleClick(e)} disabled={props.page===1}/>
        <Pagination.Ellipsis />
        {props.page < 3 &&
                        <>
                        <Pagination.Item id= {1} onClick={(e) => handleClick(e)} active = {props.page === 1}>{1}</Pagination.Item>
                        <Pagination.Item id= {2} onClick={(e) => handleClick(e)} active = {props.page === 2}>{2}</Pagination.Item>
                        <Pagination.Item id= {3} onClick={(e) => handleClick(e)}>{3}</Pagination.Item>
                        <Pagination.Item id= {4} onClick={(e) => handleClick(e)}>{4}</Pagination.Item>
                        <Pagination.Item id= {5} onClick={(e) => handleClick(e)}>{5}</Pagination.Item>
                        </>
        }        
        {props.page >=3 && props.page <= Math.floor(props.total/10) -1 &&
        <>
        <Pagination.Item id= {props.page-2}>{props.page-2}</Pagination.Item>
        <Pagination.Item id= {props.page-1}>{props.page-1}</Pagination.Item>
        <Pagination.Item id= {props.page}active>{props.page}</Pagination.Item>
        <Pagination.Item id= {props.page+1}>{props.page + 1 }</Pagination.Item>
        <Pagination.Item id= {props.page+2}>{props.page + 2}</Pagination.Item>
        </>
        }
        {props.page > Math.floor(props.total/10) -1 &&
                        <>
                        <Pagination.Item id= {Math.floor(props.total/10) - 3} onClick={(e) => handleClick(e)} >{Math.floor(props.total/10) - 3}</Pagination.Item>
                        <Pagination.Item id= {Math.floor(props.total/10) - 2} onClick={(e) => handleClick(e)} >{Math.floor(props.total/10) - 2}</Pagination.Item>
                        <Pagination.Item id= {Math.floor(props.total/10) - 1} onClick={(e) => handleClick(e)}>{Math.floor(props.total/10) - 1}</Pagination.Item>
                        <Pagination.Item id= {Math.floor(props.total/10)}     onClick={(e) => handleClick(e)} active = {props.page === Math.floor(props.total/10)}>{Math.floor(props.total/10)}</Pagination.Item>
                        <Pagination.Item id= {Math.floor(props.total/10) + 1} onClick={(e) => handleClick(e)} active = {props.page === Math.floor(props.total/10) + 1}>{Math.floor(props.total/10) + 1}</Pagination.Item>
                        </>
        }          
        

        <Pagination.Ellipsis />
        <Pagination.Next id= "next" onClick={(e) => handleClick(e)} disabled={props.page===Math.floor(props.total/10)+1}/>
        <Pagination.Last id= "last" onClick={(e) => handleClick(e)}/>
    </Pagination>
)
}

export default Paginate