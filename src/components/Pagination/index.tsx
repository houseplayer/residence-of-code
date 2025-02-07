interface PaginationProps {
	totalItems: number
	itemsPerPage: number
	currentPage: number
	onPageChange: (page: number) => void
}

const SEPARATOR = "..."

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }: PaginationProps) => {
	const totalPages = Math.ceil(totalItems / itemsPerPage)
	const maxVisiblePages = 8

	const getVisiblePages = (): (number | string)[] => {
		const pages: (number | string)[] = []
		if (totalPages <= maxVisiblePages) {
			for (let i = 1; i <= totalPages; i++) {
				pages.push(i)
			}
		} else {
			const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
			const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

			if (startPage > 1) {
				pages.push(1)
				if (startPage > 2) pages.push(SEPARATOR)
			}

			for (let i = startPage; i <= endPage; i++) {
				pages.push(i)
			}

			if (endPage < totalPages) {
				if (endPage < totalPages - 1) pages.push(SEPARATOR)
				pages.push(totalPages)
			}
		}
		return pages
	}

	const visiblePages = getVisiblePages()

	const handlePageClick = (page: number | string) => {
		if (page === SEPARATOR) return
		onPageChange(page as number)
	}

	return (
		<div className="flex justify-center space-x-2">
			<button
				className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 min-w-[80px]"
				onClick={() => handlePageClick(currentPage - 1)}
				disabled={currentPage === 1}
			>
				Previous
			</button>

			{visiblePages.map((page, index) => (
				<button
					key={index}
					className={`px-3 py-1 rounded ${
						page === currentPage
							? "bg-blue-500 text-white"
							: page === SEPARATOR
								? "bg-transparent cursor-default"
								: "bg-gray-200 hover:bg-gray-300"
					}`}
					onClick={() => handlePageClick(page)}
					disabled={page === SEPARATOR}
				>
					{page}
				</button>
			))}

			<button
				className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 min-w-[80px]"
				onClick={() => handlePageClick(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				Next
			</button>
		</div>
	)
}

export default Pagination
