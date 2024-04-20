import useCurrentUser from "@/hooks/useCurrentUser";
import { sign } from "crypto"
import { NextPageContext } from "next"
import { getSession } from "next-auth/react"
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import useMovieList from "@/hooks/useMovieList";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if(!session){
    return{
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

 return {
  props: {}
 }
}

export default function Home() {
  const { data: movies = [] } = useMovieList();

  //const { data: user } = useCurrentUser();
  return (
    <>
     <Navbar />
     <Billboard/>
     <div className="pb-40">
       <MovieList title="Trending Now" data={movies}/>
     </div>

    </>
  )
}
