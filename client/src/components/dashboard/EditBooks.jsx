import { useLoaderData, useParams } from "react-router-dom";
import {
  Button,
  Checkbox,
  Label,
  Select,
  Textarea,
  TextInput,
} from "flowbite-react";
import { useState } from "react";

function EditBooks() {
  const { id } = useParams();
  const {
    bookTitle,
    authorName,
    imageURL,
    category,
    bookDescription,
    bookPdfURL,
  } = useLoaderData();

  const bookCategories = [
    "Programming",
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-Improvement",
    "Memoir",
    "Business",
    "Children Books",
    "Novel",
    "Travel",
    "Religion",
    "Art and Design",
  ];
  const [selectedBookCategory, setSelectedBookCategory] = useState(category);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const category = form.category.value;
    const imageURL = form.imageURL.value;
    const bookDescription = form.bookDescription.value;
    const bookPdfURL = form.bookPdfURL.value;

    const updateBookObj = {
      bookTitle,
      authorName,
      category,
      bookDescription,
      bookPdfURL,
      imageURL,
    };
    const jsonString = JSON.stringify(updateBookObj);
    console.log(jsonString);

    fetch(`http://localhost:4000/update-books/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: jsonString,
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Successfully updated");
        form.reset();
      })
      .catch((err) => alert(`Failed to upload --> ${err}`));
  };
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update Books</h2>

      <form
        action="submit"
        onSubmit={handleUpdate}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        <div className="flex gap-8">
          {/* FIRST ROW */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              placeholder="Book Title"
              required
              type="text"
              defaultValue={bookTitle}
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              placeholder="Author name"
              required
              defaultValue={authorName}
              type="text"
            />
          </div>
        </div>
        {/* Second ROw */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="category" value="Book Category" />
            </div>
            <Select
              name="category"
              id="category"
              defaultValue={category}
              className="rounded w-full"
              onChange={(e) => setSelectedBookCategory(e.target.value)}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Image Url" />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              defaultValue={imageURL}
              placeholder="Image Url"
              required
              type="text"
            />
          </div>
        </div>

        {/* Third Row */}
        <div className="flex gap-8">
          <div className="lg:w-full">
            <div className="mb-2 block">
              <Label htmlFor="bookDescription" value="Book Description" />
            </div>
            <Textarea
              id="bookDescription"
              placeholder="Book Description"
              defaultValue={bookDescription}
              name="bookDescription"
              required
              row={8}
            />
          </div>
        </div>

        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookPdfURL" value="BookPDF Url" />
            </div>
            <TextInput
              id="bookPdfURL"
              defaultValue={bookPdfURL}
              name="bookPdfURL"
              placeholder="BookPDF Url"
              required
              type="text"
            />
          </div>
        </div>
        <button className="bg-blue-700 text-center py-4 px-3 text-white rounded font-medium hover:bg-blue-800">
          Upload
        </button>
      </form>
    </div>
  );
}

export default EditBooks;
