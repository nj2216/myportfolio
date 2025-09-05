export type Template = {
  slug: string
  name: string
  description: string
  recommended?: string[]
  flags?: string[]
}

export const templates: Template[] = [
  {
    slug: "package",
    name: "Python Package",
    description: "Standard src/ layout with tests, packaging metadata, and tooling.",
    recommended: ["libraries", "packages"],
    flags: ["--gitrep", "--ci"],
  },
  {
    slug: "cli-tool",
    name: "CLI Tool",
    description: "Typer/argparse CLI app structure with entry points and examples.",
    recommended: ["command-line tools"],
    flags: ["--types", "--ci", "--gitrep"],
  },
  {
    slug: "flask-app",
    name: "Flask App",
    description: "Small Flask app with app.py, templates, static files, and requirements.",
    recommended: ["web apps", "prototyping"],
    flags: ["--ci", "--gitrep"],
  },
  {
    slug: "fastapi-service",
    name: "FastAPI Service",
    description: "FastAPI scaffold with routing, uvicorn, tests, and Dockerfile.",
    recommended: ["APIs", "services"],
    flags: ["--ci", "--gitrep"],
  },
  {
    slug: "django-project",
    name: "Django Project",
    description: "Minimal Django project scaffold with settings, urls, and manage.py.",
    recommended: ["web apps"],
    flags: ["--gitrep"],
  },
  {
    slug: "data-science",
    name: "Data Science",
    description: "Notebook-friendly layout with reproducible environments and scripts.",
    recommended: ["prototyping", "analysis"],
    flags: ["--types"],
  },
  {
    slug: "jupyter-notebook",
    name: "Jupyter Notebook",
    description: "Minimal project for exploratory analysis with Jupyter configuration.",
    recommended: ["exploration"],
    flags: [],
  },
  {
    slug: "poetry-project",
    name: "Poetry Project",
    description: "Poetry-based Python project scaffold with dependencies and pytest.",
    recommended: ["packaging"],
    flags: ["--gitrep"],
  },
  {
    slug: "dockerized-app",
    name: "Dockerized App",
    description: "Dockerized Python scaffold with Dockerfile and requirements.",
    recommended: ["containers"],
    flags: ["--gitrep"],
  },
  {
    slug: "streamlit-app",
    name: "Streamlit App",
    description: "Streamlit app scaffold with app.py and requirements.",
    recommended: ["dashboards", "prototyping"],
    flags: [],
  },
  {
    slug: "gradio-demo",
    name: "Gradio Demo",
    description: "Gradio demo scaffold with interface example.",
    recommended: ["demos", "prototyping"],
    flags: [],
  },
  {
    slug: "aws-lambda",
    name: "AWS Lambda",
    description: "AWS Lambda function scaffold with handler and SAM template.",
    recommended: ["serverless"],
    flags: [],
  },
  {
    slug: "telegram-bot",
    name: "Telegram Bot",
    description: "Telegram bot scaffold using python-telegram-bot library.",
    recommended: ["bots"],
    flags: [],
  },
  {
    slug: "sanic-app",
    name: "Sanic App",
    description: "Sanic async web app scaffold with routes, templates, and static files.",
    recommended: ["APIs", "async apps"],
    flags: [],
  },
  {
    slug: "aiohttp-app",
    name: "aiohttp App",
    description: "aiohttp server scaffold with routes, templates, and static files.",
    recommended: ["APIs", "async apps"],
    flags: [],
  },
  {
    slug: "mlops-project",
    name: "MLOps Project",
    description: "MLOps scaffold with src/, experiments/, models/, and data folders.",
    recommended: ["machine learning"],
    flags: ["--gitrep"],
  },
  {
    slug: "qt-desktop",
    name: "Qt Desktop App",
    description: "PyQt5/6 desktop GUI app scaffold with app.py.",
    recommended: ["desktop apps"],
    flags: [],
  },
  {
    slug: "electron-python",
    name: "Electron + Python",
    description: "Electron frontend with Python backend server.",
    recommended: ["desktop apps", "hybrid apps"],
    flags: ["--gitrep"],
  },
  {
    slug: "grpc-service",
    name: "gRPC Service",
    description: "gRPC service scaffold with server.py and example.proto.",
    recommended: ["APIs", "microservices"],
    flags: ["--gitrep"],
  },
  // --- Extras we added ---
  {
    slug: "jupyter-poetry",
    name: "Jupyter + Poetry",
    description: "Notebook project with Poetry environment and testing setup.",
    recommended: ["analysis", "experimentation"],
    flags: ["--ci"],
  },
  {
    slug: "pandas-analysis",
    name: "Pandas Analysis",
    description: "Data analysis starter with Pandas, Matplotlib, and Seaborn.",
    recommended: ["data exploration", "reports"],
    flags: [],
  },
  {
    slug: "scrapy",
    name: "Scrapy Project",
    description: "Web scraping scaffold with spiders and scrapy.cfg.",
    recommended: ["web scraping", "automation"],
    flags: ["--gitrep"],
  },
  {
    slug: "pygame",
    name: "PyGame",
    description: "Basic PyGame loop with assets folder for images and sounds.",
    recommended: ["games", "demos"],
    flags: [],
  },
  {
    slug: "tkinter",
    name: "Tkinter GUI",
    description: "Simple desktop GUI scaffold using Tkinter.",
    recommended: ["desktop apps"],
    flags: [],
  },
  {
    slug: "pytorch",
    name: "PyTorch",
    description: "Deep learning project with train script, models, and data folders.",
    recommended: ["machine learning", "AI"],
    flags: ["--ci"],
  },
  {
    slug: "tensorflow",
    name: "TensorFlow",
    description: "Keras/TensorFlow starter with training script and dataset layout.",
    recommended: ["machine learning", "AI"],
    flags: ["--ci"],
  },
  {
    slug: "airflow",
    name: "Airflow DAGs",
    description: "Data pipeline project with example DAG and Airflow dependencies.",
    recommended: ["pipelines", "ETL"],
    flags: ["--gitrep"],
  },
  {
    slug: "flask-sqlalchemy",
    name: "Flask + SQLAlchemy",
    description: "Flask scaffold with SQLAlchemy models, templates, and static files.",
    recommended: ["web apps", "databases"],
    flags: ["--ci", "--gitrep"],
  },
  {
    slug: "fastapi-sqlmodel",
    name: "FastAPI + SQLModel",
    description: "FastAPI scaffold with SQLModel database and example model.",
    recommended: ["APIs", "services"],
    flags: ["--ci", "--gitrep"],
  }
]


export function getTemplate(slug: string) {
  return templates.find((t) => t.slug === slug)
}
