import Hero from "@/components/Home/Hero";
import Recomendations from "@/components/Home/Recomendations";
import Footer from "@/app/layout/Footer";
import Navbar from "./layout/NavBar";
import { createClient } from '@/lib/supabase/server'
import { BookReview } from "@/interface/book";


async function getBooks() : Promise<BookReview[]> {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('BookReview')
    .select('*')
    .order('reviewDate', { ascending: false })

  if (error) console.error(error)
  return data ?? []
}


const Home = async () => {

  const livros = await getBooks()
  const categories = ['Todos', ...new Set(livros.map((livro) => livro.genre))]

  return (
    <div className="min-h-screen bg-background">
        <Navbar />

        <Hero />

        <Recomendations livros={livros} categories={categories}/>
      

        <Footer />

      
    </div>
  );
};

export default Home;