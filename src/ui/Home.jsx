import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';


function Home() {
  const username = useSelector((state) => state.user.username);


  return (
    <div className='text-center my-5 sm:my-16'>
      <h1 className="text-xl font-semibold mb-8 md:text-3xl px-3">
        The best pizza.
        <br />
        <span className="text-yellow-500">
        Straight out of the oven, straight to you.
        </span>
      </h1>


      {username === '' ? <CreateUser /> : <Button to={'/menu'} type={'primary'}>continue ordering, {username}</Button>}
    </div>
  );
}

export default Home;
