import api from './api';

// Description: Get blog posts for the blog section
// Endpoint: GET /api/blog/posts
// Request: {}
// Response: { posts: Array<{ _id: string, title: string, excerpt: string, content: string, image: string, publishedAt: string, category: string, readTime: number }> }
export const getBlogPosts = () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        posts: [
          {
            _id: '1',
            title: 'The Psychology of Color in Brand Design',
            excerpt: 'Understanding how colors influence emotions and decision-making in brand identity design.',
            content: 'Color psychology plays a crucial role in brand design. Different colors evoke different emotions and can significantly impact how customers perceive your brand...',
            image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=400&fit=crop',
            publishedAt: '2024-01-15',
            category: 'Branding',
            readTime: 5
          },
          {
            _id: '2',
            title: 'Typography Trends in Modern Design',
            excerpt: 'Exploring the latest typography trends that are shaping contemporary design.',
            content: 'Typography is more than just choosing fonts. It\'s about creating hierarchy, establishing mood, and ensuring readability...',
            image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop',
            publishedAt: '2024-01-10',
            category: 'Design',
            readTime: 7
          },
          {
            _id: '3',
            title: 'Creating Effective Print Layouts',
            excerpt: 'Best practices for designing print materials that capture attention and communicate effectively.',
            content: 'Print design requires a different approach than digital design. Understanding paper types, printing processes, and layout principles...',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
            publishedAt: '2024-01-05',
            category: 'Print Design',
            readTime: 6
          }
        ]
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   return await api.get('/api/blog/posts');
  // } catch (error) {
  //   throw new Error(error?.response?.data?.error || error.message);
  // }
}

// Description: Get a single blog post by ID
// Endpoint: GET /api/blog/posts/:id
// Request: { id: string }
// Response: { post: { _id: string, title: string, excerpt: string, content: string, image: string, publishedAt: string, category: string, readTime: number } }
export const getBlogPost = (id: string) => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        post: {
          _id: id,
          title: 'The Psychology of Color in Brand Design',
          excerpt: 'Understanding how colors influence emotions and decision-making in brand identity design.',
          content: 'Color psychology plays a crucial role in brand design. Different colors evoke different emotions and can significantly impact how customers perceive your brand. Red conveys energy and urgency, blue builds trust and reliability, while green represents growth and harmony. When designing a brand identity, it\'s essential to consider not just aesthetic preferences but also the psychological impact of color choices on your target audience.',
          image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=400&fit=crop',
          publishedAt: '2024-01-15',
          category: 'Branding',
          readTime: 5
        }
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   return await api.get(`/api/blog/posts/${id}`);
  // } catch (error) {
  //   throw new Error(error?.response?.data?.error || error.message);
  // }
}