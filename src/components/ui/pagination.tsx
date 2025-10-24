interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    itemsPerPage: number;
    totalItems: number;
    onItemsPerPageChange: (itemsPerPage: number) => void;
}

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
    itemsPerPage,
    totalItems,
    onItemsPerPageChange,
}: PaginationProps) {
    const getVisiblePages = () => {
        const delta = 2;
        const range = [];
        const rangeWithDots = [];

        for (
            let i = Math.max(2, currentPage - delta);
            i <= Math.min(totalPages - 1, currentPage + delta);
            i++
        ) {
            range.push(i);
        }

        if (currentPage - delta > 2) {
            rangeWithDots.push(1, '...');
        } else {
            rangeWithDots.push(1);
        }

        rangeWithDots.push(...range);

        if (currentPage + delta < totalPages - 1) {
            rangeWithDots.push('...', totalPages);
        } else if (totalPages > 1) {
            rangeWithDots.push(totalPages);
        }

        return rangeWithDots;
    };

    const itemsPerPageOptions = [6, 8, 10, 12];

    if (totalItems < 6) return null;

    return (
        <div className='flex flex-col items-center justify-between mt-8 w-full px-4 gap-4'>
            {/* Пагинация */}
            <div className='flex items-center gap-2'>
                {/* Предыдущая страница */}
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-lg text-base font-medium transition-colors duration-200 ${
                        currentPage === 1
                            ? 'text-gray-400 cursor-not-allowed'
                            : 'text-base-gray hover:text-white hover:bg-[#3A5199]'
                    }`}
                >
                    ←
                </button>

                {/* Номера страниц */}
                {getVisiblePages().map((page, index) => (
                    <button
                        key={index}
                        onClick={() => typeof page === 'number' && onPageChange(page)}
                        disabled={page === '...'}
                        className={`px-4 pb-2 pt-2.5 rounded-lg text-base font-medium transition-colors duration-200 ${
                            page === currentPage
                                ? 'bg-[#3A5199] text-white'
                                : page === '...'
                                  ? 'text-gray-400 cursor-default'
                                  : 'text-base-gray hover:text-white hover:bg-[#3A5199]'
                        }`}
                    >
                        {page}
                    </button>
                ))}

                {/* Следующая страница */}
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-lg text-base font-medium transition-colors duration-200 ${
                        currentPage === totalPages
                            ? 'text-gray-400 cursor-not-allowed'
                            : 'text-base-gray hover:text-white hover:bg-[#3A5199]'
                    }`}
                >
                    →
                </button>
            </div>
            {/* Выбор количества элементов на странице */}
            <div className='flex items-center gap-2'>
                <span className='text-base-gray text-sm'>Показать по:</span>
                <select
                    value={itemsPerPage}
                    onChange={e => onItemsPerPageChange(Number(e.target.value))}
                    className='px-3 py-1 rounded-lg text-sm font-medium bg-[#2F2E33] text-white border border-[#3A5199] focus:outline-none focus:border-[#3A5199]'
                >
                    {itemsPerPageOptions.map(option => (
                        <option key={option} value={option} className='bg-[#2F2E33] text-white'>
                            {option}
                        </option>
                    ))}
                </select>
                <span className='text-base-gray text-sm'>из {totalItems} проектов</span>
            </div>
        </div>
    );
}
