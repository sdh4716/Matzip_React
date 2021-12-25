

function freeComment({freecommentList}){
   
    return (
        <> 
          {
                freecommentList.map((board,index)=>(
                  <freeItem key={index} board={board}/>
                ))
          }    
            
        </>
    );
    
  }
  export default freeComment;
  
  
  
  