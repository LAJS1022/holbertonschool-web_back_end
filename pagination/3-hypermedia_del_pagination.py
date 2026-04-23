#!/usr/bin/env python3
"""Module providing deletion-resilient hypermedia pagination."""
import csv
import math
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names."""

    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        """Initialize Server with private dataset attributes set to None."""
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Return the cached dataset, loading it from CSV if not yet cached."""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Return the dataset indexed by sorting position, starting at 0."""
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """Return a deletion-resilient pagination dictionary.

        Ensures that if rows are deleted between queries, the user does not
        miss any items when navigating to the next page.

        Args:
            index: The start index of the current page (default is None).
            page_size: The number of records per page (default is 10).

        Returns:
            A dictionary containing:
                - index: the current start index
                - data: the actual page of the dataset
                - page_size: the current page size
                - next_index: the next index to query
        """
        indexed = self.indexed_dataset()
        assert index is not None and 0 <= index < len(indexed)

        data = []
        current = index

        while len(data) < page_size:
            row = indexed.get(current)
            if row is not None:
                data.append(row)
            current += 1
            if current > max(indexed.keys()):
                break

        return {
            'index': index,
            'data': data,
            'page_size': page_size,
            'next_index': current,
        }
