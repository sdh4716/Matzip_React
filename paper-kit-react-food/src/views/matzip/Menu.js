import React from "react";
import { Grid, Box } from "@chakra-ui/react"
import { Card, Container } from "reactstrap"

import './matzip_CSS/image.css';
import './matzip_CSS/Card.css';

const Menu=()=>{

//card-plain 카드 그림자 제거
return(
  <>

<Card className="card-menu m-20">
  <Container>
  <div className="card-title">메뉴별 맛집</div>
  <br/>
      <Grid templateColumns="repeat(4, 1fr)" gap={20}>
        <Box>
          <div class="lb-wrap">
            <div class="lb-text">
            <h2 class="textfont">간식</h2>
            </div>
            <div class="lb-image"> <img src={require("assets/img/food/foodbackground.jpg").default} /></div>
          </div>
        </Box>

        <Box >
          <img src={require("assets/img/food/foodbackground.jpg").default} />
        </Box>

        <Box>
          <img src={require("assets/img/food/foodbackground.jpg").default} />
        </Box>

        <Box>
          <img src={require("assets/img/food/foodbackground.jpg").default} />
        </Box>

        <Box>
          <img src={require("assets/img/food/foodbackground.jpg").default} />
        </Box>

        <Box>
          <img src={require("assets/img/food/foodbackground.jpg").default} />
        </Box>

        <Box>
          <img src={require("assets/img/food/foodbackground.jpg").default} />
        </Box>

        <Box>
          <img src={require("assets/img/food/foodbackground.jpg").default} />
        </Box>


      </Grid>
    </Container>
    </Card>
    </>

)
}

export default Menu;