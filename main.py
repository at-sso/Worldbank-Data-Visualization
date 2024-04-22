from icecream import install
from src import main
from src.logger import logger
import src.timer as timer


if __name__ == "__main__":
    install()
    logger.debug(f"{ main } returned code: { timer.timer(main) }")
