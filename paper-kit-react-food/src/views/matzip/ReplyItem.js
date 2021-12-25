import React from 'react';
import { Button, Container } from 'reactstrap';

const ReplyItem=({board,replyDelete})=>{
    return(
        <Container>
        <tr>
            <h4><td>{board.writer}</td></h4>
            <h5><td>{board.content}</td></h5>
            <h6><td>{board.regdate}</td></h6>
            <Button color="danger" onClick={()=>replyDelete(board.num)} size="sm">삭제</Button>
        </tr>
        <hr/>
        </Container>

    )
}
export default ReplyItem;