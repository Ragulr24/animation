const TodoForm = ({
  title,
  desc,
  onTitleChange,
  onDescChange,
  onSubmit,
  handleClose,
  isDisabled ,
  mode = "Create",
}) => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <form
        className="bg-white p-6 w-full max-w-md rounded-md shadow-md"
        onSubmit={onSubmit} 
      >
        <h3 className="font-semibold text-center text-xl mb-4">
          {mode} Todo
        </h3>

        <div className="flex flex-col mb-4">
          <label className="mb-1 font-medium">Title</label>
          <input
            type="text"
            placeholder="Enter the title"
            className="border border-black p-2 rounded w-full"
            required
            value={title}
            onChange={onTitleChange}
          />
        </div>

        <div className="flex flex-col mb-4">
          <label className="mb-1 font-medium">Description</label>
          <input
            type="text"
            placeholder="Enter the description"
            className="border border-black p-2 rounded w-full"
            required
            value={desc}
            onChange={onDescChange}
          />
        </div>
<div className="flex gap-2">
        <button
          type="submit"
          disabled={isDisabled}
          className={`px-4 py-2 rounded w-full text-white ${
            isDisabled
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 cursor-pointer"
          }`}
        >
          {mode === "Update" ? "Update" : "Submit"}
        </button>
       { mode ==='Update' && <button
          type="submit"
          className={"px-4 py-2 rounded w-full text-white bg-blue-500 hover:bg-blue-600 cursor-pointer"}
          onClick={handleClose}
        >
          Close
        </button>}
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
