#!/usr/bin/env python3
"""Module providing a function to insert a document in a collection."""


def insert_school(mongo_collection, **kwargs):
    """Insert a new document in the collection using the provided kwargs.

    Returns the new document's _id.
    """
    return mongo_collection.insert_one(kwargs).inserted_id
