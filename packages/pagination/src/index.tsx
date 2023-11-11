import React from 'react';
import {
  HiChevronLeft,
  HiChevronRight,
  HiArrowLeft,
  HiArrowRight,
} from 'react-icons/hi2';

interface PaginationProps {
  type?: 'card' | 'centered' | 'simple';
  currentPage: number;
  totalResults: number;
  resultsPerPage: number;
  onPrevClick: () => void;
  onNextClick: () => void;
  onPageClick: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  type = 'card',
  currentPage,
  totalResults,
  resultsPerPage,
  onPrevClick,
  onNextClick,
  onPageClick,
}) => {
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  switch (type) {
    case 'card':
      return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white py-3">
          <div className="flex flex-1 justify-between sm:hidden">
            <button
              type="button"
              onClick={onPrevClick}
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={onNextClick}
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </button>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing{' '}
                <span className="font-medium">
                  {(currentPage - 1) * resultsPerPage + 1}
                </span>{' '}
                to{' '}
                <span className="font-medium">
                  {Math.min(currentPage * resultsPerPage, totalResults)}
                </span>{' '}
                of <span className="font-medium">{totalResults}</span> results
              </p>
            </div>
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <button
                  type="button"
                  onClick={onPrevClick}
                  disabled={isFirstPage}
                  className={`${
                    isFirstPage ? 'opacity-50 cursor-not-allowed' : ''
                  } relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20`}
                >
                  <span className="sr-only">Previous</span>
                  <HiChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => onPageClick(index + 1)}
                    aria-current={
                      currentPage === index + 1 ? 'page' : undefined
                    }
                    className={`relative ${
                      currentPage === index + 1 ? 'z-10 ' : ''
                    }inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium ${
                      currentPage === index + 1
                        ? 'text-indigo-600'
                        : 'text-gray-500 hover:bg-gray-50'
                    } focus:z-20`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={onNextClick}
                  disabled={isLastPage}
                  className={`${
                    isLastPage ? 'opacity-50 cursor-not-allowed' : ''
                  } relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20`}
                >
                  <span className="sr-only">Next</span>
                  <HiChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      );

    case 'centered':
      return (
        <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
          <div className="-mt-px flex w-0 flex-1">
            <button
              type="button"
              onClick={onPrevClick}
              disabled={isFirstPage}
              className={`${
                isFirstPage ? 'opacity-50 cursor-not-allowed' : ''
              } inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700`}
            >
              <HiArrowLeft
                className="mr-3 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              Previous
            </button>
          </div>
          <div className="hidden md:-mt-px md:flex">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => onPageClick(index + 1)}
                className={`inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium ${
                  currentPage === index + 1
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className="-mt-px flex w-0 flex-1 justify-end">
            <button
              type="button"
              disabled={isLastPage}
              onClick={onNextClick}
              className={`${
                isLastPage ? 'opacity-50 cursor-not-allowed' : ''
              } inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700`}
            >
              Next
              <HiArrowRight
                className="ml-3 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </button>
          </div>
        </nav>
      );

    case 'simple':
      return (
        <nav
          className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
          aria-label="Pagination"
        >
          <div className="hidden sm:block">
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to{' '}
              <span className="font-medium">{resultsPerPage}</span> of{' '}
              <span className="font-medium">{totalResults}</span> results
            </p>
          </div>
          <div className="flex flex-1 justify-between sm:justify-end">
            <button
              type="button"
              disabled={isFirstPage}
              onClick={onPrevClick}
              className={`${
                isFirstPage ? 'opacity-50 cursor-not-allowed' : ''
              } relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-20`}
            >
              Previous
            </button>
            <button
              type="button"
              disabled={isLastPage}
              onClick={onNextClick}
              className={`${
                isLastPage ? 'opacity-50 cursor-not-allowed' : ''
              } relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-20`}
            >
              Next
            </button>
          </div>
        </nav>
      );

    default:
      return null;
  }
};

export default Pagination;