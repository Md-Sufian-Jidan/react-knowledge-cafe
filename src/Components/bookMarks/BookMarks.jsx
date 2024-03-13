import PropTypes from 'prop-types'
import BookMark from '../BookMark/BookMark';


const BookMarks = ({ bookMarks, readingTime }) => {

    return (
        <div className='text-center mt-4'> 
            <h3 className='text-4xl mt-4'>Reading Time: {readingTime}</h3>
            <div className="md:w-full bg-gray-500 p-4 m-4 rounded-2xl">
                <h2 className="text-3xl text-white text-center ">BookMarked Blog: {bookMarks.length}</h2>
                {
                    bookMarks.map((bookMark, idx) => <BookMark key={idx} bookMark={bookMark}></BookMark>)
                }
            </div>
        </div>
    );
};

BookMarks.propTypes = {
    bookMarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default BookMarks;