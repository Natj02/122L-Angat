import { useState } from "react";
import supabase from "../helpers/supabaseClient";
import { useAuth } from "../helpers/AuthContext";

function AddNewsProject() {
  const { user } = useAuth();
  const [category, setCategory] = useState("news");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const allowedExtensions = ["jpg", "jpeg", "png"];

  // Handle file selection
  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    
    event.preventDefault();
    setLoading(true);
    setMessage("");

    if (!title || !description) {
      setMessage("Title and Description are required.");
      setLoading(false);
      return;
    }

    try {
      let imageUrl = null;

      if (image) {
        const fileExt = image.name.split(".").pop();
        console.log(fileExt);
        if (!allowedExtensions.includes(fileExt)) {
          setMessage(
            `Invalid file type! Only ${allowedExtensions.join(", ")} files are allowed.`,
          );
          return;
        }

        const fileName = image.name

        //Avoid Duplicates
        const { data: existingFile } = await supabase.storage
          .from("projects_news")
          .list("projects");
        if (existingFile?.some((file) => file.name === fileName)) return null;

        //upload
        const { data, error } = await supabase.storage
          .from("projects_news")
          .upload(`${category}/${fileName}`, image);

        if (error) {
          setMessage(error.message);
          return;
        }
        imageUrl = `${category}/${fileName}`
        /*
        imageUrl = data?.path
          ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/projects_news/${category}/${fileName}`
          : null;*/
      }

      const table = category === "news" ? "news" : "project";
      const dataToInsert =
        category === "news"
          ? {
              uid: user?.id,
              title,
              content: description,
              status: "pending", // Default status for admin approval
              created_at: new Date(),
              updated_at: new Date(),
              image_filename: imageUrl
            }
          : {
              uid: user?.id,
              name: title,
              description,
              status: "pending",
              start_date: new Date(), // Default to today (adjust as needed)
              end_date: null, // Can be left null or set a default
              created_at: new Date(),
              updated_at: new Date(),
              image_filename: imageUrl
            };

      const { error } = await supabase.from(table).insert([dataToInsert]);

      if (error) {
        setMessage(error.message);
        return;
      }

      setMessage("Submission successful!");
      setTitle("");
      setDescription("");
      setImage(null);
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full bg-base-300">
        <div className="flex-grow flex justify-center items-center my-8">
          <div className="max-w-2xl w-full bg-primary p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Add {category === "news" ? "News" : "Project"}
            </h2>

            {/* Toggle between News & Project */}
            <div className="flex justify-center mb-4">
              <button
                className={`px-4 py-2 rounded-l-md ${category === "news" ? "bg-secondary text-white" : "bg-gray-300"}`}
                onClick={() => setCategory("news")}
              >
                News
              </button>
              <button
                className={`px-4 py-2 rounded-r-md ${category === "projects" ? "bg-secondary text-white" : "bg-gray-300"}`}
                onClick={() => setCategory("projects")}
              >
                Project
              </button>
            </div>

            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Title Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border rounded-md bg-white"
                  placeholder={`Enter ${category} title`}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              {/* Description Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  className="mt-1 p-2 w-full border rounded-md bg-white resize-none"
                  placeholder={`Enter ${category} description`}
                  rows="4"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>


              {category === "projects" && <><div>
                <label className="block text-sm font-medium text-gray-700">
                  Start Date
                </label>
                <input type="date" class="input" placeholder="My awesome page" />
              </div><div>
                  <label className="block text-sm font-medium text-gray-700">
                    End Date
                  </label>
                  <input type="date" class="input" placeholder="My awesome page" />
                </div></>}
              

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Upload Image
                </label>
                <input
                  type="file"
                  className="mt-1 p-2 w-full border rounded-md bg-white"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-secondary text-white py-2 px-4 rounded-md hover:bg-pink-800"
                disabled={loading}
              >
                {loading
                  ? "Submitting..."
                  : `Submit ${category === "news" ? "News" : "Project"}`}
              </button>

              {/* Display Message */}
              {message && (
                <p className="text-center mt-2 text-red-500">{message}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddNewsProject;
