import React from 'react';

const Tools: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tool items will go here */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Tool 1</h3>
            <p className="mt-2">Description of Tool 1.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Tool 2</h3>
            <p className="mt-2">Description of Tool 2.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Tool 3</h3>
            <p className="mt-2">Description of Tool 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools; 