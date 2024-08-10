import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ManageBooks() {
  const [books, setBooks] = useState([]);

  const handleDelete = (id) => {
    fetch(`http://localhost:4000/delete/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        alert("Book has been deleted");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch("http://localhost:4000/all-books")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Convert response to JSON
      })
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);
  return (
    <div className="px-4 my-12 w-full">
      <h2 className="mb-8 text-3xl font-bold">Manage Books</h2>

      <Table className="lg:w-[1180px]">
        <Table.Head>
          <Table.HeadCell>NO.</Table.HeadCell>
          <Table.HeadCell>Book Title</Table.HeadCell>
          <Table.HeadCell>Author name</Table.HeadCell>
          <Table.HeadCell>Book Category</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        {books.map((item, i) => (
          <Table.Body className="divide-y" key={item._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {i + 1}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {item.bookTitle}
              </Table.Cell>
              <Table.Cell>{item.authorName}</Table.Cell>
              <Table.Cell>{item.category}</Table.Cell>

              <Table.Cell>
                <Link
                  to={`/admin/dashboard/update-books/${item._id}`}
                  className="font-medium mr-5 text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="bg-red-600 px-4 py-1 font-medium text-white rounded-md hover:bg-red-700"
                >
                  Delete
                </button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>
  );
}

export default ManageBooks;
