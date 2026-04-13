#!/usr/bin/env python3
"""Module for make_multiplier function with type annotations."""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Return a function that multiplies a float by the given multiplier."""
    def multiply(x: float) -> float:
        """Multiply a float by the enclosing multiplier."""
        return x * multiplier
    return multiply
