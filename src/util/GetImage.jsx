
const GetImage=({image_url})=>{
    return(
        <img 
            src={`https://my-dj.vercel.app/${image_url}`}
            width={200}
            height={150}
        />
    )
}

export default GetImage;