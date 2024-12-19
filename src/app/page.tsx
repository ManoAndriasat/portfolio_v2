import { redirect } from 'next/navigation';

const Home = () => {
  redirect('/about');
  
  return null;
};

export default Home;
