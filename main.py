from src import main
from src.backend.logger import logger
import src.backend.timer as timer


if __name__ == "__main__":
    logger.debug(f"{ main } returned code: { timer.timer(main) }")
