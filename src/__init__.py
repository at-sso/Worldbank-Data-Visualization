from .logger import *
from .functions import *
from .var import *


def main() -> int:
    "Main function"
    logger.info("Main function started.")
    logger_specials.was_called(__name__, main.__name__)

    return 0
