import PropTypes from 'prop-types'
import BookMark from '../BookMark/BookMark';


const BookMarks = ({bookMarks}) => {

    return (
        <div className="md:w-1/3 bg-gray-500 p-4 m-4 rounded-2xl">
            <h2 className="text-3xl text-white text-center ">BookMarked Blog: {bookMarks.length}</h2>
            {
                bookMarks.map((bookMark) => <BookMark key={bookMark.id} bookMark={bookMark}></BookMark>)
            }
        </div>
    );
};

BookMarks.propTypes ={
    bookMarks: PropTypes.array
}
export default BookMarks;