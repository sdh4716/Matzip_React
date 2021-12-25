import React,{Component} from "react"
import axios from "axios"
import { useEffect, useState } from "react"
import { Form } from "reactstrap"

const Adview = (props) =>{
    const [loadImage, setLoadImage] = useState({
        num:'',
        title:'',
        writer:'',
        adname:'',
        content:'',
        adurl:''
    })
    
    useEffect(()=>{ //초기실행
        let num= props.match.params.num
        console.log(num);
        load(num);
    },[])

    const load =(num)=>{ //업로드이미지 가져오기
        axios.get("/matzip/adImage/"+num)
        .then((resp)=>{
            console.log(resp.data);
            setLoadImage(resp.data);
        })

    }

    return(
       
        <div>
            번호:{loadImage.num}<br/>
            제목:{loadImage.title}<br/>
            작성자:{loadImage.writer}<br/>
            {/* 그림: <img src=("assets/img/uploadimage/"+loadImage.adname)/><br/> */}
            {/* 그림: <img src={require("/image/"+loadImage.adname)}/><br/> */}
            <img src={process.env.PUBLIC_URL +"/image/"+ loadImage.adname} alt="image" /><br/>
            내용:{loadImage.content}<br/> 
        </div>
    )
}
export default Adview;