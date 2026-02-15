from fastapi import FastAPI, Request
from fastapi.responses import StreamingResponse
from starlette.middleware.cors import CORSMiddleware
import httpx
import os
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI()

NEXTJS_URL = "http://127.0.0.1:3000"

origins_env = os.environ.get("CORS_ORIGINS", "*")
origins = [origin.strip() for origin in origins_env.split(",") if origin.strip()]
allow_credentials = True
if not origins:
    logger.warning("CORS_ORIGINS is empty; defaulting to '*' and disabling credentials.")
    origins = ["*"]
    allow_credentials = False
if "*" in origins:
    if len(origins) > 1:
        logger.warning(
            "CORS_ORIGINS contains '*', ignoring other origins and disabling credentials."
        )
    origins = ["*"]
    allow_credentials = False

app.add_middleware(
    CORSMiddleware,
    allow_credentials=allow_credentials,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.api_route("/api/{path:path}", methods=["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"])
async def proxy_to_nextjs(request: Request, path: str):
    target = f"{NEXTJS_URL}/api/{path}"
    headers = dict(request.headers)
    headers.pop("host", None)

    async with httpx.AsyncClient(timeout=30.0, follow_redirects=False) as client:
        response = await client.request(
            method=request.method,
            url=target,
            headers=headers,
            content=await request.body(),
            params=request.query_params,
        )

    excluded = {"content-encoding", "content-length", "transfer-encoding", "connection"}
    resp_headers = {k: v for k, v in response.headers.items() if k.lower() not in excluded}

    return StreamingResponse(
        iter([response.content]),
        status_code=response.status_code,
        headers=resp_headers,
    )
