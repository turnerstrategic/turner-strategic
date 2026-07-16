# Turner Strategic API

FastAPI backend placeholder. No business logic yet — this exists to establish the
service boundary and local dev workflow.

## Requirements

Python 3.11+.

## Setup

```bash
cd apps/api
python3 -m venv .venv
source .venv/bin/activate
pip install -e ".[dev]"
```

## Run

```bash
uvicorn app.main:app --reload --port 8000
```

`GET /health` returns `{"status": "ok"}`.

## Lint

```bash
ruff check .
```
