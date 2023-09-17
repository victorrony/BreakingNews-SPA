import styled from "styled-components";

export const ProfileContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ProfileHeader = styled.header`
  display: flex;
  width: 80%;
  margin-top: 1rem;
  justify-content: space-between;
  align-items: fkex-between;
  position: relative;
  border-radius: 0.3rem;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  background-color: #fff;
  z-index: 0;
`;

export const ProfileIconEdit = styled.i`
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
  color: #0bade3;
  background-color: #ffffff;
  padding: 0.5rem;
  border-radius: 50%;
  font-size: 1.5rem;
  transition: all 0.3s ease-in-out;

  :hover {
    color: #fff;
    background-color: #0bade3;
  }
`;

export const ProfileBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 50%;
  object-fit: cover;
  z-index: -1;
  boder-radius: 0.3rem 0.3rem 0 0;
`;

export const ProfileUser = styled.div`
  padding: 2rem;
`;

export const ProfileAvatar = styled.img`
  width: 13rem;
  border-radius: 50%;
  boreder: solid 5px #fff;
  object-fit: cover;
  object-position: center;
`;

export const ProfileActions = styled.div`
  padding: 2rem;
`;

export const ProfileIconAdd = styled.i`
  background-color: transparent;
  border: none;
  outline: none;
  color: #0bade3;
  border-radius: 50%;
  cursor: pointer !important;
  font-family: "Font Awesome 5 Free";
  font-weight: bold;
  font-size: 2rem;

  transition: all 0.3s ease-in-out;

  :hover {
    color: #0a86af;
    font-size: 2.1rem;
  }
`;

export const ProfilePosts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  margin: 1rem auto;
  width: 80%;

  h3 {
    grid-column: 1 / -1;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: #023344;
    margin: 1rem;
  }
`;
