#!/usr/bin/env python3
"""Module providing hypermedia pagination for a baby names dataset."""
import csv
import math
from typing import List, Dict, Any


def index_range(page: int, page_size: int) -> tuple:
    """Return a tuple of start and end indexes for a given page and page size.

    Args:
        page: The page number (1-indexed, so page 1 is the first page).
        page_size: The number of items per page.

    Returns:
        A tuple (start_index, end_index) representing the range of indexes
        corresponding to the requested pagination parameters.
    """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return (start_index, end_index)


class Server:
    """Server class to paginate a database of popular baby names."""

    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        """Initialize Server with a private dataset attribute set to None."""
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Return the cached dataset, loading it from CSV if not yet cached."""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Return a page of the dataset based on page number and page size.

        Args:
            page: The page number to retrieve (1-indexed, default is 1).
            page_size: The number of records per page (default is 10).

        Returns:
            A list of rows corresponding to the requested page, or an empty
            list if the pagination parameters are out of range for the dataset.
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        start, end = index_range(page, page_size)
        dataset = self.dataset()

        if start >= len(dataset):
            return []

        return dataset[start:end]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict[str, Any]:
        """Return a dictionary of pagination metadata along with the data page.

        Args:
            page: The page number to retrieve (1-indexed, default is 1).
            page_size: The number of records per page (default is 10).

        Returns:
            A dictionary containing the following keys:
                - page_size: length of the returned dataset page
                - page: the current page number
                - data: the dataset page
                - next_page: number of the next page, or None if no next page
                - prev_page: number of the previous page, or None if no prev
                - total_pages: total number of pages in the dataset as an int
        """
        data = self.get_page(page, page_size)
        total_records = len(self.dataset())
        total_pages = math.ceil(total_records / page_size)

        next_page = page + 1 if page < total_pages else None
        prev_page = page - 1 if page > 1 else None

        return {
            'page_size': len(data),
            'page': page,
            'data': data,
            'next_page': next_page,
            'prev_page': prev_page,
            'total_pages': total_pages,
        }
