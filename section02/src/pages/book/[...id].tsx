import { useRouter } from "next/router"

export default function Page(){
    const router = useRouter();
    const {id} = router.query;
    
    console.log(id)

    return <h1>Book {id}</h1>
}

//catch all segement [...id]
// /book 뒤에 아무것도 안나오면 안되는데 대괄호로 
//[[...id]]를 해주면 된다. 