from .backend.logger import *
from .backend.functions import *
from .const import *
from .var import *

from flask import Flask, render_template, jsonify
from flask import (
    Response as FlaskResponse,
)
import pandas

from typing import List, Dict, Any
from typing_extensions import Hashable

CSVType = List[Dict[Hashable, Any]]

app = Flask(__name__, template_folder="template", static_folder="frontend")

data: CSVType = pandas.read_csv(RESOURCE_FILE).to_dict(orient="records")
logger_specials.values_returned(data, init=__name__)


@app.route("/")
def index() -> str:
    return render_template("index.html", data=data)


@app.route("/data")
def get_data() -> FlaskResponse:
    return jsonify(data)


def main() -> int:
    "Main function"
    logger.info("Main function started.")
    logger_specials.was_called(__name__, main.__name__)

    app.run(debug=True)

    return 0
