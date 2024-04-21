import useCurrentUser from "@/hooks/useCurrentUser";
import { sign } from "crypto"
import { NextPageContext } from "next"
import { getSession } from "next-auth/react"
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import useMovieList from "@/hooks/useMovieList";
import useFavorites from "@/hooks/useFavorites";

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
  const { data: favorites = [] } = useFavorites();
  //const { data: user } = useCurrentUser();
  return (
    <>
     <Navbar />
     <Billboard/>
     <div className="pb-40">
       <MovieList title="Trending Now" data={movies}/>\  
       <MovieList title="New Releases" data={movies}/>\
       <MovieList title="MyList" data={favorites}/>
     </div>

    </>
  )
}
