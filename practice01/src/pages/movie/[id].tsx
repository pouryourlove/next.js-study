import { useRouter } from "next/router"

export default function Page(){
    const router = useRouter();
    const id = router.query.id
    return <h1>{id} 영화 상세페이지 </h1>
}