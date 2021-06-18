import { Box } from "@chakra-ui/react";



interface checkIs{
    isShow: boolean;
}

export default function Showpicture( {isShow}: checkIs){
    return <h1>
        { isShow ? <img src='http://cdn.akc.org/content/article-body-image/samoyed_puppy_dog_pictures.jpg'></img> 
        :
        <img src=''></img>}
    </h1>
}



