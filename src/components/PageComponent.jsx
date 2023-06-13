import { Pagination,PaginationItem, PaginationLink } from 'reactstrap';


const PageComponent = ({ currentPage, data, changePage }) => {
  return(
    <Pagination>
      <PaginationItem disabled={currentPage === 1}>
        <PaginationLink href="#" previous onClick={() => changePage('prev')} />
      </PaginationItem>
      {data.map((item, index) => {
        return(
          <PaginationItem key={item.id}>
            <PaginationLink onClick={() => changePage(index+1)} href="#">
               {index +1}
            </PaginationLink>
          </PaginationItem>
        );
      })}
      <PaginationItem>
        <PaginationLink href="#" next onClick={() => changePage("next")} />
      </PaginationItem>
    </Pagination>
  )};

  export default PageComponent;