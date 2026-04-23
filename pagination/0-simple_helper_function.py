#!/usr/bin/env python3
"""Module providing a simple pagination helper function."""


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
