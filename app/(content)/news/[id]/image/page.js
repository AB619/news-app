//import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import { getNewsItem } from '@/utils/news';

export default async function NewsImage({ params }) {
  const newsSlug = params.id;
  const news = await getNewsItem(newsSlug);
  //const news = DUMMY_NEWS.find((news) => news.slug === newsSlug);

  if (!news) {
    notFound();
  }
  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${news.image}`} alt={news.title} />
    </div>
  );
}
