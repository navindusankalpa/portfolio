//postName
document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const blogId = params.get('id'); // Get the 'id' from the URL query string
    
    fetch('./blogs.json')
        .then(response => response.json())
        .then(data => {
            const blog = data.find(blog => blog.id === blogId); // Find the blog by ID
            
            if (blog) {
                const blogContainer = document.getElementById('blog-container');

                document.getElementById('postName').innerHTML = blog.title;
                document.getElementById('postName2').innerHTML = blog.title;
                
                blogContainer.innerHTML = `
                    <div class="blog-card d-flex flex-column">
                        <center><img src="${blog.image_url}" id='blg-img' class="blog-card-img img-fluid mt-3 shadow-lg" style="border-radius: 10px; height: auto; text-align: center;" alt="${'image ' + blog.title}"></center>
                        <div class="blog-card-body">
                            <div class="d-flex flex-row mt-0" style="gap: 20px">
                                <p class="blog-card-caption">Author:&nbsp;<span>${blog.author}</span></p>
                                <p class="blog-card-caption">Published:&nbsp;<span>${blog.date}</span></p>
                            </div>  
                            <p class="blog-card-content">${blog.content}</p>  
                        </div>
                    </div>
                `;
            } else {
                console.error('Blog post not found');
                document.getElementById('blog-container').innerHTML = '<h1><center><font color="red">404 Blog post not found</font></center></h1>';
            }
        })
        .catch(error => {
            console.error('Error fetching the blog posts:', error);
            document.getElementById('blog-container').innerHTML = '<p>Error loading the blog post</p>';
        });
});