#!/usr/bin/env python3
"""Module providing a function to update topics of a school document."""
from typing import List


def update_topics(mongo_collection, name: str, topics: List[str]):
    """Update all topics of a school document matching the given name.

    Args:
        mongo_collection: the pymongo collection object
        name: the school name to update
        topics: the list of topics to set for the school
    """
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
    
