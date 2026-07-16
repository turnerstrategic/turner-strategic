from fastapi import FastAPI

app = FastAPI(title="Turner Strategic API")


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}
