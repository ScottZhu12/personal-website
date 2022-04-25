const BlogPost = ({ blogImg, blogHeading, blogTime }) => {
  return (
    <div className='blog-post'>
      <div className='blog-post__img'>
        <img src={blogImg} alt='programming' />
      </div>
      <h3 className='heading heading--blog-content'>{blogHeading}</h3>
      <div className='paragraph paragraph--blog-content'>
        {blogTime}
        <span></span>
      </div>
    </div>
  );
};

export default BlogPost;
