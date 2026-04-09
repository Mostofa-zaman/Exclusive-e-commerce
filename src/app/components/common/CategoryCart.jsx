const CategoryCart = ({ itemData }) => {
  return (
    <div
      className="flex flex-col items-center justify-center py-6 px-4 border border-[#0000004d] rounded-[4px] 
                    hover:bg-[#DB4444] hover:border-transparent group transition duration-500
                    w-full max-w-[200px] min-w-[120px] text-center
                    overflow-hidden"
    >
      {/* Icon */}
      <span className="text-[45px] group-hover:text-white flex-shrink-0">
        {itemData.icon && (
          <itemData.icon className="w-10 h-10 md:w-12 md:h-12" />
        )}
      </span>

      {/* Name / Text */}
      <p
        className="mt-2 text-sm md:text-base font-medium text-text2 group-hover:text-white
                    break-words truncate ... text-center"
      >
        {itemData.name}
      </p>
    </div>
  );
};

export default CategoryCart;
