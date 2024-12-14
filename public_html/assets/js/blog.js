
document.addEventListener('DOMContentLoaded', function () {
    fetch('./blogs.json')
            .then(response => response.json())
            .then(data => {
                // Get the container where blog posts will be displayed
                const blogContainer = document.getElementById('blog-container');
                
                // Loop through each blog post and display it
                data.forEach(blog => {
                    const blogPost = document.createElement('div');
                    blogPost.classList.add('blog-card');
                    
                    const previewContent = blog.content.length > 500 ? blog.content.slice(0, 500) + '...' : blog.content;
                    
                    blogPost.innerHTML = `
                    <div class="blog-card-header">
                        <img src="${blog.image_url}" class="blog-card-img img-list-blog">
                    </div>
                    <div class="blog-card-body mb-0">
                        <h4 class="blog-card-title"><a href="blog.html?id=${encodeURIComponent(blog.id)}">${blog.title}</a></h4>
                        <div class="d-flex flex-row mt-0" style="gap: 20px">
                            <p class="blog-card-caption">Author:&nbsp;<span>${blog.author}</span></p>
                            <p class="blog-card-caption">Published:&nbsp;<span>${blog.date}</span></p>
                        </div>                        
                        <p class="blog-card-content">${previewContent}&nbsp;<a href="blogs.html?id=${encodeURIComponent(blog.id)}"><p class="blog-card-link"><b>Read more <i class="ti-angle-double-right"></b></p></i></a></p>
                    </div>
                    `;
                    blogContainer.appendChild(blogPost);
                });
            })
            .catch(error => {
                console.error('Error fetching the blog posts:', error);
            });
});