import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaLinkedin, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  relationship: string;
  image: string;
  text: string;
  date: string;
  linkedin: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  if (!testimonials.length) {
    return null;
  }

  return (
    <section id="testimonials" className="py-20 bg-cardBg relative">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-20 bg-background" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }} />
      <div className="absolute bottom-0 left-0 w-full h-20 bg-background" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            People I've <span className="text-primary">Worked With</span>
          </h2>
          <p className="max-w-2xl mx-auto text-textColor/70">
            Testimonials from colleagues, managers, and clients who have witnessed my work firsthand.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: index === activeIndex ? 1 : 0,
                  x: index === activeIndex ? 0 : 100,
                  position: index === activeIndex ? 'relative' : 'absolute'
                }}
                transition={{ duration: 0.5 }}
                className="bg-background rounded-2xl p-8 md:p-10 shadow-lg border border-borderColor"
              >
                <FaQuoteLeft className="text-primary text-4xl mb-6 opacity-30" />
                
                <div className="mb-8">
                  <p className="text-lg italic mb-4">{testimonial.text}</p>
                  <div className="flex items-center">
                    <div className="h-px flex-grow bg-borderColor"></div>
                    <span className="px-4 text-sm text-textColor/50">{testimonial.date}</span>
                    <div className="h-px flex-grow bg-borderColor"></div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between items-center">
                  <div className="flex items-center mb-4 sm:mb-0">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-primary">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-textColor/70">{testimonial.title}</p>
                      <p className="text-xs text-primary">{testimonial.relationship}</p>
                    </div>
                  </div>
                  
                  <a 
                    href={`https://${testimonial.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-primary hover:text-accent transition-colors"
                  >
                    <FaLinkedin className="mr-1" />
                    View on LinkedIn
                  </a>
                </div>
              </motion.div>
            ))}

            {/* Navigation arrows */}
            <div className="flex justify-between items-center mt-8">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-cardBg border border-borderColor text-textColor hover:text-primary hover:border-primary transition-colors focus:outline-none"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === activeIndex ? 'bg-primary' : 'bg-borderColor hover:bg-primary/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-cardBg border border-borderColor text-textColor hover:text-primary hover:border-primary transition-colors focus:outline-none"
                aria-label="Next testimonial"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 