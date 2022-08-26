import { fetcher } from "../utils";
const Profile = ({ user }) => {
  return <div data-token="${TOKEN_FOUND}">{user.username}</div>;
};

export async function getServerSideProps() {
  const users = await fetcher("/u");
  return {
    props: {
      visits: 0,
      user: users[0],
    },
  };
}

export default Profile;
