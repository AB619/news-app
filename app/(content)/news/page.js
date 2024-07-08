import NewsList from "@/components/news-list";
//import { DUMMY_NEWS } from "@/dummy-news";
import { getAllNews } from '@/utils/news';

/**
 * Data Fetching Options:
 *  1. Client side Data Fetching - From external API , like we do it in React. (using hooks and event listeners)
 *  2. Server side Data Fecthing - From external API , using async await with React server components.
 *  3. If you have access and control over backend servers also, 
 *        skip backend server and directly communicate with DB from UI ( usually for small application which are UI heavy)
 * */ 

export default async function NewsPage() {
  const news = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
