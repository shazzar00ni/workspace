import api from './api';

// Description: Get featured projects for the My Work section
// Endpoint: GET /api/portfolio/featured-projects
// Request: {}
// Response: { projects: Array<{ _id: string, title: string, category: string, image: string, description: string }> }
export const getFeaturedProjects = () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        projects: [
          {
            _id: '1',
            title: 'Brand Identity Design',
            category: 'Branding',
            image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop',
            description: 'Complete brand identity system including logo, color palette, and brand guidelines for a modern tech startup.'
          },
          {
            _id: '2',
            title: 'Annual Report Layout',
            category: 'Print Design',
            image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
            description: 'Elegant annual report design featuring clean typography and compelling data visualization.'
          },
          {
            _id: '3',
            title: 'Custom Illustration Series',
            category: 'Illustration',
            image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop',
            description: 'Hand-crafted illustration series for editorial publication with unique artistic style.'
          }
        ]
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   return await api.get('/api/portfolio/featured-projects');
  // } catch (error) {
  //   throw new Error(error?.response?.data?.error || error.message);
  // }
}

// Description: Get about information including profile image and bio
// Endpoint: GET /api/portfolio/about
// Request: {}
// Response: { aboutInfo: { profileImage: string, bio: string, approach: string, experience: string } }
export const getAboutInfo = () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        aboutInfo: {
          profileImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
          bio: 'With over 8 years of experience in visual design, I specialize in creating compelling brand identities and print materials that tell stories and connect with audiences. My passion lies in transforming complex ideas into simple, elegant visual solutions.',
          approach: 'I believe great design starts with understanding. Every project begins with deep research into your brand, audience, and goals. This foundation allows me to create designs that not only look beautiful but also serve their intended purpose effectively.',
          experience: 'I\'ve had the privilege of working with diverse clients ranging from startups to Fortune 500 companies. My work has been featured in design publications and has helped businesses achieve their communication goals through thoughtful visual design.'
        }
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   return await api.get('/api/portfolio/about');
  // } catch (error) {
  //   throw new Error(error?.response?.data?.error || error.message);
  // }
}

// Description: Get design services offered
// Endpoint: GET /api/portfolio/services
// Request: {}
// Response: { services: Array<{ _id: string, title: string, description: string, icon: string }> }
export const getDesignServices = () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        services: [
          {
            _id: '1',
            title: 'Print Design',
            description: 'From business cards to annual reports, I create print materials that make a lasting impression with thoughtful typography and layout design.',
            icon: 'printer'
          },
          {
            _id: '2',
            title: 'Branding',
            description: 'Complete brand identity systems that capture your essence and communicate your values through cohesive visual language and strategic design.',
            icon: 'palette'
          },
          {
            _id: '3',
            title: 'Illustration',
            description: 'Custom illustrations that bring unique personality to your projects, from editorial work to marketing materials and digital applications.',
            icon: 'brush'
          }
        ]
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   return await api.get('/api/portfolio/services');
  // } catch (error) {
  //   throw new Error(error?.response?.data?.error || error.message);
  // }
}

// Description: Get gallery projects for the project gallery section
// Endpoint: GET /api/portfolio/gallery
// Request: {}
// Response: { projects: Array<{ _id: string, title: string, category: string, image: string, largeImage: string }> }
export const getGalleryProjects = () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        projects: [
          {
            _id: '1',
            title: 'Corporate Brochure',
            category: 'Print Design',
            image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=300&fit=crop',
            largeImage: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop'
          },
          {
            _id: '2',
            title: 'Logo Design',
            category: 'Branding',
            image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=300&h=300&fit=crop',
            largeImage: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop'
          },
          {
            _id: '3',
            title: 'Editorial Illustration',
            category: 'Illustration',
            image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=300&fit=crop',
            largeImage: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop'
          },
          {
            _id: '4',
            title: 'Packaging Design',
            category: 'Print Design',
            image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop',
            largeImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop'
          },
          {
            _id: '5',
            title: 'Brand Guidelines',
            category: 'Branding',
            image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=300&h=300&fit=crop',
            largeImage: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=600&fit=crop'
          },
          {
            _id: '6',
            title: 'Digital Illustration',
            category: 'Illustration',
            image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=300&fit=crop',
            largeImage: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop'
          },
          {
            _id: '7',
            title: 'Magazine Layout',
            category: 'Print Design',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
            largeImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop'
          },
          {
            _id: '8',
            title: 'Visual Identity',
            category: 'Branding',
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=300&fit=crop',
            largeImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop'
          },
          {
            _id: '9',
            title: 'Book Cover Design',
            category: 'Illustration',
            image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop',
            largeImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=600&fit=crop'
          }
        ]
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   return await api.get('/api/portfolio/gallery');
  // } catch (error) {
  //   throw new Error(error?.response?.data?.error || error.message);
  // }
}

// Description: Get client testimonials
// Endpoint: GET /api/portfolio/testimonials
// Request: {}
// Response: { testimonials: Array<{ _id: string, quote: string, clientName: string, clientTitle: string, clientCompany: string, clientImage?: string }> }
export const getTestimonials = () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        testimonials: [
          {
            _id: '1',
            quote: 'Shannon transformed our brand identity completely. Her attention to detail and creative vision exceeded our expectations. The new design has significantly improved our market presence.',
            clientName: 'Sarah Johnson',
            clientTitle: 'Marketing Director',
            clientCompany: 'TechFlow Solutions',
            clientImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
          },
          {
            _id: '2',
            quote: 'Working with Shannon was an absolute pleasure. She listened to our needs and delivered designs that perfectly captured our company culture. Highly recommended!',
            clientName: 'Michael Chen',
            clientTitle: 'CEO',
            clientCompany: 'Green Earth Co.',
            clientImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
          },
          {
            _id: '3',
            quote: 'The print materials Shannon designed for our campaign were stunning. Her creative approach and professional execution helped us achieve our marketing goals.',
            clientName: 'Emily Rodriguez',
            clientTitle: 'Creative Director',
            clientCompany: 'Bright Ideas Agency',
            clientImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face'
          }
        ]
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   return await api.get('/api/portfolio/testimonials');
  // } catch (error) {
  //   throw new Error(error?.response?.data?.error || error.message);
  // }
}

// Description: Submit contact form
// Endpoint: POST /api/portfolio/contact
// Request: { name: string, email: string, projectType: string, message: string }
// Response: { success: boolean, message: string }
export const submitContactForm = (data: { name: string; email: string; projectType: string; message: string }) => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: 'Thank you for your message! I will get back to you within 24 hours.'
      });
    }, 1000);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   return await api.post('/api/portfolio/contact', data);
  // } catch (error) {
  //   throw new Error(error?.response?.data?.error || error.message);
  // }
}