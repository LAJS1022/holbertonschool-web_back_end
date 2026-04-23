#!/usr/bin/env python3
"""Module providing simple pagination for a dataset of popular baby names."""
import csv
import math
from typing import List


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
