

function CategoryChips({ category, isChosen, onClick }) {
  const { name } = category;
  return (
    <div
      onClick={onClick}
      className={` ${
        isChosen ? "bg-blue-600 text-white" : "bg-gray-100 text-black"
      } p-1
        cursor-pointer
        hover:bg-purple-100
        border-purple-400 border px-2 rounded-md`}
    >
      <button >{name}</button>
    </div>
  );
}

export default CategoryChips;