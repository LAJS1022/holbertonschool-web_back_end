#!/usr/bin/env python3
"""Module for creating asyncio Tasks from coroutines."""

import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """Return an asyncio Task for the wait_random coroutine."""
    return asyncio.get_event_loop().create_task(wait_random(max_delay))
