import Header from "../components/header/Header";
import Profile from "../components/profile/Profile";
import RepositoryCard from "../components/repository-card/RepositoryCard";

export default function Home() {
  const searchValue = "Uchechukwu";
  const repoName = 'contact-page';

  return (
    <>
      <Header />
      <Profile searchValue={searchValue} />
      <RepositoryCard searchValue={searchValue} repoName={repoName} />
    </>
  );
}
