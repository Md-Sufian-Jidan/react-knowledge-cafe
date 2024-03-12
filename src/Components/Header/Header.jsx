import profile from '../../assets/images/profile.png'

const Header = () => {
  return (
    <div className='flex justify-between items-center mx-10 p-4 border-b'>
      <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;