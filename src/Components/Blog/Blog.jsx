import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa6";


const Blog = ({blog, handleBookMarks, handleMarkAsRead}) => {
    // console.log(blog);
    const {id, title, cover, author,author_img,posted_date ,reading_time,hashtags} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex items-center'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time}Min read</span>
                    <button onClick={() => handleBookMarks(blog)} className='ml-2 text-red-600 text-2xl'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-3xl'>{title}</h2>
            <p className='my-2'>{
                hashtags.map((hash, idx) => <span className='mx-2' key={idx}><a>#{hash}</a></span>)}
                </p>
                <button onClick={() =>handleMarkAsRead(reading_time, id)} className='text-purple-800 underline font-bold'>Mark As Read</button>
        </div>
    );
};
// first PropTypes ar p small
Blog.propTypes = {
    // second ar p capital letter aa
    blog: PropTypes.object.isRequired,
    handleBookMarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}
export default Blog;