import axios from "axios"


interface FullAlbum {   //output
    userId : number,
    id : number ,
    title: string ,
    photos :[
    albumId : number ,
    id : number ,
    title : string ,
    url : string,
    thumbnailUrl : string
    ]
}

type data = {   //data
    userId : number,
    id : number ,
    title: string ,
    photos :[
    albumId : number ,
    id : number ,
    title : string ,
    url : string,
    thumbnailUrl : string
    ]
}

const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';
const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';

async function mapPhotoToAlbum(userIds?: number[]): Promise<FullAlbum[]>{
const takeDataPhoto = await axios.get<data[]>('https://jsonplaceholder.typicode.com/photos')
const takeDataAlbums = await axios.get<data[]>('https://jsonplaceholder.typicode.com/albums')
return  [{
    userId : userIds[mapPhotoToAlbum([])],
    id :  ,
    title: string ,
    photos :[
    albumId : number ,
    id : number ,
    title : string ,
    url : string,
    thumbnailUrl : string
    ]
}
    
]

}


interface output {
  id: number ,
  title: string
}

