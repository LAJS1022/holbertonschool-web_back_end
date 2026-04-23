#!/usr/bin/env python3
"""Module providing a function to list all documents in a collection."""


def list_all(mongo_collection):
    """Return a list of all documents in the given MongoDB collection.

    Returns an empty list if no documents are found.
    """
    return list(mongo_collection.find()) or []
