import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    console.log(blog);
    return (
        <div>
            
        </div>
    );
};
// first PropTypes ar p small
Blog.propTypes = {
    // second ar p capital letter aa
    blog: PropTypes.object.isRequired
}
export default Blog;