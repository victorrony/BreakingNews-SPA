import { Card } from "../../components/Cards/Card";
import { HomeBody } from "./HomeStyle";
import { getAllPosts } from "../../service/PostsService";
import { useEffect, useState } from "react";

export default function Home() {
  const [news, setNews] = useState([]);
  async function findAllPosts() {
    const response = await getAllPosts();
    setNews(response.data.results);
  }

  useEffect(() => {
    findAllPosts();
  }, []);

  return (
    <>
      <HomeBody>
        {news.map((item) =>
          console.log(news)(
            <Card
              key={item.id}
              title={item.title}
              text={item.text}
              banner={item.banner}
              likes={item.likes.length}
              comments={item.comments.length}
            />
          )
        )}
      </HomeBody>
    </>
  );
}
