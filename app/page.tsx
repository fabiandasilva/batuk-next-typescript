import { Hero,  NewCollection, Novedades} from "@/app/components/index";


const page = () => {
    return (
        <>
            <Hero />            
            <NewCollection title={"Descubrí la nueva colección"}/>
            <Novedades/>
        </>
    )
}

export default page