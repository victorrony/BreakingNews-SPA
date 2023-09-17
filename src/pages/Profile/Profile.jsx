import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import {
  ProfileActions,
  ProfileAvatar,
  ProfileBackground,
  ProfileContainer,
  ProfileHeader,
  ProfileIconAdd,
  ProfileIconEdit,
  ProfilePosts,
  ProfileUser,
} from "./ProfileStyled";
import { getPostsByUserId } from "../../service/PostsService";
import { Card } from "../../components/Cards/Card";

export function Profile() {
  const { user } = useContext(UserContext);
  const [posts, setPosts] = useState([]);

  async function findAllPostsByUser() {
    const PostsResponse = await getPostsByUserId();
    setPosts(PostsResponse.data.posts);
  }

  useEffect(() => {
    findAllPostsByUser();
  }, []);

  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileIconEdit>
          <i className="bi bi-pencil-square"></i>
        </ProfileIconEdit>

        <ProfileBackground src={user.background} alt="" />

        <ProfileUser>
          <ProfileAvatar src={user.avatar} alt="foto de usuario" />
          <h2>{user.name}</h2>
          <h3>{user.username}</h3>
        </ProfileUser>

        <ProfileActions>
          <ProfileIconAdd>
            <i className="bi bi-plus-circle"></i>
          </ProfileIconAdd>
        </ProfileActions>
      </ProfileHeader>

      <ProfilePosts>
        {posts.length === 0 && <h3>Nenhum post encontrado.</h3>}

        {posts.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              text={item.text}
              banner={item.banner}
              likes={item.likes}
              comments={item.comments}
            />
          );
        })}
      </ProfilePosts>
    </ProfileContainer>
  );
}
