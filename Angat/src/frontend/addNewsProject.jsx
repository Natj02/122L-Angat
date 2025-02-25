import Header from './components/header';
import Footer from './components/footer';

function AddNewsProject() {
  return (
    <> 
      <div className="w-full bg-base-300 min-h-screen flex flex-col">
        <Header />

        {/* Centered Container */}
        <div className="flex-grow flex justify-center items-center">
          <div className="max-w-2xl w-full bg-primary p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Add News / Project</h2>
            
            <form className="space-y-4">
              {/* Title Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input 
                  type="text" 
                  className="mt-1 p-2 w-full border rounded-md bg-white" 
                  placeholder="Enter title"
                />
              </div>

              {/* Description Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea 
                  className="mt-1 p-2 w-full border rounded-md bg-white resize-none" 
                  placeholder="Enter description"
                  rows="4"
                ></textarea>
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Upload Image</label>
                <input 
                  type="file" 
                  className="mt-1 p-2 w-full border rounded-md bg-white" 
                  accept="image/*"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="button" 
                className="w-full bg-secondary text-white py-2 px-4 rounded-md hover:bg-pink-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Footer stays at the bottom */}
        <Footer />
      </div>
    </>
  );
}

export default AddNewsProject;
