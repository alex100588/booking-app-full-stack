import { cn } from "@/lib/utils"

const itemClasses =
  "h-[63px] px-8 flex flex-col justify-center rounded-full  hover:bg-red-100"

const SearchFilters = () => {
  return (
    <div className="h-[64px] flex items-center justify-between border rounded-full">
      <div className="flex items-center">
        <div className={cn(itemClasses)}>
          <p className="text-xs font-semibold">Where</p>
          <p className="text-sm">Wanted location</p>
        </div>

        <div className={cn(itemClasses)}>
          <p className="text-xs font-semibold">Check in</p>
          <p className="text-sm">Add dates</p>
        </div>

        <div className={cn(itemClasses)}>
          <p className="text-xs font-semibold">Check out</p>
          <p className="text-sm">Add dates</p>
        </div>

        <div className={cn(itemClasses)}>
          <p className="text-xs font-semibold">Who</p>
          <p className="text-sm">Add guests</p>
        </div>

        <div className="p-2">
          <div className="p-4 bg-gray-700 hover:bg-gray-500 transition rounded-full text-white">
            <svg
              viewBox="0 0 32 32"
              aria-hidden="true"
              style={{
                display: "block",
                fill: "none",
                height: 16,
                width: 16,
                stroke: "currentColor",
                strokeWidth: 4,
                overflow: "visible",
              }}
            >
              <path d="m20.666 20.666 10 10" />
              <path d="m24.0002 12.6668c0 6.2593-5.0741 11.3334-11.3334 11.3334-6.2592 0-11.3333-5.0741-11.3333-11.3334 0-6.2592 5.0741-11.3333 11.3333-11.3333 6.2593 0 11.3334 5.0741 11.3334 11.3333z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchFilters
