#!/usr/bin/env python3
"""Module providing a function to find schools by topic."""


def schools_by_topic(mongo_collection, topic: str):
    """Return a list of schools having the specified topic.

    Args:
        mongo_collection: the pymongo collection object
        topic: the topic to search for
    """
    return list(mongo_collection.find({"topics": topic}))
